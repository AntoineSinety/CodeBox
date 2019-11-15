import React, { Component } from 'react';

class MenuBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };

        this._toogleOpen = this._toogleOpen.bind(this);

    }
    _toogleOpen(){ 
        this.setState({ menuOpen: !this.state.menuOpen})
    }

  render() {
    return (
        <div className="wrapper-menu-burger">
            <h1 data-aos="slide-right">Menu Burger</h1>

            <div className="demo">

                <div className="wrapper-burger-menu">
                    <div className={"burger-toggle " + (this.state.menuOpen ? "open": null) } onClick={this._toogleOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>

            <div className="install-demo">
                <h3>HTML</h3>
                <pre>
                    {`<div class="wrapper-burger-menu">
    <div class="burger-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`}
                </pre>
            </div>
            <div className="install-demo">
                <h3>LESS</h3>
                <pre>
                    {`.wrapper-burger-menu{
    .burger-toggle {
        width: 40px;
        height: 30px;
        position: relative;
        display: inline-block;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;

        span {
            display: block;
            position: absolute;
            height: 6px;
            width: 100%;
            background: #494b52;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
            &:nth-child(1) {
                top: 0px;
            }
            &:nth-child(2),
            &:nth-child(3) {
                top: 12px;
            }
            &:nth-child(4) {
                top: 24px;
            }
        }// /span

        &.open{
            span:nth-child(1) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
            span:nth-child(2) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            span:nth-child(3) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
            span:nth-child(4) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
        }
    }
}`}
                </pre>
            </div>
            <div className="install-demo">
                <h3>jQuery</h3>
                <pre>
                    {`$('.burger-toggle').click(function(){
  $(this).toggleClass('open');
});`}
                </pre>
            </div>

            
            
        </div>
    )
  }
}
export default MenuBurger; // Don’t forget to use export default!