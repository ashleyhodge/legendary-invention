import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postTitle
      postText
      createdAt
      username
      commentCount
      postImage
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postTitle
      postText
      createdAt
      username
      commentCount
      postImage
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`

// create 'me' query
// create 'basic me' query for non logged in users