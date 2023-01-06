// data used to test api routes
const data = {
  users: [
    {
      username: 'John',
      email: 'admin@example.com',
      password: '123456',
      isAdmin: true,
			post: []
    },
    {
      username: 'Jane',
      email: 'user@example.com',
      password: '123456',
      isAdmin: false,
			post: []
    },
  ],
	posts: [
		{
			postTitle: "Knitting: What you need to know as a beginnner",
			postText : "Consequat incididunt enim ut consequat adipisicing exercitation amet duis incididunt. Aliquip commodo cillum eiusmod qui. Aliquip nostrud ad aliqua do. Nulla ex commodo qui sunt eiusmod quis. Elit irure mollit ut Lorem id magna enim excepteur fugiat. Adipisicing nisi occaecat enim duis irure amet aliqua laborum non occaecat magna culpa. Sunt tempor enim magna cupidatat Lorem.", 
			username : "John", 
			postImage: "post_bg_2.png",
			comments : [ 
					{
							commentText : "non exercitationem consequatur temporibus quia dicta id earum molestias voluptatibus et ut quia officiis dignissimos ex maxime sit voluptatem", 
							username : "Jane"
					} 
			] 
	},
	{
			postTitle: "Mollit ullamco.",
			postText : "Ea quis nisi eu anim esse qui duis ipsum aliqua anim officia fugiat excepteur. Aliqua et dolor aute nulla. Veniam cillum pariatur ipsum pariatur commodo pariatur Lorem magna. Minim ullamco id nulla cillum excepteur dolore consectetur cupidatat pariatur excepteur sit.", 
			username : "Jane", 
			postImage: "post_bg.png",
			comments : [ ] 
	},
	{
		postTitle: "Mollit ullamco.",
		postText : "Consequat incididunt enim ut consequat adipisicing exercitation amet duis incididunt. Aliquip commodo cillum eiusmod qui. Aliquip nostrud ad aliqua do. Nulla ex commodo qui sunt eiusmod quis. Elit irure mollit ut Lorem id magna enim excepteur fugiat. Adipisicing nisi occaecat enim duis irure amet aliqua laborum non occaecat magna culpa. Sunt tempor enim magna cupidatat Lorem.", 
		username : "John", 
		postImage: "post_bg_3.png",
		comments : [ 
				{
						commentText : "non exercitationem consequatur temporibus quia dicta id earum molestias voluptatibus et ut quia officiis dignissimos ex maxime sit voluptatem", 
						username : "Jane"
				} 
		] 
},
{
		postTitle: "Mollit ullamco.",
		postText : "Ea quis nisi eu anim esse qui duis ipsum aliqua anim officia fugiat excepteur. Aliqua et dolor aute nulla. Veniam cillum pariatur ipsum pariatur commodo pariatur Lorem magna. Minim ullamco id nulla cillum excepteur dolore consectetur cupidatat pariatur excepteur sit.", 
		username : "Jane", 
		postImage: "post_bg.png",
		comments : [ ] 
},
{
	postTitle: "Non velit occaecat reprehe",
	postText : "Consequat incididunt enim ut consequat adipisicing exercitation amet duis incididunt. Aliquip commodo cillum eiusmod qui. Aliquip nostrud ad aliqua do. Nulla ex commodo qui sunt eiusmod quis. Elit irure mollit ut Lorem id magna enim excepteur fugiat. Adipisicing nisi occaecat enim duis irure amet aliqua laborum non occaecat magna culpa. Sunt tempor enim magna cupidatat Lorem.", 
	username : "John", 
	postImage: "post_bg_2.png",
	comments : [ 
			{
					commentText : "non exercitationem consequatur temporibus quia dicta id earum molestias voluptatibus et ut quia officiis dignissimos ex maxime sit voluptatem", 
					username : "Jane"
			} 
	] 
},
{
	postTitle: "Mollit ullamco.",
	postText : "Ea quis nisi eu anim esse qui duis ipsum aliqua anim officia fugiat excepteur. Aliqua et dolor aute nulla. Veniam cillum pariatur ipsum pariatur commodo pariatur Lorem magna. Minim ullamco id nulla cillum excepteur dolore consectetur cupidatat pariatur excepteur sit.", 
	username : "Jane", 
	postImage: "post_bg_3.png",
	comments : [ ] 
},
{
	postTitle: "Mollit ullamco.",
	postText : "Consequat incididunt enim ut consequat adipisicing exercitation amet duis incididunt. Aliquip commodo cillum eiusmod qui. Aliquip nostrud ad aliqua do. Nulla ex commodo qui sunt eiusmod quis. Elit irure mollit ut Lorem id magna enim excepteur fugiat. Adipisicing nisi occaecat enim duis irure amet aliqua laborum non occaecat magna culpa. Sunt tempor enim magna cupidatat Lorem.", 
	username : "John", 
	postImage: "post_bg_2.png",
	comments : [ 
			{
					commentText : "non exercitationem consequatur temporibus quia dicta id earum molestias voluptatibus et ut quia officiis dignissimos ex maxime sit voluptatem", 
					username : "Jane"
			} 
	] 
},
{
	postTitle: "Mollit ullamco.",
	postText : "Ea quis nisi eu anim esse qui duis ipsum aliqua anim officia fugiat excepteur. Aliqua et dolor aute nulla. Veniam cillum pariatur ipsum pariatur commodo pariatur Lorem magna. Minim ullamco id nulla cillum excepteur dolore consectetur cupidatat pariatur excepteur sit.", 
	username : "Jane", 
	postImage: "post_bg.png",
	comments : [ ] 
},
	]
};

module.exports = data;