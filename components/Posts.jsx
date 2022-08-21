import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
// 	{
// 		id: "10",
// 		username: "dascccce",
// 		userImg:
// 			"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRVwjaTXpywwICVWcCTG0jfDB5mh5owliY5t2EKutHi7BUU5ZnJnAmTqJdWqpD6d6n3",
// 		img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRVwjaTXpywwICVWcCTG0jfDB5mh5owliY5t2EKutHi7BUU5ZnJnAmTqJdWqpD6d6n3",
// 		caption: "teste value",
// 	},
// ];

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[db]
	);

	return (
		<div>
			{posts.map((post) => {
				{
					console.log(post.data());
				}
				return (
					<Post
						key={post.id}
						id={post.id}
						username={post.data().username}
						userImg={post.data().profileImg}
						img={post.data().image}
						caption={post.data().caption}
					/>
				);
			})}
		</div>
	);
};

export default Posts;
