import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Context from '../../context';
import NoContent from '../no-content/no-content';
import CreatePin from '../create-pin/create-pin';
import './blog.css';
import PinContent from '../pin-content/pin-content';

const Blog = ({ setHeight }) => {
  const { state } = useContext(Context);
  const { draft, currentPin } = state;
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const getBlogContent = () => {
    if (!draft && !currentPin) {
      return <NoContent />;
    } if (draft && !currentPin) {
      return <CreatePin setHeight={setHeight} />;
    } if (!draft && currentPin) {
      return <PinContent />;
    }
  };


  return (
    <Paper
      className={mobileSize ? 'blog-root-mobile' : 'blog-root'}
    >
      {getBlogContent()}
    </Paper>
  );
};

export default Blog;
