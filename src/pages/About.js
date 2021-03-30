import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  // LogoLink as LogoLinkBase,
  // NavLinks,
  // NavLink as NavLinkBase,
  // PrimaryLink as PrimaryLinkBase
} from "../components/headers/default.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import logoImageSrc from "images/bm-p-on-w.png";
// import logoImageSrc from "images/logo-light.svg";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
// const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
// const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
// const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
// const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`
const Link = tw.a`inline-block mt-2 text-xl text-purple-300 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-200`;

export default ({
  heading = "Hello!",
  description = `I am a (sometimes) normal human who likes to code, teach, and throw frisbees. After
   working as various forms of an engineer for about 5 years, I went back to school in 2019 and got a teaching 
   credential with endorsements in high school math, physics, and computer science. While I love teaching and plan to 
   incorporate it into my career is some way, I have decided that for now, working as an engineer is a better 
   fit for me. I certainly learned a ton as a student teacher, and I am excited to be back in the
    tech world with some newly learned social skills (I'm pretty sure my patience is now infinite after learning to manage
    a class of 30 ninth graders). I am actively looking for a full-time Data Scientist or Software Engineering role, 
    but would be interested in part-time or gig work as well. I am also working part-time as an online tutor to scratch 
    my teaching itch.`,
  description2 = `When I am not working, I like to trail-run, hike, rock-climb, play disc golf, read, meditate, and 
  spend time with family and friends.`,
  imageSrc = serverIllustrationImageSrc,
}) => {
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header/>
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <Link href="/datascience">Data Science Resume</Link>
                <br/>
                <Link href="/software">Software Engineer Resume</Link>
                <br/>
                <Link href="/teaching">Teaching Resume</Link>
                <br/>
                <Link href="/tutoring">Tutoring Services</Link>
                <Description>{description2}</Description>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
