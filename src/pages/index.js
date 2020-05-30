import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Bookmark from '../components/bookmark';
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

      <Typography variant="h4" gutterBottom paragraph>
        Read it later, maybe?
      </Typography>

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
              <Bookmark bookmark={bookmark} />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default IndexPage;
