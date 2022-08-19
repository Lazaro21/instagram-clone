import Post from './Post'

const DUMMY_DATA = [
	{
		id: "10",
		username: "dascccce",
		userImg:
			"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRVwjaTXpywwICVWcCTG0jfDB5mh5owliY5t2EKutHi7BUU5ZnJnAmTqJdWqpD6d6n3",
		img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRVwjaTXpywwICVWcCTG0jfDB5mh5owliY5t2EKutHi7BUU5ZnJnAmTqJdWqpD6d6n3",
		caption: "teste value",
	},
];

const Posts = () => {
	return (
		<div>
			{DUMMY_DATA.map((post) => {
				return (
					<Post
						key={post.id}
						id={post.id}
						username={post.username}
						userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
					/>
                
				);
			})}
		</div>
	);
};

export default Posts;
