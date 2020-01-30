import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/logo-code.svg";

import AosAnim from "./aos-animation.js";
import WordpressMigrate from "./wordpress-migrate.js";
import MenuBurger from "./menu-burger";
import BlankWpTheme from "./blank-wp-theme";
import Demo from "./editor-md";
import ContentArticle from "./content-article";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { washApple, eatApple, rotApple, getListArticle } from "../redux/actions";

AOS.init();

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: "sqlWp",
            loading: false,
            artSelect: ""
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    componentDidMount() {
        try {
            this.props.getListArticle(); 
        }catch (e){
            console.log('Fonction getListArticle pb', e);
        }
        this.props.rotApple();
        var defaultPage = localStorage.getItem("defaultPage");
        if (defaultPage !== null && defaultPage !== "editormd" && defaultPage !== "aos" && defaultPage !== "sqlWp" && defaultPage !== "menuburger" && defaultPage !== "blanktheme") {
            this.setState({ showComponent: defaultPage });
        }

        this.setState({ loading: true });

        var self = this;


        var selectedArt = self.props.articleLst.find(x => x.id === defaultPage);
        self.setState({
            artSelect: selectedArt
        });
    }

    _onButtonClick(param) {
        this.setState({
            showComponent: param
        });

        var selectedArt = this.props.articleLst.find(x => x.id === param);
        this.setState({
            artSelect: selectedArt
        });
        if (param == null || param == "editormd" || param == "aos" || param == "sqlWp" || param == "menuburger" || param == "blanktheme") {
        localStorage.setItem("defaultPage", param);
        }
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
                        {this.props.articleLst.map(function(oneArticle, index) {
                            return (
                                <li
                                    key={index}
                                    className={
                                        this.state.showComponent ===
                                        oneArticle.id
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
                    {this.state.showComponent === "editormd" ? <Demo /> : null}

                    {this.state.showComponent !== "editormd" &&
                    this.state.showComponent !== "aos" &&
                    this.state.showComponent !== "sqlWp" &&
                    this.state.showComponent !== "menuburger" &&
                    this.state.showComponent !== "blanktheme" ? (
                        <ContentArticle
                            selectedArticle={this.state.artSelect}
                        />
                    ) : null}

                    {this.state.showComponent === "aos" ? <AosAnim /> : null}
                    {this.state.showComponent === "sqlWp" ? (
                        <WordpressMigrate />
                    ) : null}
                    {this.state.showComponent === "menuburger" ? (
                        <MenuBurger />
                    ) : null}
                    {this.state.showComponent === "blanktheme" ? (
                        <BlankWpTheme />
                    ) : null}
                    <div>{this.props.color}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dirty: state.dirty,
    remainingBites: state.remainingBites,
    color: state.color,
    articleLst: state.articleLst

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            washApple,
            eatApple,
            rotApple,
            getListArticle
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); // Connects `Dashboard` to the Redux store
