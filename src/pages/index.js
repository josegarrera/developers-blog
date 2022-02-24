import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const IndexPage = () => {
	return (
		<Layout>
			<Seo title={`Home Page`} />
			<div>Hellow World</div>
		</Layout>
	);
};

export default IndexPage;
