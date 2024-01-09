import React from 'react';
import PropTypes from 'prop-types';
import NextImage from '../NextImage';
import Link from 'next/link';

const BlogPost = ({ className, thumbUrl, title, excerpt, link, ott,post }) => {
  // Add all classes to an array
  const addAllClasses = ['blog_post'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
      <div className={addAllClasses.join(' ')}>
        <div className="thumbnail">
          <NextImage src={thumbUrl} alt={title} />
        </div>
        <div className="content">
          <h3 className="title">{title} - {ott}</h3>
          <p className="excerpt">{excerpt}</p>
          <Link key={post.id} href={`/platform/${post.slug}`}>Check Here</Link>
        </div>
      </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;
