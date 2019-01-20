import React, {Component} from 'react';
import {Sort} from './constant/Sort';
import AnimationList from "./AnimationList";
import Title from "./Title";
import {MediaSeason} from "./constant/MediaSeason";

class Home extends Component {
    state = {
        search: null,
        isAdult: false,
        sort: Sort.START_DATE_DESC,
    };

    _getYear() {
        const date = new Date();
        return date.getFullYear();
    }

    _getSeason() {
        const date = new Date();
        const month = date.getMonth() + 1;
        let season;
        if (month >= 3 && month <= 5) {
            season = MediaSeason.SPRING;
        } else if (month >= 6 && month <= 8) {
            season = MediaSeason.SUMMER;
        } else if (month >= 9 && month <= 11) {
            season = MediaSeason.FALL;
        } else {
            season = MediaSeason.WINTER;
        }

        return season;
    }

    render() {
        return (
            <div>
                <Title title='Trend'/>
                <AnimationList sort={Sort.TRENDING_DESC} />
                <Title title='Season'/>
                <AnimationList
                    sort={Sort.START_DATE}
                    seasonYear={this._getYear()}
                    season={this._getSeason()}
                />
                <Title title='Most Popular'/>
                <AnimationList
                    sort={Sort.POPULARITY_DESC}
                />
            </div>
        );
    }
}

export default Home;