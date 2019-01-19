import React, {Component, Fragment} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import ApolloProvider from "react-apollo/ApolloProvider";
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <Fragment>
                        <Route exact={true} path={'/'} component={Home}/>
                        <Route path={'/details/:animationId'} component={Detail}/>
                    </Fragment>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
