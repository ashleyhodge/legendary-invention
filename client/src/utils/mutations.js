import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $rpassword: String!, $isAdmin: Boolean) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, rpassword: $rpassword, isAdmin: $isAdmin) {
      token
      user {
        _id
        firstName
      }
    }
  }
`

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($title: String!, $postText: String!, $postImages: String) {
    addPost(title: $title, postText: $postText, postImages: $postImages) {
      _id
      createdAt
      postText
      postImages
      title
      username
      comments {
        _id
        commentText
        createdAt
        username
      }
      commentCount
    }
  }
`