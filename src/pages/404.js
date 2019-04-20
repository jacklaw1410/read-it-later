import Typography from '@material-ui/core/Typography';
import React from 'react';
import Header from '../components/header';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />

    <Header />

    <Typography variant="h3" gutterBottom>NOT FOUND</Typography>
    <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </>
);

export default NotFoundPage;
