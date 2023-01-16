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
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
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
  mutation AddPost($title: String!, $mainText: String!, $intro: String!, $subheading1: String!, $subheading2: String, $conclusion: String, $postImage1: String, $postImage2: String) {
    addPost(title: $title, mainText: $mainText, intro: $intro, subheading1: $subheading1, subheading2: $subheading2, conclusion: $conclusion, postImage1: $postImage1, postImage2: $postImage2) {
      _id
      conclusion
      createdAt
      intro
      mainText
      postImage1
      postImage2
      subheading1
      subheading2
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