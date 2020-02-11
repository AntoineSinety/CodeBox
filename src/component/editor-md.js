import React from "react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

import firebase from "../firebase";

const MOCK_DATA =
    "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.";
export default class Demo extends React.Component {
    mdParser = null;
    constructor(props) {
        super(props);
        this.state = {
            articleToSave: "",
            titleArticle: ""
        };
        this.mdParser = new MarkdownIt(/* Markdown-it options */);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    // handleChange(event) {
    //     // this.setState({ titleArticle: event.value });
    //     console.log(event);
    // }
    handleEditorChange({ html, text }) {
        this.setState({ articleToSave: text });
        // console.log("handleEditorChange", html, text);
        console.log('yepp', this.state.articleToSave);
    }
    saveArticle() {
        console.log("sdfsdf");
        var self = this;
        console.log("ze", self.state.articleToSave);
        const db = firebase.firestore();
        db.collection("articles")
            .doc(self.state.titleArticle)
            .set({
                urlArticle: self.state.articleToSave
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    }

    handleInput(event, key) {
        this.setState({
            [key]: event.target.value
        });
    }

    render() {
        return (
            <div className="editor-article">
                <label>
                    Titre de l'article :
                    <input
                        type="text"
                        onChange={event =>
                            this.handleInput(event, "titleArticle")
                        }
                        value={this.state.titleArticle}
                    />
                </label>
                <MdEditor
                    value={MOCK_DATA}
                    renderHTML={text => this.mdParser.render(text)}
                    onChange={this.handleEditorChange}
                />
                <button
                    onClick={e => this.saveArticle(e)}
                    disabled={!this.state.titleArticle}
                    className="save-art"
                >
                    Sauvegarder l'article
                </button>
            </div>
        );
    }
}
