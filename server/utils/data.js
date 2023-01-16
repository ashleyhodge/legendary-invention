// data used to test api routes
const data = {
  users: [
    {
      username: 'John',
			firstName: 'John',
			lastName: 'Smith',
      email: 'admin@example.com',
      password: '123456',
      isAdmin: true,
			post: []
    },
    {
      username: 'Jane',
			firstName: 'Jane',
			lastName: 'Doe',
      email: 'user@example.com',
      password: '123456',
      isAdmin: false,
			post: []
    },
  ],
	posts: [
{
	title: 'Title',
	intro: ' Intro',
	subheading1: 'Subheading1',
	mainText: 'Main text',
	subheading2: 'Subheading2',
	conclusion: 'Conclusion',
	postImage1: 'post_bg_2.png',
	postImage2: 'post_bg_2.png',
	username: 'John',
	comments: []
},
	]
};

module.exports = data;