import videoBtn from 'common/assets/image/webApp/video-btn.svg';
import videoShape1 from 'common/assets/image/webApp/video-dot-1.svg';
import videoShape2 from 'common/assets/image/webApp/video-shape-1.svg';
import videoShape3 from 'common/assets/image/webApp/video-wave-1.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { VIDEO_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import VideoArea from './video.style';
import VideoDialog from 'common/components/Dialog/videoDialog';


const Video = () => {
  return (
    <VideoArea>
      <Container>
        <Heading as="h2" content={VIDEO_DATA?.title} />
        <Box className="videoBox">
          <div className='videoShape-1 videoShape'>
            <Image src={videoShape1} alt="" />
          </div>
          <div className='videoShape-2 videoShape'>
            <Image src={videoShape2} alt="" />
          </div>
          <div className='videoShape-3 videoShape'>
            <Image src={videoShape3} alt="" />
          </div>
          <div className='video-play-button-wrapper'>
            <VideoDialog
              label={
                <Button
                  className="videoBtn"
                  icon={<Image src={videoBtn} alt="" />}
                  iconPosition="left"
                  title=""
                />
              }
              content={
                <div style={{ margin: 'auto' }}>
                  <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              }
            />
          </div>
        </Box>
      </Container>
    </VideoArea>
  );
};

export default Video;
