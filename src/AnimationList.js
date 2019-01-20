import {ANIMATION_LIST} from "./queries";
import Animation from "./Animation";
import {Query} from "react-apollo";
import React from "react";
import * as PropTypes from "prop-types";
import {Sort} from "./constant/Sort";
import './AnimationList.css';

const AnimationList = (
    {
        sort,
        season,
        seasonYear,
        page,
        perPage,
        isAdult,
        search,
        genre,
    }
) => {
    return <div className='AnimationList'>
        <Query
            query={ANIMATION_LIST}
            variables={{
                page: page || 1,
                perPage: perPage || 5,
                sort: sort || Sort.START_DATE_DESC,
                season: season,
                seasonYear: seasonYear,
                isAdult: isAdult,
                search: search,
                genre: genre,
            }}>
            {({loading, data, error}) => {
                if (loading) return 'loading';
                if (error) return 'something happened';
                if (data) {
                    const page = data.Page;
                    const media = page.media;
                    return media.map(animation => {
                        return <Animation
                            key={animation.id}
                            id={animation.id}
                            title={animation.title.romaji}
                            subTitle={animation.title.native}
                            src={animation.coverImage.large}
                        />
                    });
                }
            }}
        </Query>
    </div>
};

AnimationList.propType = {
    sort: PropTypes.string,
};

export default AnimationList;