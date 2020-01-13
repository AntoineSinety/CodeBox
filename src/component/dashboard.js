import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/logo-code.svg";

import AosAnim from "./aos-animation.js";
import WordpressMigrate from "./wordpress-migrate.js";
import HtmlItem from "./element-html";
import MenuBurger from "./menu-burger";
import BlankWpTheme from "./blank-wp-theme";
import Ressources from "./ressources";
import Demo from "./editor-md";
import firebase from "../firebase";
import ContentArticle from "./content-article";

AOS.init();

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: "sqlWp",
            loading: false,
            articleLst: [],
            artSelect: ''
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    componentDidMount() {
        var defaultPage = localStorage.getItem("defaultPage");
        if (defaultPage !== null) {
            this.setState({ showComponent: defaultPage });
        }

        this.setState({ loading: true });

        let articlesStocked = [];
        var self = this;

        
        // Get all Markdown
        const db = firebase.firestore();
        db.collection("articles")
            .get()
            .then(function(querySnapshot){
                // const data = querySnapshot.docs.map(doc => doc.id);
                // console.log(data);
                // this.setState({ articleLst: data });

                querySnapshot.forEach(function(doc) {
                    articlesStocked.push({
                        id: doc.id,
                        content: doc.data().urlArticle
                    });
                    // console.log(articlesStocked);

                    // this.setState({ articleLst: articlesStocked });
                    self.setState({articleLst: articlesStocked});
                });                
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    }

    _onButtonClick(param) {
        this.setState({
            showComponent: param
        });

        var selectedArt = this.state.articleLst.find(x => x.id === param);
        console.log(selectedArt);
        this.setState({
            artSelect: selectedArt
        });
        console.log(this.state.artSelect);

        localStorage.setItem("defaultPage", param);
    }
    render() {
        return (
            <div className="dashboard">
                <div className="menu-header">
                    <div className="logo-wrapper">
                        <img className="logo" src={logo} alt="Logo CodeBox" />
                        <span>CodeBox</span>
                    </div>
                    <ul>
                        {this.state.articleLst.map(function(oneArticle, index) {
                            return (
                                <li
                                    key={index}
                                    className={
                                        this.state.showComponent === oneArticle.id
                                            ? "active"
                                            : undefined
                                    }
                                >
                                    <span
                                        onClick={() =>
                                            this._onButtonClick(oneArticle.id)
                                        }
                                    >
                                        {oneArticle.id}
                                    </span>
                                </li>
                            );
                        }, this)}
                        <li
                            className={
                                this.state.showComponent === "aos"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span onClick={() => this._onButtonClick("aos")}>
                                AOS - Animation on scrool
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "sqlWp"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span onClick={() => this._onButtonClick("sqlWp")}>
                                SQL - Migration wordpress
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "htmlitem"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span
                                onClick={() => this._onButtonClick("htmlitem")}
                            >
                                HTML - Les tags utiles & à styler
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "menuburger"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span
                                onClick={() =>
                                    this._onButtonClick("menuburger")
                                }
                            >
                                Menu Burger
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "blanktheme"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span
                                onClick={() =>
                                    this._onButtonClick("blanktheme")
                                }
                            >
                                Wordpress Blank Thème
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "ressources"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span
                                onClick={() =>
                                    this._onButtonClick("ressources")
                                }
                            >
                                Ressources Intégration
                            </span>
                        </li>
                        <li
                            className={
                                this.state.showComponent === "editormd"
                                    ? "active"
                                    : undefined
                            }
                        >
                            <span
                                onClick={() => this._onButtonClick("editormd")}
                            >
                                Editeur Markdown
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="content-element">
                    {this.state.showComponent  === "editormd"  ? <Demo /> : null}
                   
                    {(this.state.showComponent !== "editormd" && 
                      this.state.showComponent !== "aos" && 
                      this.state.showComponent !== "sqlWp" && 
                      this.state.showComponent !== "htmlitem" && 
                      this.state.showComponent !== "menuburger" && 
                      this.state.showComponent !== "blanktheme" && 
                      this.state.showComponent !== "ressources")
                    ? <ContentArticle selectedArticle={this.state.artSelect.content} /> : null}
             
                    {this.state.showComponent === "aos" ? <AosAnim /> : null}
                    {this.state.showComponent === "sqlWp" ? (
                        <WordpressMigrate />
                    ) : null}
                    {this.state.showComponent === "htmlitem" ? (
                        <HtmlItem />
                    ) : null}
                    {this.state.showComponent === "menuburger" ? (
                        <MenuBurger />
                    ) : null}
                    {this.state.showComponent === "blanktheme" ? (
                        <BlankWpTheme />
                    ) : null}
                    {this.state.showComponent === "ressources" ? (
                        <Ressources />
                    ) : null}
                </div>
            </div>
        );
    }
}
export default Dashboard; // Don’t forget to use export default!
