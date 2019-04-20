import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Image from '../components/image';
import SEO from '../components/seo';


const AboutMePage = () => (
  <>
    <SEO title="About me" />

    <Header />

    <Typography variant="h3" gutterBottom>Hey that's me!</Typography>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image src="philosoraptor.jpeg" />
    </div>
    <Typography paragraph>A self-taught engineer, a thinker, a philosorapter.</Typography>
    <Link to="/">Back to the homepage</Link>
  </>
);

export default AboutMePage;
