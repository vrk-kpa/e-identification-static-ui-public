import React from 'react';
import DiscoveryPage from './DiscoveryPage';
import ErrorBoundary from '../ErrorBoundary';
import PropTypes from 'prop-types';

class Main extends React.Component {

    render() {

        const {tag = ''} = this.context.queryParams;

        return (
            <ErrorBoundary tag={tag} errorCode='discoveryRender'>
                <DiscoveryPage tag={tag} {...this.props} />
            </ErrorBoundary>);
    }
}

Main.contextTypes = {
    queryParams: PropTypes.object.isRequired,
};


export default Main;
