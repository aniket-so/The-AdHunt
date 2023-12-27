import React from "react";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import CaseStudies from "./casestudies.styles";
import arrowPrimary from "common/assets/image/agencyClassic/arrow-primary.svg";
import Box from "common/components/Box";
import { CASESTUDY } from "common/data/AgencyClassic";
import { Fade } from "react-awesome-reveal";

const CaseStudy = () => {
  return (
    <CaseStudies>
      <Container>
        <Fade direction='up' delay={100} triggerOnce>
          <Box>
            <Heading content="Read some amazing case studies" className="sectionTitle" />
          </Box>
        </Fade>
        <Box className="row">
          <Fade direction='up' delay={100} triggerOnce>
            <Box className="col first-col">
              {CASESTUDY.map((casestudies, index) => (
                (index % 2) == 0 ?
                  <div key={index} className="case_study">
                    <NextImage src={casestudies.image} alt="Case Study" style={{ "height": "auto" }} />
                    <Text content={casestudies.subheading} />
                    <Heading content={casestudies.heading} />
                    <div className="learn-more hover_links">
                      <Button
                        className="text"
                        variant="textButton"
                        title="Learn More"
                      />
                      <NextImage src={arrowPrimary} alt="play" />
                    </div>
                  </div>
                  :
                  null

              ))}
            </Box>
          </Fade>
          <Fade direction='up' delay={100} triggerOnce>
            <Box className="col last-col">
              {CASESTUDY.map((casestudies, index) => (
                (index % 2) != 0 ?
                  <div key={index} className="case_study">
                    <NextImage src={casestudies.image} alt="Case Study" style={{ "height": "auto" }} />
                    <Text content={casestudies.subheading} />
                    <Heading content={casestudies.heading} />
                    <div className="learn-more hover_links">
                      <Button
                        className="text"
                        variant="textButton"
                        title="Learn More"
                      />
                      <NextImage src={arrowPrimary} alt="play" />
                    </div>
                  </div>
                  :
                  null

              ))}
            </Box>
          </Fade>
        </Box>
        <Box>
          <Button className="primary explore-btn primary_hover" title="Read our Story" />
        </Box>
      </Container>
    </CaseStudies>
  );
};

export default CaseStudy;
