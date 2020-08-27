import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache(),
})

const LIST_FILES_QUERY = gql`
  query	{
    files {
      id
      fullName
      directoryName
      name
      length
      creationTime
      lastAccessTime
      lastWriteTime
      Directory {
        path
      }
    }
  }
`;

export default client;
export { LIST_FILES_QUERY }