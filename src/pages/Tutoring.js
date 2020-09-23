import React from "react";
// import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import HeaderBase from "../components/headers/default.js";

const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl items-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-700 text-left max-w-xl`;
// const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;
const Link = tw.a`inline-block mt-2 text-lg text-primary-600 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-200`;

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
            <HeadingTitle>Tutoring Services</HeadingTitle>
            <HeadingDescription>
              After student-teaching in Algebra 1 and Precalculus classrooms, I found that I love working with students
              one-on-one more than anything! As a tutor, my goal is to give you confidence that you can do hard things,
              and to guide you through problem-solving, but not to give you the answer. I find little value in speed and
              rote-work, but instead, I seek to help you fully understand problems conceptually and visually. I view
              mastery as the ability to explain a concept to your grandma with words and/or drawings.
            </HeadingDescription>

            <HeadingDescription>
              I have previous experience tutoring PreAlgebra, Algebra, PreCalculus, Physics, Computer Programming, and Data Science.
              I am confident I can tutor virtually any subject, so long as I have some time to prepare beforehand.
              If you (or your child) is interested in working with me, please fill out the form below.

            </HeadingDescription>
            <Link href="/teaching">Brent's Teaching Resume</Link>
            <HeadingDescription>
              <b>At this time, all tutoring will be done online via Zoom or similar.</b>
            </HeadingDescription>
          </HeadingInfoContainer>
          <HeadingInfoContainer>
            <iframe title="Tutoring Request Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSetvkc7_8XApDZdBw_i4FYa_ygUObnkPmccD0dmtCkBFNcZ3Q/viewform?embedded=true"
              width="420" height="2250" frameBorder="0" marginHeight="0" marginWidth="0"> Loading…
            </iframe>
          </HeadingInfoContainer>
        </SingleColumn>
        <SvgDotPattern1 />
        <SvgDotPattern2 />
        <SvgDotPattern3 />
        <SvgDotPattern4 />
      </Container>
    </div>
  );
};
