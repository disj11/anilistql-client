import gql from 'graphql-tag';

export const ANIMATION_LIST = gql`
    query getAnimationList(
    $page: Int = 1,
    $perPage: Int = 20,
    $genre: String,
    $search: String,
    $isAdult: Boolean = false,
    $sort: [MediaSort] = START_DATE_DESC,
    $season: MediaSeason,
    $seasonYear: Int,
    ) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(search: $search, genre: $genre, isAdult: $isAdult, sort: $sort, season: $season, seasonYear: $seasonYear) {
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

export const ANIMATION_LIST_SEASON = gql`
    query getAnimationList(
    $page: Int = 1,
    $perPage: Int = 20,
    $season: [MediaSeason!]
    $seasonYear: Int!
    $isAdult: Boolean = false,
    $sort: [MediaSort] = POPULARITY_DESC,
    ) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(search: $search, genre: $genre, isAdult: $isAdult, sort: $sort, season: $season, seasonYear: $seasonYear) {
                id
                title {
                    romaji
                    native
                }
                bannerImage
                coverImage {
                    large
                }
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
            endDate {
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
            description(asHtml: false)
            relations {
                nodes {
                    title {
                        romaji
                        native
                    }
                    coverImage {
                        large
                    }
                    description(asHtml: false)
                }
            }
            trailer {
                id
                site
            }
            siteUrl
        }
    }
`;