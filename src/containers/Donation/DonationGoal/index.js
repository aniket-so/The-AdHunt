import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import SectionWrapper, {
  ContentArea,
  TextWrapper,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
  Illustration,
} from './donationGoal.style';

import fundraisersImage from 'common/assets/image/donation/fund-rising/1.png';

const DonationGoal = () => {
  return (
    <SectionWrapper id="donation-goal">
      <Container>
        <ContentArea>
          <TextWrapper>
            <Heading content="Be helping hand to recover COVID-19 patients" />
            <p className="desc">
              We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a specific place to
              live.
              <Link href="#learn-more">
                Learn More <Icon icon={chevronRight} />
              </Link>
            </p>
            <DonationProgressbar>
              <BarArea>
                <CurrentStatus>
                  <strong>$1200</strong> of $10000 goal
                </CurrentStatus>
                <Text className="last-donate-time" content="Last donation 5m ago" />
              </BarArea>
              <Heading as="h5" content="Raised by 10 people in 1 month" />
            </DonationProgressbar>
            <ShareArea>
              <DonateButton href="#home" offset={81}>
                Donate Now
              </DonateButton>
              <ShareList>
                <Item className="share-label">Share on:</Item>
                <Item>
                  <Link href="#1" target="_blank" className="twitter">
                    <Icon icon={twitter} size={22} />
                  </Link>
                </Item>
                <Item>
                  <Link href="#1" target="_blank" className="facebook">
                    <Icon icon={facebookSquare} size={22} />
                  </Link>
                </Item>
              </ShareList>
            </ShareArea>
          </TextWrapper>
          {/* <ImageWrapper>
            <Image src={fundraisersImage} alt="Charity" />
          </ImageWrapper> */}
        </ContentArea>
      </Container>
      <Illustration>
        <NextImage src={fundraisersImage} alt="Charity" />
      </Illustration>
    </SectionWrapper>
  );
};

export default DonationGoal;
