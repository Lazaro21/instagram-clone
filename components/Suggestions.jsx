import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const buildContextualCard = () => {
	return {
		id: faker.datatype.uuid(),
		avatar: faker.image.avatar(),
		username: faker.internet.userName(),
		companyName: faker.company.name(),
	};
};

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => {
			return buildContextualCard();
		});
		// console.log(suggestions);
		setSuggestions(suggestions);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">
					Suggestions for you
				</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>

			{suggestions.map((profile) => {
				return (
					<div
						key={profile.id}
						className="flex items-center justify-between mt-3"
					>
						<img
							className="w-10 h-10 rounded-full border p-[2px]"
							src={profile.avatar}
							alt={profile.username}
						/>

                        <div className="flex-1 ml-5">
                            <h2 className="font-semibold text-sm truncate">
                                {profile.username}
                            </h2>
                            <h3 className="text-sm text-gray-400">Works at {profile.companyName}</h3>
                        </div>

                        <button className="text-xs text-blue-400">Follow</button>
					</div>
				);
			})}
		</div>
	);
};

export default Suggestions;
