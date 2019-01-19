import React from 'react';
import {Query} from "react-apollo";
import {ANIMATION_DETAILS} from './queries';
import Animation from './Animation';

const Detail = ({match: {
    params: {animationId}
}}) => {
    return <Query query={ANIMATION_DETAILS} variables={{animationId}}>
        {({loading, data, error}) => {
            if (loading) return 'loading';
            if (error) return 'something happened';
            if (data) {
                const media = data.Media;
                return <Animation
                    key={media.id}
                    id={media.id}
                    title={media.title.romaji}
                    popularity={media.popularity}
                    coverImage={media.coverImage.large}
                />
            }
        }}
    </Query>
};

export default Detail;