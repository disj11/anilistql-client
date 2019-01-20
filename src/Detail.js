import React, {Fragment} from 'react';
import {Query} from "react-apollo";
import {ANIMATION_DETAILS} from './queries';
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    header: {
        flex: 1,
        height: 400,
        paddingTop: 100,
        backgroundColor: theme.palette.primary.dark,
    },
    headerContent: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1440,
    },
    flexBox: {
        display: 'flex',
    },
    thumbnail: {},
    image: {
        width: 260,
        height: 360,
        boxShadow: '0 10px 20px rgba(0,0,0,.095), 0 6px 6px rgba(0,0,0,.115);'
    },
    info: {
        flex: 1,
        paddingLeft: 30,
        color: theme.palette.common.white,
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    subTitle: {
        marginTop: 10
    },
    below: {
        marginTop: 65,
        display: 'flex',
    },
    genre: {
        marginTop: 0,
        marginBottom: 0,
        display: 'inline-block',
    },
    separator: {
        marginLeft: 5,
        marginRight: 5,
    },
    left: {
        flex: 1,
    },
    button: {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        marginLeft: 10,
    },
    body: {
        paddingTop: 100,
        paddingRight: 100,
        paddingBottom: 100,
        paddingLeft: 100,
        backgroundColor: theme.palette.primary.light,
    },
    box: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
});

function Detail(props) {
    const {classes, match} = props;
    const animationId = match.params.animationId;
    const createMarkup = html => {
        return {__html: html};
    };

    return <Query query={ANIMATION_DETAILS} variables={{animationId}}>
        {({loading, data, error}) => {
            if (loading) return 'loading';
            if (error) return 'something happened';
            if (data) {
                const media = data.Media;
                const trailer = media.trailer;
                let trailerUrl = '';
                if (trailer) {
                    const trailerId = trailer.id;
                    const trailerSite = trailer.site;

                    if (trailerSite === 'youtube') {
                        trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`;
                    } else if (trailerSite === 'dailymotion') {
                        trailerUrl = `http://www.dailymotion.com/embed/video/${trailerId}`;
                    }
                }

                return <Fragment>
                    <div className={classes.header}>
                        <div className={classes.headerContent}>
                            <div className={classes.flexBox}>
                                <div className={classes.thumbnail}>
                                    <img className={classes.image} src={media.coverImage.large}
                                         alt={media.title.romaji}/>
                                </div>
                                <div className={classes.info}>
                                    <h1 className={classes.title}>{media.title.romaji}</h1>
                                    <h4 className={classes.subTitle}>{media.title.native}</h4>
                                    <div>{media.startDate.year}.{media.startDate.month}.{media.startDate.day} - {media.endDate.year}.{media.endDate.month}.{media.endDate.day}</div>
                                    <div className={classes.below}>
                                        <div className={classes.left}>
                                            <div style={{marginBottom: 10}}>
                                                {media.genres.map((genre, idx) => {
                                                    return <Fragment key={idx}>
                                                        {idx !== 0 ? <span className={classes.separator}>/</span> : ''}
                                                        <h4 className={classes.genre}>{genre}</h4></Fragment>
                                                })}
                                            </div>
                                            <div>Average {media.averageScore || 'None'}</div>
                                        </div>
                                        <div className={classes.right}>
                                            {trailerUrl ?
                                                <Button target='_blank' href={trailerUrl} variant="contained"
                                                        color="inherit" className={classes.button}>
                                                    Trailer
                                                </Button>
                                                : ''}
                                            <Button target='_blank' href={media.siteUrl} variant="contained"
                                                    color="inherit" className={classes.button}>
                                                More information
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.body}>
                        <Paper className={classes.box} elevation={1}>
                            <Typography style={{marginBottom: 10}} variant="h5" component="h3">
                                Story
                            </Typography>
                            <Typography component="p"dangerouslySetInnerHTML={createMarkup(media.description)} />
                        </Paper>
                    </div>
                </Fragment>
            }
        }}
    </Query>
}

export default withStyles(styles)(Detail);