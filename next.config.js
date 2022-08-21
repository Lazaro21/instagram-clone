/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"links.papareact.com",
			"t1.gstatic.com",
			"cdn.fakercloud.com",
			"lh3.googleusercontent.com"
		],
	},
};

module.exports = nextConfig;
