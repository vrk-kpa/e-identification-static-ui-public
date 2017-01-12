import React from 'react';

/* Returns a tag (id) and the transĺated text for that tag (id) */
var ThirdPartySP = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        id: React.PropTypes.string.isRequired,
        metadataDisplayName: React.PropTypes.string,
        tag: React.PropTypes.string.isRequired
    },
    render: function() {
      return (
         <this.props.tag id={this.props.id} className={this.props.className}>{this.props.metadataDisplayName}</this.props.tag>
      );
    }
});

export default ThirdPartySP;
