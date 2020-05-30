import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
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
                <TableCell align="left">Tags</TableCell>
              </TableRow>
            </TableHead>
          </Hidden>
          <TableBody>
            {bookmarks.map(bookmark => (
              <TableRow key={bookmark.url}>
                <TableCell>
                  <Link
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    {bookmark.title}
                  </Link>
                </TableCell>

                <Hidden smDown>
                  <TableCell>{`${formatDistanceToNow(
                    new Date(bookmark.added)
                  )} ago`}</TableCell>

                  <TableCell>
                    {bookmark.tags.map(tag => (
                      <Box key={tag.name} m={0.5}>
                        <Chip
                          variant="outlined"
                          size="small"
                          label={tag.name}
                        />
                      </Box>
                    ))}
                  </TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default IndexPage;
