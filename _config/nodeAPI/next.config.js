/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/pengxjwawa123/tokenAssets',
				permanent: true,

			},
		];
	}
};

module.exports = nextConfig;
