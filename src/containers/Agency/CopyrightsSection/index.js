import React from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import data from 'common/data/Agency/';

const CopyrightSection = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {data.social_profile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href="#1">
              <i className={profile.icon} />
            </Link>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2019 @RedQ Inc" />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
