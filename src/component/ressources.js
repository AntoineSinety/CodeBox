import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "../markdown/codeblock";

import demoMarkdown from "../markdown/ressources.md";

class Ressources extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // Get file Markdown content
        fetch(demoMarkdown)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ agreementContent: text });
            })
            .catch(err => {
            });
    }

    render() {
        return (
            <div>
                <h1 data-aos="slide-right">Intégration web</h1>
                <div className="install-demo markdown-css">
                    <ReactMarkdown source={this.state.agreementContent} renderers={{ code: CodeBlock }} />

                </div>

                <div className="wrapper-aos"></div>
            </div>
        );
    }
}
export default Ressources; // Don’t forget to use export default!
