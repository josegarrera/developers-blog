module.exports = {
	siteMetadata: {
		title: `Developer's Blog`,
		description: `Jose Garrera developer's blog`,
		twitter: `@josegarrera`,
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
	],
};
