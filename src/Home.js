import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from './queries';
import Animation from './Animation';
import './Home.css';

class Home extends Component {
    handleChange = e => {
        if (e.keyCode === 13) {
            const newStatus = {};
            Object.assign(newStatus, {
                search: e.target.value
            }, this.state);
            this.setState(newStatus)
        }
    };

    render() {
        return (
            <div>
                <input type='text' onKeyUp={this.handleChange} />
                <div className='Home'>
                    <Query
                        query={HOME_PAGE}
                        variables={this.state}>
                        {({loading, data, error}) => {
                            if (loading) return 'loading';
                            if (error) return 'something happened';
                            if (data) {
                                const page = data.Page;
                                const media = page.media;
                                return media.map(animation => <Animation
                                        key={animation.id}
                                        id={animation.id}
                                        title={animation.title.romaji}
                                        popularity={animation.popularity}
                                        coverImage={animation.coverImage.large}
                                    />
                                );
                            }
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

/*const Home = () => (
    <div className='Home'>
        <Query query={HOME_PAGE}>
            {({loading, data, error}) => {
                if (loading) return 'loading';
                if (error) return 'something happened';
                if (data) {
                    const page = data.Page;
                    const media = page.media;
                    return media.map(animation => <Animation
                            key={animation.id}
                            id={animation.id}
                            title={animation.title.romaji}
                            popularity={animation.popularity}
                            coverImage={animation.coverImage.large}
                        />
                    );
                }
            }}
        </Query>
    </div>
);*/

export default Home;