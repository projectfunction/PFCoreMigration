
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
	}
}