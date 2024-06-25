import { doc, getDoc, updateDoc } from "firebase/firestore"
import {db} from "./config"


const fetchUserDetails = async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        //console.log("User Data:", userData);
        return userData;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const updateUserDetails = async (userId, updatedData) => {
    try {
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, updatedData);
        console.log("User info updated successfully");
        
      } catch (error) {
        console.error("Error fetching document:", error);
      }
  }

export {fetchUserDetails, updateUserDetails};