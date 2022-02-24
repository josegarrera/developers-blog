import {graphql, Link} from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const IndexPage = ({data}) => {
	const posts = data.allMdx.nodes;
	return (
		<Layout>
			<Seo title={`Home Page`} />
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
