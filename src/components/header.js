import Typography from '@material-ui/core/Typography';
import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import GitHubIcon from '../images/github.svg';

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            repoUrl
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          marginTop: '1.625rem',
          marginBottom: '2.625rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">
          <Link to="/" style={{ textDecoration: `none`, fontWeight: 700 }}>
            {data.site.siteMetadata.title}
          </Link>
        </Typography>

        <div style={{ flexGrow: 1 }} />

        <a
          href={data.site.siteMetadata.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        
        <Link to="/about" style={{ textDecoration: `none`, marginLeft: '0.5rem' }}>
          About me
        </Link>
      </header>
    )}
  />
);

export default Header;
