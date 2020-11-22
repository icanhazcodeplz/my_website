import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import HeaderBase from "../components/headers/default.js";
import bulbImage from "../images/lightbulb.jpg"
import teachingImage from "../images/teaching.jpg"
import mathImage from "../images/math.jpg"
import ytImage from "../images/youtube.jpg"

const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
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
const Subtitle = tw.div`text-xl font-bold tracking-wide text-gray-800`;
const Thin = tw.div`font-thin tracking-wide text-gray-800`;
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
          <HeadingTitle>Teaching Resume</HeadingTitle>
          <HeadingDescription>
            {/*I like to believe that I have a penchant for assembling the needs of various stakeholders, collaborating to create data-driven solutions, and explaining the (often complex) result in a simple manner.*/}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          <Card key={1} reversed={false}>
            <Image imageSrc={bulbImage} />
            <Details>
              <Title> Education </Title>
              <Subtitle> City University of Seattle </Subtitle>
                <Thin> Everett, WA, June 2020</Thin>
                <Description> WA State Teaching Credential with endorsements in Secondary Math, Physics, and Computer Science </Description>
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
          <Card key={2} reversed={true}>
            <Image imageSrc={teachingImage} />
            <Details>
              <Title> Experience </Title>
                <Subtitle> Student Teacher, Squalicum HS </Subtitle>
                  <Thin> Bellingham, WA, August 2019 - June 2020</Thin>
                  <DetailsSmall>
                    <Description> &bull; Helped teach three Algebra 1 classes with a high percentage of students on IEPs, two PreCalculus classes, and an Intensified Algebra class where half of the students were Spanish-dominant speakers. </Description>
                  </DetailsSmall>
                  <br/>
                <Subtitle> Paraeducator Sub, Bellingham Schools </Subtitle>
                  <Thin> Bellingham, WA, May 2019 - June 2020</Thin>
                  <DetailsSmall>
                    <Description> &bull; Assisted individuals and groups of students who required services in special education.</Description>
                  </DetailsSmall>
                  <br/>
                <Subtitle> Teen Program Coordinator, YMCA </Subtitle>
                  <Thin> Bellingham, WA, March 2019 - June 2019</Thin>
                  <DetailsSmall>
                    <Description> &bull; Organized and chaperoned 30+ day-long sessions of the “Y Adventure School”, which gets middle-schoolers into outdoor settings. </Description>
                    <Description> &bull; Activities included rock climbing, hiking, cleaning beaches, and leadership building exercises. </Description>
                  </DetailsSmall>
                  <br/>
                <Subtitle> Climbing Wall Staff, YMCA </Subtitle>
                  <Thin> Bellingham, WA, July 2019 - June 2020</Thin>
                  <DetailsSmall>
                    <Description> &bull; Taught rock climbing lessons to children aged 3 to 17. </Description>
                  </DetailsSmall>
                  <br/>
            </Details>
          </Card>
          <Card key={3} reversed={false}>
            <Image imageSrc={mathImage} />
            <Details>
              <Title> Volunteering </Title>
                <Subtitle> STEM Tutor, McKinley MS </Subtitle>
                  <Thin> Petaluma, CA, October 2016 - February 2017</Thin>
                  <DetailsSmall>
                    <Description> &bull; Tutored 3rd through 8th graders in math and science. </Description>
                  </DetailsSmall>
                 <br/>
                <Subtitle> Math/Physics Tutor, Squalicum HS </Subtitle>
                  <Thin> Bellingham, WA, March 2019 – June 2019</Thin>
                  <DetailsSmall>
                    <Description> &bull; Tutored high school students in math and physics at the afterschool tutoring center. </Description>
                    <Description> &bull; Subjects: Algebra 1 and 2, Physics, Computer Programming. </Description>
                  </DetailsSmall>
                 <br/>
           </Details>
          </Card>
          <Card key={4} reversed={true}>
            <Image imageSrc={ytImage} />
            <Details>
              <Title> Youtube Teaching </Title>
                <Subtitle> AlwaysLearning </Subtitle>
                  <DetailsSmall>
                    <Description> &bull; I have created 18 videos (so far) that have a total of 33k views. </Description>
                    <Link href="https://www.youtube.com/channel/UCvvZQbmbnRzqwy3tDu7vuwg">Check it out here</Link>
                  </DetailsSmall>
           </Details>
          </Card>
          <Card>
          <LinkBig href="/tutoring">Hire me as a tutor!</LinkBig>
          </Card>

        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
      </Container>
    </div>
  );
};
