import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class ReactBase extends React.Component {

    /*
     * @constructs Component
     * @param {Object} props
     */
    constructor(props, context) {
        super(props, context);
    }

    /*
     * Apply PureRenderMixin
     *
     * in React 0.13 there is no way to attach mixins to ES6 classes
     * this is a workaround to solve this
     * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
     *
     * @method shouldComponentUpdate
     * @returns {Boolean}
     */
    shouldComponentUpdate() {
        return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
}
