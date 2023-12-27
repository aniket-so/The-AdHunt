import React from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Tab, { Panel } from 'common/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

import { branchData } from 'common/data/Charity';
import { Fade } from 'react-awesome-reveal';

const BranchSection = () => {
  const title = (text) => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {branchData.map((item) => (
          <Panel
            title={<Text content={item.menuItem} />}
            key={`tab_key${item.id}`}
          >
            <ContentWrapper>
              <div className="image">
                <Image src={item.image?.src} alt="Charity Landing" />
              </div>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <Link href={item.linkUrl} className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">{item.linkText}</span>
                </Link>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
