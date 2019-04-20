import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { distanceInWordsToNow } from 'date-fns';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Typography variant="h4" gutterBottom>
      Read it later, maybe?
    </Typography>

    <Typography paragraph>Lorem ipsum</Typography>

    {data.bookmarks.nodes.length ? (
      <Table>
        <Hidden smDown>
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">When added?</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
        </Hidden>
        <TableBody>
          {data.bookmarks.nodes.map(node => (
            <TableRow key={node.id}>
              <TableCell>{node.title}</TableCell>

              <Hidden smDown>
                <TableCell>{`${distanceInWordsToNow(new Date(node.created))} ago`}</TableCell>
              </Hidden>

              <TableCell>

              <IconButton
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChromeReaderModeIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <Typography>
        <span role="img" aria-label="sparkle">
          ✨
        </span>
        Awesome! No more unfinished bookmarks!
        <span role="img" aria-label="dizzy">
          {' '}
          💫
        </span>
      </Typography>
    )}
  </Layout>
);

export const query = graphql`
  query {
    bookmarks: allBookmarkJson {
      nodes {
        id
        title
        url
        tags
        created
      }
    }
  }
`;

export default IndexPage;
