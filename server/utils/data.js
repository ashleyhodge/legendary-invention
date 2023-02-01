// data used to test api routes
const data = {
  users: [
    {
      username: 'John',
			firstName: 'John',
			lastName: 'Smith',
      email: 'admin@example.com',
      password: '123456',
			rpassword: '123456',
      isAdmin: true,
			post: []
    },
    {
      username: 'Jane',
			firstName: 'Jane',
			lastName: 'Doe',
      email: 'user@example.com',
      password: '123456',
			rpassword: '123456',
      isAdmin: false,
			post: []
    },
  ],
	posts: [
{
	title: 'Title',
	postText: '**Intro**',
	postImages: [
		'post_bg_2.png'
	],
	username: 'John',
	comments: []
},
	]
};

module.exports = data;