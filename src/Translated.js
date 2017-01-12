import React from 'react';
import i18n from 'i18next';

/* Returns a tag (id) and the transĺated text for that tag (id) */
var Translated = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        id: React.PropTypes.string.isRequired,
        tag: React.PropTypes.string.isRequired
    },
    render: function() {
      return (
         <this.props.tag className={this.props.className} data-i18n={this.props.id}>{i18n.t(this.props.id)}</this.props.tag>
      );
    }
});

export default Translated;
