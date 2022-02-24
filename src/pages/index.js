import {graphql, Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const IndexPage = ({data}) => {
	const posts = data.allMdx.nodes;
	return (
		<Layout>
			<Seo title={`Home Page`} />
			<StaticImage
				src='https://jooinn.com/images/beach-during-sunset.jpg'
				alt='Sunset on the beach.'
				layout='fullWidth'
				aspectRatio={21 / 9}
			/>
			{posts.map((post) => {
				return (
					<Link to={post.slug} key={post.slug}>
						<h2>{post.frontmatter.title}</h2>
					</Link>
				);
			})}
		</Layout>
	);
};

export const pageQuery = graphql`
	{
		allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
			nodes {
				slug
				frontmatter {
					title
				}
			}
		}
	}
`;

export default IndexPage;
