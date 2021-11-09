
module.exports = {
	i18n:{
		locales: ['en-GB', 'en-US'],
		defaultLocale: 'en-GB'
	},
	poweredByHeader: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgo: false, // Optimization caused bugs with some of my SVGs
					},
				},
			],
		});
		return config;
	},
	async rewrites() {
		return {
			fallback: [
				{
					source: '/legacy/open/:path*',
					destination: 'https://projectfunction.io/legacy/open/:path*',
				},
				{
					source: '/legacy-api/open/:path*',
					destination: 'https://api.projectfunction.io/open/:path*',
				},
				{
					source: '/api/open/:path*',
					destination: 'https://api.projectfunction.io/legacy/open/:path*',
				},
				{
					source: '/resources/public/:path*',
					destination: 'https://campus.projectfunction.io/public/:path*',
				},
				{
					source: '/sitemap.xml',
					destination: '/api/sitemap',
				},
				{
					source: '/robot.txt',
					destination: '/api/robot',
				},
				{
					source: '/upghost.js',
					destination: 'https://upghost.io/tag'
				},
				{
					source: "/bee.js",
					destination: "https://cdn.splitbee.io/sb.js",
				},
				{
					source: "/_hive/:slug",
					destination: "https://hive.splitbee.io/:slug",
				}
			]
		}
	},
	async headers() {
		return [
			{
				source: "/api/sitemap",
				headers: [
					{
						key: 'Cache-control',
						value: 'public, max-age=900'
					}
				]
			},
			{
				source: "/sitemap.xml",
				headers: [
					{
						key: 'Cache-control',
						value: 'public, max-age=900'
					}
				]
			}
		]
	}
}
