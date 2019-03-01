import React from 'react';
import TranslatedLink from './TranslatedLink.js';

/* This class just wraps normal TranslatedLink with a span that adds whitespace around the link
 * so that it can be placed to inline text and the hover effects won't affect this padding.
 */
class TranslatedPaddedLink extends React.Component {
  render() {
      return (
        <span className="padded"><TranslatedLink {...this.props} /></span>
      );
  }
}

export default TranslatedPaddedLink;
