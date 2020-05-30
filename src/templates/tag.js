import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Bookmark from '../components/bookmark';
import Header from '../components/header';
import SEO from '../components/seo';

export default function BlogPost({ pageContext }) {
  const { tag } = pageContext;

  return (
    <>
      <SEO title={`Bookmarks | ${tag.name}`} keywords={[tag.name]} />

      <Header />

      <Typography paragraph gutterBottom>
        Bookmarks related to {tag.name}:
      </Typography>

      <Box display="grid" style={{ gridGap: 8 }}>
        {tag.bookmarks.map(bookmark => (
          <Box key={bookmark.url} pb={1} borderBottom="solid 1px #dcdcdc">
            <Bookmark bookmark={bookmark} />
          </Box>
        ))}
      </Box>
    </>
  );
}
