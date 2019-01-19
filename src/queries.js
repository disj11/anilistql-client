import gql from 'graphql-tag';

export const Genre = {
    DRAMA: 'Drama',
    ACTION: 'Action',
    ADVENTURE: 'Adventure',
    COMEDY: 'Comedy',
    SCI_FI: 'Sci-Fi', // 공상과학
    SUPERNATURAL: 'Supernatural',
    FANTASY: 'Fantasy',
    SPORTS: 'Sports',
    ROMANCE: 'Romance',
    HORROR: "Horror",
    MYSTERY: "Mystery",
    PSYCHOLOGICAL: "Psychological",
    THRILLER: "Thriller"
};
Object.freeze(Genre);

export const HOME_PAGE = gql`    
    query getAnimationList(
    $page: Int = 1,
    $perPage: Int = 20,
    $genre: String,
    $search: String,
    $isAdult: Boolean,
    ) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(search: $search, genre: $genre, isAdult: $isAdult, sort: UPDATED_AT_DESC) {
                id
                title {
                    romaji
                    native
                }
                source
                startDate {
                    year
                    month
                    day
                }
                genres
                bannerImage
                coverImage {
                    extraLarge
                    large
                    medium
                }
                popularity
                averageScore
                meanScore
                description
            }
        }
    }
`;

export const ANIMATION_DETAILS = gql`
    query getAnimationDetails($animationId: Int!) {
        Media(id: $animationId) {
            id
            title {
                romaji
                native
            }
            source
            startDate {
                year
                month
                day
            }
            genres
            bannerImage
            coverImage {
                extraLarge
                large
                medium
            }
            popularity
            averageScore
            meanScore
            description
        }
    }
`;