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
        <Box display="grid" style={{ gridGap: 8 }}>
          {bookmarks.map(bookmark => (
            <Box key={bookmark.url} pb={1} borderBottom="solid 1px #dcdcdc">
              <Box>
                <Link
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark.title}
                </Link>
              </Box>
              <Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="caption">
                    <i>{`${formatDistanceToNow(
                      new Date(bookmark.added)
                    )} ago`}</i>
                  </Typography>

                  {bookmark.tags.map(tag => (
                    <Box mx={0.5} key={tag.name}>
                      <Chip
                        variant="outlined"
                        size="small"
                        label={
                          <Typography variant="caption">{tag.name}</Typography>
                        }
                        style={{ height: 'auto' }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default IndexPage;
