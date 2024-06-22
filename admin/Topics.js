const topicsList = [
    {   
        key: 0, 
        name: "History",
        subtopics: [{key: 0, subtopic: "Indian History"}, {key: 1, subtopic: "World History"}],
        src: require("../assets/Icons/castle.png"), 
        fill: "rgba(255, 252, 166, 0.42)", 
        stroke: "#FFC700"
    },
    {
        key: 1, 
        name: "Geography", 
        subtopics: [{key: 0, subtopic: "Physical Geography"}, {key: 1, subtopic: "World Geography"}],
        src: require("../assets/Icons/globe.png"), 
        fill: "rgba(203, 217, 253, 0.4)", 
        stroke: "#3F6CDF"
    },
    {
        key: 2, 
        name: "Science", 
        subtopics: [{key: 0, subtopic: "Physical Science"}, {key: 1, subtopic: "Life Science"}],
        src: require("../assets/Icons/atom.png"), 
        fill: "rgba(39, 39, 188, 0.15)", 
        stroke: "#2727BC"
    },
    {
        key: 3, 
        name: "Math", 
        subtopics: [{key: 0, subtopic: "Basic Math"}],
        src: require("../assets/Icons/function.png"), 
        fill: "rgba(79, 200, 154, 0.24)", 
        stroke: "#4FC89A"
    },
    {
        key: 4, 
        name: "General Knowledge", 
        subtopics: [{key: 0, subtopic: "General Knowledge"}],
        src: require("../assets/Icons/book.png"), 
        fill: "rgba(254, 97, 8, 0.19)", 
        stroke: "#EF990C"
    },
    {
        key: 5, 
        name: "Technology", 
        subtopics: [{key: 0, subtopic: "History of Technlogical Milestones"}, {key: 1, subtopic: "Current Technological Trends"}],
        src: require("../assets/Icons/artificial-intelligence.png"), 
        fill: "rgba(113, 90, 161, 0.28)", 
        stroke: "#5E2ACA"
    },
    {
        key: 6, 
        name: "Movies", 
        subtopics: [{key: 0, subtopic: "Indian Movies"}, {key: 1, subtopic: "International Movies"}],
        src: require("../assets/Icons/clapperboard.png"), 
        fill: "rgba(250, 45, 174, 0.11)", 
        stroke: "#FA2DAE"
    },
    {
        key: 7, 
        name: "Books", 
        subtopics: [{key: 0, subtopic: 'Fiction'}, {key: 1, subtopic: "Non-fiction"}],
        src: require("../assets/Icons/literature.png"), 
        fill: "rgba(0, 233, 226, 0.1)", 
        stroke: "#05DBD4"
    },
    {
        key: 8, 
        name: "Sports", 
        subtopics: [{key: 0, subtopic: "Cricket"}, {key: 1, subtopic: "Football"}, {key: 2, subtopic: "Hockey"}, {key: 3, subtopic: "Others"}],
        src: require("../assets/Icons/football.png"), 
        fill: "rgba(113, 90, 161, 0.28)", 
        stroke: "#5E2ACA"
    },
    {
        key: 9, 
        name: "Food", 
        subtopics: [{key: 0, subtopic: "Indian Cuisine"}, {key: 1, subtopic: "International Cuisine"}],
        src: require("../assets/Icons/restaurant.png"), 
        fill: "rgba(254, 31, 30, 0.22)", 
        stroke: "#FA1F1E"
    },
    
]

export default topicsList;
