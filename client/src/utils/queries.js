import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
query posts {
  posts {
    _id
    username
    title
    subheading2
    subheading1
    postImage2
    postImage1
    mainText
    intro
    createdAt
    conclusion
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
  }
}
`

// create 'me' query
// create 'basic me' query for non logged in users