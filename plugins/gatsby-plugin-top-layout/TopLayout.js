import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import theme from '../../src/theme';

const TopLayout = props => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ maxWidth: '84ch', padding: '2ch', margin: 'auto' }}>
        {props.children}
      </main>
    </ThemeProvider>
  </>
);

TopLayout.propTypes = {
  children: PropTypes.node,
};

export default TopLayout;
