import firebase from "../firebase";

const initialAppleState = {
    dirty: true,
    remainingBites: 5,
    color: "red",
    articleLst: [],
};

export default (state = initialAppleState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case "WASH":
            return {
                ...state,
                dirty: false
            };
        case "EAT":
            return {
                ...state,
                remainingBites: state.remainingBites - action.bites // minus 2 from the remaining number of bites
            };
        case "ROT":
            return {
                ...state,
                color: "brown"
            };
        // case "LISTING_ARTICLES":
        //     const db = firebase.firestore();
        //     let articlesStocked = [];
        //     db.collection("articles")
        //         .get()
        //         .then(function(querySnapshot) {
        //             querySnapshot.forEach(function(doc) {
        //                 articlesStocked.push({
        //                     id: doc.id,
        //                     content: doc.data().urlArticle
        //                 });
        //             });
        //         })
        //         .catch(function(error) {
        //             console.log("Error getting document:", error);
        //         });
        //     return {
        //         ...state,
        //         articleLst: articlesStocked,
        //     };
        default:
            return state;
    }
};
