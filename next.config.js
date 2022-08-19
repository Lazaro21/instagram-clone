/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"links.papareact.com",
			"t1.gstatic.com",
			"cdn.fakercloud.com",
		],
	},
};

module.exports = nextConfig;
