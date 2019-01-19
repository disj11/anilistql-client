import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://graphql.anilist.co'
});

/*let query = gql`query enumValuesOfMetaInformationTags($enumName: String!) {
    __type(name: $enumName) {
        name
        enumValues {
            name
        }
    }
}`;

let result;
client.query({query, variables: {enumName: "MediaSort"}})
    .then((results) => {
        result = results.data.__type.enumValues.map(o => o.name);
        console.log('My enum values', result)
    })
    .catch(e =>
        console.log('error', e)
    );*/

export default client;