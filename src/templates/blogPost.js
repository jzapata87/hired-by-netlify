import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import ContentContainer from 'wrappers/ContentContainer';


const Post = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  let disqusConfig = {
    //identifier: post.id,
    title: title,
  }
  return (
    <Layout title={title} description={description}>
      <ContentContainer width='60%' mx='auto'>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Disqus config={disqusConfig} />
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        pathname
        description
      }
      html
    }
  }
`;

export default Post;
