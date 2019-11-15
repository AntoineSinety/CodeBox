import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '../assets/logo-code.svg';


import AosAnim from './aos-animation.js';
import WordpressMigrate from './wordpress-migrate.js';
import HtmlItem from './element-html';
import MenuBurger from './menu-burger';
import BlankWpTheme from './blank-wp-theme';


AOS.init();

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: 'sqlWp',
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }

      componentDidMount(){
          var defaultPage = localStorage.getItem('defaultPage');
          if(defaultPage !== null){
              this.setState({showComponent: defaultPage});
          }
      }
    
      _onButtonClick(param) {
        this.setState({
          showComponent: param,
        });
        localStorage.setItem('defaultPage', param);
      }
  render() {
    return (
        <div className="dashboard">
            <div className="menu-header">
                <div className="logo-wrapper">
                    <img className="logo" src={logo} alt="Logo CodeBox"/>
                    <span>CodeBox</span>
                </div>
                <ul>
                    <li className={this.state.showComponent === 'aos' ? 'active' : undefined}>
                        <span onClick={() => this._onButtonClick('aos')}>AOS - Animation on scrool</span>
                    </li>
                    <li className={this.state.showComponent === 'sqlWp' ? 'active' : undefined}>
                        <span onClick={() => this._onButtonClick('sqlWp')}>SQL - Migration wordpress</span>
                    </li>
                    <li className={this.state.showComponent === 'htmlitem' ? 'active' : undefined}>
                        <span onClick={() => this._onButtonClick('htmlitem')}>HTML - Les tags utiles & à styler</span>
                    </li>
                    <li className={this.state.showComponent === 'menuburger' ? 'active' : undefined}>
                        <span onClick={() => this._onButtonClick('menuburger')}>Menu Burger</span>
                    </li>
                    <li className={this.state.showComponent === 'blanktheme' ? 'active' : undefined}>
                        <span onClick={() => this._onButtonClick('blanktheme')}>Wordpress Blank Thème</span>
                    </li>
                </ul>
            </div>
            <div className="content-element">
                {this.state.showComponent === 'aos' ? 
                <AosAnim /> :
                null
                }
                {this.state.showComponent === 'sqlWp' ? 
                <WordpressMigrate /> :
                null
                }
                {this.state.showComponent === 'htmlitem' ? 
                <HtmlItem /> :
                null
                }
                {this.state.showComponent === 'menuburger' ? 
                <MenuBurger /> :
                null
                }
                {this.state.showComponent === 'blanktheme' ? 
                <BlankWpTheme /> :
                null
                }
            </div>
        </div>
    )
  }
}
export default Dashboard; // Don’t forget to use export default!