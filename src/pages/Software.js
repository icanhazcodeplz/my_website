import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import HeaderBase from "../components/headers/default.js";
import matrixImage from "../images/matrix.jpg"
import covImage from "../images/covid-app.png"
import bulbImage from "../images/lightbulb.jpg"

const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-lg`;
const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const DetailsSmall = tw.div`mt-2 md:mt-0 md:max-w-md mx-2 sm:mx-4 md:mx-2 lg:mx-4`;
const Title = tw.div`text-4xl font-bold text-gray-900`;
const Subtitle = tw.div`text-2xl font-bold tracking-wide text-gray-800`;
const Thin = tw.div`font-thin tracking-wide text-gray-800`;
const Subtitle2 = tw.div`text-lg font-bold tracking-wide text-gray-800`;
const Description = tw.div`mt-2 text-sm leading-tight`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const LinkBig = tw.a`inline-block mt-2 text-3xl text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-200`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  return (
    <div>
      <Header/>
      <Container>
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>Software Engineer Resume</HeadingTitle>
            <HeadingDescription>
              <b>Tech Skills</b> (from most skilled to least): Python, Javascript, AWS, Azure, Docker, SQL, NoSQL, Ruby, R, Matlab
            </HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            <Card key={1} reversed={false}>
              <Image imageSrc={matrixImage}/>
              <Details>
                <Title> Experience </Title>
                <Subtitle> HST Powers </Subtitle>
                <Thin> Remote, Jan 2021 - Present</Thin>
                <Subtitle2>Software Engineer</Subtitle2>
                <DetailsSmall>
                  <Description> &bull; Built a Python AWS Lambda Function API that is used to validate various aspects of our front-end app. </Description>
                  <Description> &bull; Developing test-automation for our React front-end using Cypress and Jest.</Description>
                  <Description> &bull; Acting as the project manager and lead designer for a team of 4 other software engineers.</Description>
                  <br/>
                </DetailsSmall>
                <Description> </Description>
                <Subtitle> Enphase Energy </Subtitle>
                <Thin> Petaluma, CA, Nov 2014 – Jan 2017</Thin>
                <Subtitle2>Senior Software Engineer/Data Scientist</Subtitle2>
                <DetailsSmall>
                  <Description> &bull; Created machine learning models that predicted daily household
                    electricity consumption and solar power production. </Description>
                  <Description> &bull; Architected and built software that quantified the value of installing a home
                    battery system. </Description>
                  <Description> &bull; These solutions were designed to help Enphase size battery systems for customers, potentially increasing sales. </Description>
                </DetailsSmall>
                <br/>
                <Subtitle2>Systems Test Engineer</Subtitle2>
                <DetailsSmall>
                  <Description> &bull; Designed, built, and automated 3-phase test-beds using various third-party programmable grid simulators, load simulators, and photovoltaic panel simulators.</Description>
                  <Description> &bull; Received “Engineering Excellence” bonus award for performance.</Description>
                </DetailsSmall>
              </Details>
            </Card>
            <Card key={2} reversed={true}>
              <Image imageSrc={covImage}/>
              <Details>
                <Title> Projects </Title>
                <Subtitle> COVID-19 Dashboard </Subtitle>
                <Description> &bull; Interactive dashboard of COVID-19 hot-spots that includes both state and county
                  level visualizations. </Description>
                <Description> &bull; Allows users to evaluate the risk of COVID in their region, and to adjust their
                  actions accordingly. </Description>
                <Link href="https://www.covid19dashboard.app">Check it out here</Link>
              </Details>
            </Card>
            <Card key={3} reversed={false}>
              <Image imageSrc={bulbImage}/>
              <Details>
                <Title> Education </Title>
                <Subtitle> The Data Incubator </Subtitle>
                <Thin> San Francisco, CA, May 2016 </Thin>
                <Description> Highly selective, intensive 8-week data science boot camp. </Description>
                <br/>
                <Subtitle> Carnegie Mellon University </Subtitle>
                <Thin> Pittsburgh, PA, May 2013 </Thin>
                <Description> M.S. Mechanical Engineering </Description>
                <br/>
                <Subtitle> Occidental College </Subtitle>
                <Thin> Los Angeles, CA, May 2012 </Thin>
                <Description> B.A. Physics and Economics, Minor Math, Summa Cum Laude, Phi Beta Kappa </Description>
              </Details>
            </Card>
            <Card>
              <LinkBig href="mailto:magnusson.brent@gmail.com">Hire me as a Software Engineer!</LinkBig>
            </Card>
          </Content>
        </SingleColumn>
        <SvgDotPattern1/>
        <SvgDotPattern2/>
        <SvgDotPattern3/>
        <SvgDotPattern4/>
      </Container>
    </div>
  );
};
