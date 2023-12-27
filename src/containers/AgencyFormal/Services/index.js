import React from "react";
import { Icon } from "react-icons-kit";
import { androidDone } from "react-icons-kit/ionicons/androidDone";
import Container from "common/components/UI/ContainerTwo";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import List from "common/components/List";
import SectionWrapper, { SectionHeader, ServiceWrapper } from "./service.style";
import data from "common/data/AgencyFormal";
import { Fade, Zoom } from "react-awesome-reveal";

const Services = () => {
	return (
		<SectionWrapper id="service">
			<Container>
				<Fade direction="up" triggerOnce delay={100}>
					<SectionHeader>
						<Zoom triggerOnce>
							<Heading content="Ideal solutions for you" />
							<Text content="Go beyond ultimate features" />
						</Zoom>
					</SectionHeader>
				</Fade>
				<ServiceWrapper>
					{data.services.map((item, index) => (
						<Fade direction="up" triggerOnce delay={130 * item.id} key={`service-key-${item.id}`}>
							<FeatureBlock
								key={`post_key-${index}`}
								id={`post_id-${item.id}`}
								className="service__item"
								icon={
									<NextImage
										src={item.icon}
										alt={`Blog Image ${item.id}`}
										objectFit="cover"
									/>
								}
								iconPosition="left"
								title={<Heading as="h4" content={item.title} />}
								description={<Text content={item.description} />}
								listItems={item.features.map((feat, index) => (
									<List
										key={`list-feature-${index}`}
										className="list-points"
										icon={
											<Icon
												className="tick-icon"
												size="20px"
												icon={androidDone}
											/>
										}
										text={<Text className="list-text" content={feat} />}
									/>
								))}
							/>
						</Fade>
					))}
				</ServiceWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default Services;
