import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import GitHubIcon from '../images/github.svg';

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          repoUrl
        }
      }
    }
  `);

  return (
    <Box component="header" display="flex" alignItems="center" mt={2} mb={4}>
      <Typography variant="">
        <Link to="/" style={{ textDecoration: `none`, fontWeight: 700 }}>
          {site.siteMetadata.title}
        </Link>
      </Typography>

      <div style={{ flexGrow: 1 }} />

      <a
        href="https://github.com/jacklaw1410"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 24 }}
      >
        <GitHubIcon />
      </a>

      <Link
        to="/about"
        style={{ textDecoration: `none`, marginLeft: '0.5rem' }}
      >
        About me
      </Link>
    </Box>
  );
};

export default Header;
