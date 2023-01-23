import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
query posts {
  posts {
    _id
    username
    title
    postText
    postImages
    createdAt
    comments {
      _id
      commentText
      createdAt
      username
    }
    commentCount
  }
}
`;

export const QUERY_POST = gql`
query post($id: ID!) {
  post(_id: $id) {
    _id
    commentCount
    comments {
      _id
      commentText
      createdAt
      username
    }
    createdAt
    postText
    postImages
    title
    username
  }
}
`

// create 'me' query
// create 'basic me' query for non logged in users