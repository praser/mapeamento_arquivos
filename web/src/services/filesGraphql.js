import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.REACT_APP_MAIN_API_URL,
  cache: new InMemoryCache(),
})

export const LIST_FILES_QUERY = gql`
  query ListFilesQuery($page: Int!, $pageSize: Int!) {
    files(page: $page, pageSize: $pageSize) {
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
`

export const COUNT_FILES_QUERY = gql`
  query {
    filesCount
  }
`

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
`

export default client
