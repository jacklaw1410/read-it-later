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
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import Header from '../components/header';
import SEO from '../components/seo';

const BOOKMARK_QUERY = gql`
  query {
    bookmarks {
      url
      title
      added
      tags {
        name
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Header />

    <Typography variant="h3" gutterBottom>
      Read it later, maybe?
    </Typography>

    <Typography paragraph>Lorem ipsum</Typography>

    <Query query={BOOKMARK_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching...</div>;
        if (error) return <div>Oooops...</div>;

        const { bookmarks } = data;

        if (bookmarks.length === 0) {
          return (
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
          );
        }

        return (
          <Table>
            <Hidden smDown>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">When added?</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {bookmarks.map(bookmark => (
                <TableRow key={bookmark.url}>
                  <TableCell>{bookmark.title}</TableCell>

                  <Hidden smDown>
                    <TableCell>{`${distanceInWordsToNow(
                      new Date(bookmark.added)
                    )} ago`}</TableCell>
                  </Hidden>

                  <TableCell>
                    <IconButton
                      href={bookmark.url}
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
        );
      }}
    </Query>
  </>
);

export default IndexPage;
