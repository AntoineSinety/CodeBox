import React, { Component } from 'react';

class BlankWpTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };


    }


  render() {
    return (
        <div className="wrapper-menu-burger">
            <h1 data-aos="slide-right">Wordpress Blank Thème</h1>

            <div className="demo">

                

            </div>

            <div className="install-demo">

                Thème blank basic  <a href="../assets/wp_blank_theme.zip" download>Télécharger le thème</a>

                <pre>
                    <p>wp_blank_theme/<br/>
                    ├── assets/<br/>
                    |   └── css/<br/>
                    |       ├── style.css<br/>
                    |       └── style.less<br/>
                    ├── images/<br/>
                    ├── js/<br/>
                    |   └── custom.js<br/>
                    ├── footer.php<br/>
                    ├── function.php<br/>
                    ├── header.php<br/>
                    ├── index.php<br/>
                    └── style.css</p>
                </pre>
              
            </div>

            
            
        </div>
    )
  }
}
export default BlankWpTheme; // Don’t forget to use export default!