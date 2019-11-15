import React, { Component } from 'react';

class AosAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
        demo: ''
    };
    this.demoTest = this.demoTest.bind(this);

  }

  demoTest(event) {
    this.setState({demo: event.target.value});
  }
  render() {
    return (
        <div>
            <h1 data-aos="slide-right">AOS - Animation on scrool</h1>
            <div className="install-demo">
              <p>Add styles in <code>{`<head>`}</code></p>
              <code>{`<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />`}</code>
              <p>Add script right before closing <code>{`</body>`}</code> tag, and initialize AOS:</p>
              <code>{`<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
              <script>
              AOS.init();
              </script>`}</code>
              <p><a href="https://github.com/michalsnik/aos" target="_blank" rel="noopener noreferrer">https://github.com/michalsnik/aos</a></p>
              <p><a href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener noreferrer">https://michalsnik.github.io/aos/</a></p>
            </div>

            <div className="wrapper-aos">

                <h2>Fade</h2>
                <div className="item" data-aos="fade-up">1 - Fade up</div>
                <div className="item" data-aos="fade-down">2 - Fade down</div>
                <div className="item" data-aos="fade-right">3 - Fade right</div>
                <div className="item" data-aos="fade-left">4 - Fade left</div>
                <hr/>

                <h2>Fade up/ down</h2>
                <div className="item" data-aos="fade-up-right">1 - Fade up right</div>
                <div className="item" data-aos="fade-up-left">2 - Fade up left</div>
                <div className="item" data-aos="fade-down-right">3 - Fade down right</div>
                <div className="item" data-aos="fade-down-left">4 - Fade down left</div>
                <hr/>
            
                <h2>Zoom in</h2>
                <div className="item" data-aos="zoom-in">1 - Zoom in</div>
                <div className="item" data-aos="zoom-in-up">2 - Zoom in-up</div>
                <div className="item" data-aos="zoom-in-down">3 - Zoom in-down</div>
                <div className="item" data-aos="zoom-in-left">4 - Zoom in-left</div>
                <div className="item" data-aos="zoom-in-right">5 - Zoom in-right</div>
                <hr/>

                <h2>Zoom out</h2>
                <div className="item" data-aos="zoom-out">1 - Zoom out</div>
                <div className="item" data-aos="zoom-out-up">2 - Zoom out-up</div>
                <div className="item" data-aos="zoom-out-down">3 - Zoom out-down</div>
                <div className="item" data-aos="zoom-out-left">4 - Zoom out-left</div>
                <div className="item" data-aos="zoom-out-right">5 - Zoom out-right</div>
                <hr/>
            
                <h2>Slide</h2>
                <div className="item" data-aos="slide-up">1 - Slide up</div>
                <div className="item" data-aos="slide-down">2 - Slide down</div>
                <div className="item" data-aos="slide-left">3 - Slide left</div>
                <div className="item" data-aos="slide-right">4 - Slide right</div>
                <hr/>
            
                <h2>Flip</h2>
                <div className="item" data-aos="flip-up">1 - Flip up</div>
                <div className="item" data-aos="flip-down">2 - Flip down</div>
                <div className="item" data-aos="flip-right">3 - Flip right</div>
                <div className="item" data-aos="flip-left">4 - Flip left</div>
                <hr/>


                <h2>Demo en direct</h2>
                <div>
                  <label htmlFor="demo">Démo en direct</label>
                  <input type="text" id="demo" onChange={this.demoTest} />
                </div>
                <div className="item" data-aos={this.state.demo !== '' ? this.state.demo : 'fade-right'  }>1 - {this.state.demo !== '' ? this.state.demo : 'fade-right'  }</div>

            </div>
        </div>
    )
  }
}
export default AosAnim; // Don’t forget to use export default!