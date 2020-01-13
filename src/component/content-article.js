import React, { Component } from "react";

import firebase from "../firebase";

class ContentArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            contentArticle: ""
        };
    }

    // componentDidMount() {
    //     this.setState({ loading: true });

    //     // Get article
    //     var self = this;
    //     const db = firebase.firestore();
    //     db.collection("articles")
    //         .doc(self.props.artSele)
    //         .get()
    //         .then(function(doc) {
    //             if (doc.exists) {
    //                 console.log("Document data:", doc.data());
    //                 self.setState({ contentArticle: doc.data().urlArticle });
    //             } else {
    //                 // doc.data() will be undefined in this case
    //                 console.log("No such document!");
    //             }
    //         })
    //         .catch(function(error) {
    //             console.log("Error getting document:", error);
    //         });
    // }

    render() {
        return <div className="content-article">
            {this.state.contentArticle}
            {this.props.selectedArticle}
        </div>;
    }
}
export default ContentArticle; // Don’t forget to use export default!
