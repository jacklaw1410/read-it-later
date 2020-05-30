import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Header from '../components/header';
import Image from '../components/image';
import SEO from '../components/seo';

const AboutMePage = () => ( 
  <>
    <SEO title="About me" />

    <Header />

    <Typography variant="h4" gutterBottom>
      Hey that's me!
    </Typography>

    <Box maxWidth={200} mb={2}>
      <Image src="philosoraptor.jpeg" />
    </Box>

    <Typography paragraph>
      A self-taught engineer, a thinker, a philosorapter.
    </Typography>
  </>
);

export default AboutMePage;
