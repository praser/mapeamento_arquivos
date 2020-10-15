import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache(),
})

export const LIST_FILES_QUERY = gql`
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

export const CREATE_FILE = gql`
  mutation createUserFile($userId: String!, $fileId: ID!) {
    createUserFile(userId: $userId, fileId: $fileId) {
      id
      userId
      fileId
      createdAt
      updatedAt
      Files {
        id
        directoryName
        checksumId
      }
    }
  }
`;

export default client;