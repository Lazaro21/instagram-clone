import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import Story from "./Story";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const createRandomUser = () => {
	return {
		userId: faker.datatype.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
		password: faker.internet.password(),
		birthdate: faker.date.birthdate(),
		registeredAt: faker.date.past(),
	};
};
const Stories = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => {
			const results = { ...createRandomUser(), id: i };
			return results;
		});
		// console.log(suggestions)
		setSuggestions(suggestions);
	}, []);

	return (
		<div
			className="flex space-x-2 p-6
         bg-white mt-8 border-gray-200 border
         rounded.sm overflow-x-scroll scrollbar-thin
         scrollbar-thumb-black"
		>
			{session && (
				<Story
					img={session.user.image}
					username={session.user.username}
				/>
			)}
			{suggestions.map((profile) => {
				return (
					<Story
						key={profile.id}
						img={profile.avatar}
						username={profile.username}
					/>
				);
			})}
		</div>
	);
};

export default Stories;
