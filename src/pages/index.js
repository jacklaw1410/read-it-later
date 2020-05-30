import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { formatDistanceToNow } from 'date-fns';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import SEO from '../components/seo';

const BOOKMARK_QUERY = graphql`
  query {
    library {
      bookmarks {
        url
        title
        added
        tags {
          name
        }
      }
    }
  }
`;

const IndexPage = () => {
  const {
    library: { bookmarks },
  } = useStaticQuery(BOOKMARK_QUERY);
  console.log(bookmarks)
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Header />

      <Typography variant="h3" gutterBottom>
        Read it later, maybe?
      </Typography>

      <Typography paragraph>Lorem ipsum</Typography>

      {bookmarks.length === 0 ? (
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
      ) : (
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
                  <TableCell>{`${formatDistanceToNow(
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
      )}
    </>
  );
};

export default IndexPage;
