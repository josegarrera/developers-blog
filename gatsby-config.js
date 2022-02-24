module.exports = {
	siteMetadata: {
		title: `Developer's Blog`,
		description: `Jose Garrera developer's blog`,
		twitter: `@josegarrera`,
		siteUrl: 'https://josegarrera.com',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/posts`,
				name: `posts`,
			},
		},
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-plugin-theme-ui`,
			options: {
				preset: `@theme-ui/preset-funk`,
				prismPreset: `prism-okaidia`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
