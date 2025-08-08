const isProd = process.env.NODE_ENV === 'production';
const isVercel = !!process.env.VERCEL;

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: isProd && !isVercel ? 'https://garantgruz.ru' : '',
	poweredByHeader: false,
	reactStrictMode: true,
};

module.exports = nextConfig;
