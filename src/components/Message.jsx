/** @jsx React.DOM */

var React = require('react');
var theme = require('./util/theme');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      theme: 'light-gray'
    };
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var themeClass = theme(this.props.theme);
    var messageClass = 'bold flex flex-center mb2 rounded ' + themeClass;
    var style = {
      display: this.state.visible ? '' : 'none'
    };
    return (
      <div className={messageClass} style={style}>
        <div className="flex-auto p2">
          {this.props.children}
        </div>
        <a href="#!"
          onClick={this.dismiss}
          className="h3 button white"
          title="Dismiss">
            &times;
        </a>
      </div>
    )
  }

});

