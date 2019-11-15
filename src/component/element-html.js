import React, { Component } from 'react';

class HtmlItem extends Component {
    
  render() {
    return (
        <div className="html-list">
            <h1 data-aos="slide-right">HTML - Les tags utiles & à styler</h1>

            <div className="install-demo">
            <div className="container container-small">
                <h3>Typography</h3>
                <p>Mustard uses
                    <code>Open Sans</code> as it's default font with a base font size of
                    <code>16px</code>. All other sizes are based on this initial value.</p>

                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p>
                    <strong>Code Example:</strong>
                </p>
                <pre>
                  <code className="block-code">{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</code>
                </pre>
            </div>
            <h1>HTML Ipsum Presents</h1>

                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#top">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                <h2>Header Level 2</h2>

                <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>

                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                <h3>Header Level 3</h3>

                <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                </ul>

                <h1>Titre 1</h1>
                <h2>Titre 2</h2>
                <h3>Titre 3</h3>
                <h4>Titre 4</h4>
                <h5>Titre 5</h5>
            </div>
            
        </div>
    )
  }
}
export default HtmlItem; // Don’t forget to use export default!