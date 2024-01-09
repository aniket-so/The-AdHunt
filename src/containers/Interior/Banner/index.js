import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from './banner.style';
import slide1 from 'common/assets/image/interior/slider/slide-1.png';

import { bannerData } from 'common/data/Interior';
import { Fade } from 'react-awesome-reveal';

const Banner = ({filterData, adname}) => {
  const { discount, discountLabel, title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    perView: 4,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 4,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  const name = adname;

  return (
    <BannerWrapper>
      <Container>
        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {filterData.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <Link href="/platform/[name]/[subname]" as={`/platform/${name}/${item.name.replace(/\s+/g, '-')}`} className="item_wrapper">
                      <Image src={slide1} alt={item.id} />
                      <Heading as="h4" content={item.name} />
                    </Link>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
