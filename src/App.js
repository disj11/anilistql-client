import React, {Component, Fragment} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import ApolloProvider from "react-apollo/ApolloProvider";
import client from './apolloClient';
import Home from './Home';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Detail from './Detail';
import Search from "./Search";
import blueGrey from '@material-ui/core/colors/blueGrey';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[500],
            light: blueGrey[200],
            dark: blueGrey[800],
        },
        secondary: {
            main: '#f44336',
        },
        typography: {
            useNextVariants: true,
        },
    },
});

class App extends Component {
    _searchEvent = (search) => {
        document.location.hash = `search/${search}`;
    };

    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <MuiThemeProvider theme={theme}>
                    <ApolloProvider client={client}>
                        <Router>
                            <Fragment>
                                <SearchAppBar searchCallback={this._searchEvent}/>
                                <Route exact={true} path={'/'} component={Home}/>
                                <Route path={'/details/:animationId'} component={Detail}/>
                                <Route path={'/search/:search?'}  component={Search}/>
                            </Fragment>
                        </Router>
                    </ApolloProvider>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default App;
