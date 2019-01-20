import React, {Fragment} from 'react';
import * as PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        borderBottomStyle: 'solid',
        border: 2,
        borderColor: theme.palette.primary.main,
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        color: theme.palette.primary.dark,
    }
});

function Title(props) {
    const {classes, title} = props;
    return <Fragment>
        <div className={classes.root}>{title}</div>
    </Fragment>
}

Title.propType = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Title);