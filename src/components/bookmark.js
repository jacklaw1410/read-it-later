import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { formatDistanceToNow } from 'date-fns';
import { navigate } from 'gatsby';
import React from 'react';

const Bookmark = ({ bookmark }) => {
  return (
    <>
      <Box>
        <Link href={bookmark.url} target="_blank" rel="noopener noreferrer">
          {bookmark.title}
        </Link>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <Typography variant="caption">
            <i>{`${formatDistanceToNow(new Date(bookmark.added))} ago`}</i>
          </Typography>

          {bookmark.tags.map(tag => (
            <Box mx={0.5} key={tag.name}>
              <Chip
                variant="outlined"
                size="small"
                label={<Typography variant="caption">{tag.name}</Typography>}
                style={{ height: 'auto' }}
                clickable
                onClick={() => {
                  navigate(`/tag/${tag.name}`);
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Bookmark;
