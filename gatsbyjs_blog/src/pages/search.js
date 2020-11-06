import React from 'react';
// import { Link } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from '../components/Search'

const searchPage = () => (
    <Layout>
        <SEO title="Search" />
        <Search />
    </Layout>
)

export default searchPage;