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
`;
export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    email
    firstName
    lastName
    isAdmin
    username
    posts {
      _id
      commentCount
      createdAt
      postText
      title
      username
      comments {
        _id
        commentText
        createdAt
        username
      }
      postImages
    }
  }
}
`;
export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    firstName
    lastName
    isAdmin
    username
    posts {
      _id
      commentCount
      createdAt
      postText
      title
      username
      postImages
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
}
`;