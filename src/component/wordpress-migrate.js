import React, { Component } from 'react';

class WordpressMigrate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old: '',
            new: '',
            prefix: ''
        };
    
        this.oldChange = this.oldChange.bind(this);
        this.newChange = this.newChange.bind(this);
        this.prefixChange = this.prefixChange.bind(this);
      }
    
      oldChange(event) {
        this.setState({old: event.target.value});
      }
      newChange(event) {
        this.setState({new: event.target.value});
      }
      prefixChange(event) {
        this.setState({prefix: event.target.value});
      }
    
  render() {
    return (
      <div>
        <h1 data-aos="slide-right">SQL - Migration wordpress</h1>
        <div className="wp-migrate">
            <div className="wrapper-form-sql-wp">
                <div data-aos="zoom-in">
                    <label htmlFor="old">Old URL</label>
                    <input type="text" name="old" id="old" value={this.state.old} onChange={this.oldChange}/>
                </div>
                <div data-aos="zoom-in">
                    <label htmlFor="new">New URL</label>
                    <input type="text" name="new" id="new" value={this.state.new} onChange={this.newChange}/>
                </div>
                <div data-aos="zoom-in">
                    <label htmlFor="prefix">Prefix base (sans _)</label>
                    <input type="text" name="prefix" id="prefix" value={this.state.prefix} onChange={this.prefixChange}/>
                </div>
            </div>


            <div id="result" data-aos="zoom-in">
            <p>
            <span className="comment"># Changer l'URL du site</span><br/>
            UPDATE <span className="prefix">{this.state.prefix}</span>_options<br/>
            SET option_value = replace(option_value, '<span className="oldUrl">{this.state.old}</span>', '<span className="newUrl">{this.state.new}</span>')<br/>
            WHERE option_name = 'home'<br/>
            OR option_name = 'siteurl';
            </p>

            <p>
            <span className="comment"># Changer l'URL des GUID</span><br/>
            UPDATE <span className="prefix">{this.state.prefix}</span>_posts<br/>
            SET guid = REPLACE (guid, '<span className="oldUrl">{this.state.old}</span>', '<span className="newUrl">{this.state.new}</span>');
            </p>

            <p>
            <span className="comment"># Changer l'URL des médias dans les articles et pages</span><br/>
            UPDATE <span className="prefix">{this.state.prefix}</span>_posts<br/>
            SET post_content = REPLACE (post_content, '<span className="oldUrl">{this.state.old}</span>', '<span className="newUrl">{this.state.new}</span>');
            </p>

            <p>
            <span className="comment"># Changer l'URL des données meta</span><br/>
            UPDATE <span className="prefix">{this.state.prefix}</span>_postmeta<br/>
            SET meta_value = REPLACE (meta_value, '<span className="oldUrl">{this.state.old}</span>','<span className="newUrl">{this.state.new}</span>');
            </p>
            </div>
        </div>
      </div>
    )
  }
}
export default WordpressMigrate; // Don’t forget to use export default!