import React from 'react';

export class TestComponent extends React.Component {

    render() {

        if (this.props.throw) {
            console.log("throw error!")
            throw new Error(this.props.throw);
        }

        return <span id="test-component-body">body</span>;
    }
}

export default TestComponent;
