import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImages: allFile {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const node = data.placeholderImages.nodes.find(n => n.relativePath === src);
      return node ? (
        <Img fluid={node.childImageSharp.fluid} />
      ) : null;
    }}
  />
);

Image.propTypes = {
  src: PropTypes.string,
};

Image.defaultProps = {
  src: `gatsby-astronaut.png`,
};

export default Image;
