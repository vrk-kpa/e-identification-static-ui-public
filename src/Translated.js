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
      // Pass along props that might have been given (e.g. className or htmlFor)
      function clone(obj, excluded) {
          if (obj === null || typeof obj !== 'object') return obj;
          var copy = obj.constructor();
          for (var attr in obj) {
              if (excluded.indexOf(attr) === -1 && obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
          }
          return copy;
      }
      let propsCopy = clone(this.props, ['id', 'tag', 'children']);

      return (
         <this.props.tag {...propsCopy} data-i18n={this.props.id}>{i18n.t(this.props.id)}</this.props.tag>
      );
    }
});

export default Translated;
