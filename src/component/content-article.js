import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdown/codeblock";


import firebase from "../firebase";

class ContentArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            contentArticle: ""
        };
    }

    

    componentDidMount() {
    }

    render() {
        return <div className="content-article">
            {/* {this.props.selectedArticle} */}
            <h1 data-aos="slide-right">{this.props.selectedArticle.id}</h1>
            <div className="install-demo markdown-css">
            <ReactMarkdown source={this.props.selectedArticle.content} renderers={{ code: CodeBlock }} />
            </div>
        </div>;
    }
}
export default ContentArticle; // Don’t forget to use export default!
