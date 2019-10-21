import React from 'react';
import Section from 'wrappers/Section';
import ContentContainer from 'wrappers/ContentContainer';
import Box from 'wrappers/Box';
import Heading from 'wrappers/Heading';
import Card from 'wrappers/Card';
import StyledLink from 'wrappers/StyledLink';
import { graphql, StaticQuery } from 'gatsby';


const RecentPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/"}}) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                pathname
                description
              }
            }
          }
        }
      }
    `}
    render={data => (

      <Section
        bg="light-gray"
        py='10vh'
      >

        <ContentContainer width='80%' mx='auto'>
          <h1>Recent Posts</h1>
          <Box >
            {data.allMarkdownRemark.edges.map(edge => (
              <Card m={2} width={[ 1, 1/2, 1/3, 1/4]}>
                <Heading as='h2'>
                  <StyledLink to={edge.node.frontmatter.pathname}>
                    {edge.node.frontmatter.title}
                  </StyledLink>
                </Heading>
                <p>{edge.node.frontmatter.description}</p>
              </Card>
            ))}
          </Box>
        </ContentContainer>
      </Section>
    )}
  />
);


export default RecentPosts;
