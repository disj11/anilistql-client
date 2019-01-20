import React from 'react';
import * as PropTypes from "prop-types";

const styles = {
    banner: {
        flex:1,
        height: 400,
    },
};

const Banner = ({src, alt}) => {
    return <div style={styles.banner}>
        <img style={{ width: '100%', height: '100%' }} src={src} alt={alt} />
    </div>
};

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Banner;