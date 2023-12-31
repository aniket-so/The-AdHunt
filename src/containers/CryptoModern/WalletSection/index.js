import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import { WalletFeatures } from 'common/data/CryptoModern';
import SectionWrapper, { ContentWrapper } from './walletSection.style';
import WalletImg from 'common/assets/image/cryptoModern/illustration2.png';
import BtnIcon1 from 'common/assets/image/cryptoModern/apple.png';
import BtnIcon2 from 'common/assets/image/cryptoModern/playstore.png';
import { Fade } from 'react-awesome-reveal';

const WalletPortal = () => {
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={WalletImg} alt="Wallet Image" />
          </div>
          <div className="content">
            <Heading content="Our wallet is built for the cryptocurrency  beginner" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit ." />
            <div className="walletfeatures">
              <Fade direction='up' triggerOnce>
                {WalletFeatures.map((feature, index) => (
                  <FeatureBlock
                    key={`feature_point-${index}`}
                    icon={<img src={feature.icon?.src} />}
                    iconPosition="left"
                    title={<Text content={feature.title} />}
                  />
                ))}
              </Fade>
            </div>
            <div className="btnGroups">
              <Button
                title="APP STORE"
                variant="textButton"
                icon={<img src={BtnIcon1?.src} />}
                iconPosition="left"
                className="appStore"
              />
              <Button
                title="PLAY STORE"
                variant="textButton"
                icon={<img src={BtnIcon2?.src} />}
                iconPosition="left"
                className="playStore"
              />
            </div>
            <Text
              className="windowsAllert"
              content="*Windows app coming soon"
            />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
