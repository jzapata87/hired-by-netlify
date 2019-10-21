/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, banner, pathname, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
          siteMetadata {
            defaultTitle
            titleAlt
            shortName
            author
            siteLanguage
            logo
            siteUrl
            pathPrefix
            defaultDescription
            defaultBanner
            twitter
          }
        }
      }
    `
  )

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    image: `${site.siteMetadata.siteUrl}${banner || site.siteMetadata.defaultBanner}`,
    url: `${site.siteMetadata.siteUrl}${pathname || '/'}`,
    //this needs to be fixed since a post will have a specific image
  };

  const realPrefix = site.siteMetadata.pathPrefix === '/' ? '' : site.siteMetadata.pathPrefix;

  let schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': site.siteMetadata.siteUrl,
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.defaultTitle,
      alternateName: site.siteMetadata.titleAlt || '',
    },
  ];

  if (article) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': seo.url,
        url: seo.url,
        name: title,
        alternateName: site.siteMetadata.titleAlt || '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        description: seo.description,
        datePublished: site.buildTime,
        dateModified: site.buildTime,
        author: {
          '@type': 'Person',
          name: site.siteMetadata.author,
        },
        publisher: {
          '@type': 'Organization',
          name: site.siteMetadata.author,
          logo: {
            '@type': 'ImageObject',
            url: site.siteMetadata.siteUrl + realPrefix + site.siteMetadata.logo,
          },
        },
        isPartOf: site.siteMetadata.siteUrl,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': site.siteMetadata.siteUrl,
        },
      },
    ];
  }


  return (
    <>
      <Helmet title={seo.title}>
        <html lang={site.siteMetadata.siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="apple-mobile-web-app-title" content={site.siteMetadata.shortName} />
        <meta name="application-name" content={site.siteMetadata.shortName} />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph  */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content={article ? 'article' : null} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  banner: null,
  pathname: null,
  article: false,
};


export default SEO
