import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

/* Returns a tag (id) and the transĺated text for that tag (id) */
class Translated extends React.Component {
    render() {
      // Pass along props that might have been given (e.g. className or htmlFor)
      function clone(obj, excluded) {
          if (obj === null || typeof obj !== 'object') return obj;
          var copy = obj.constructor();
          for (var attr in obj) {
              if (excluded.indexOf(attr) === -1 && obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
          }
          return copy;
      }
      let propsCopy = clone(this.props, ['tag', 'children']);

      return (
         <this.props.tag {...propsCopy} data-i18n={this.props.id}>{i18n.t(this.props.id)}</this.props.tag>
      );
    }
}

Translated.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};

export default Translated;
