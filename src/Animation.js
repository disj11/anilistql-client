import React from "react";
import {Link} from "react-router-dom";
import {Card, CardHeader, CardMedia} from "@material-ui/core";
import LinesEllipsis from "react-lines-ellipsis";
import * as PropTypes from "prop-types";

const styles = {
    card: {
        width: 260,
        marginBottom: 40
    },
    cardImage: {
        width: 260,
        height: 320,
    },
    link: {
        textDecoration: 'none',
    },
};

const Animation = ({id, title, subTitle, popularity, src}) => {
    const titleEllipsis = <LinesEllipsis
        text={title || ''}
        maxLine='1'
        ellipsis='...'
        trimRight
        basedOn='letters'
    />;

    const subTitleEllipsis = <LinesEllipsis
        text={subTitle || ''}
        maxLine='1'
        ellipsis='...'
        trimRight
        basedOn='letters'
    />;

    return (
        <Card style={styles.card}>
            <Link to={`/details/${id}/`} style={styles.link}>
                <CardMedia style={styles.cardImage}
                           image={src}
                           title={title}/>
            </Link>
            <CardHeader
                title={titleEllipsis}
                subheader={subTitleEllipsis}
            />
        </Card>
    )
};

Animation.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    src: PropTypes.string.isRequired
};

export default Animation;