import React, {Fragment} from 'react';
import {Sort} from './constant/Sort';
import * as PropTypes from "prop-types";
import AnimationList from "./AnimationList";
import Title from "./Title";

const Search = ({location, match}) => {
    const search = match.params.search;

    const querystring = location.search.replace('?', '');
    const paramArr = querystring.split('&');
    const paramMap = new Map();
    for (const param of paramArr) {
        const keyValue = param.split('=');
        paramMap.set(keyValue[0], keyValue[1]);
    }

    let sort = Sort.START_DATE_DESC;
    if (paramMap.get('sort')) {
        for (const sortKey of Object.keys(Sort)) {
            if (sortKey === paramMap.get('sort')) {
                sort = Sort[sortKey];
                break;
            }
        }
    }

    let isAdult = paramMap.get('isAdult') === 'true';
    return <Fragment>
        <Title title={'Search : ' + search} />
        <AnimationList
            search={search}
            isAdult={isAdult}
            sort={sort}
            page='1'
            perPage='20'
        />
    </Fragment>
};

Search.propType = {
    search: PropTypes.string,
    isAdult: PropTypes.bool,
    sort: PropTypes.string,
};

export default Search;