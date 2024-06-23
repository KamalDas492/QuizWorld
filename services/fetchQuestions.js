import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "./config"

function getRandomQuestions(arr, n) {
    let length = arr.length;
    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, n);
}

const fetchQuestions = async (quizTopic, numberOfQuestions) => {
    try {
        const questionCollection = collection(db, "questions");
        const q = query(questionCollection, where("Subtopic", "==", quizTopic));
        const querySnap = await getDocs(q);
        const questions = [];
        querySnap.forEach((doc) => {
            questions.push(doc.data());
        });
        //console.log("Questions: ", questions);
        return getRandomQuestions(questions, numberOfQuestions);
    } catch (err) {
        console.log(err);
    }
    
} 

export default fetchQuestions;