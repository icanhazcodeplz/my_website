import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import logo from "images/logo.svg";

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col sm:flex-row items-center justify-between`;
const DownloadLink = tw.a`mt-8 sm:mt-0 transition duration-300 font-medium pb-1 border-b-2 text-primary-500 border-purple-300 hocus:border-primary-500`;
const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap -mr-12`;

export default ({
  features = null,
}) => {
  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              Treact
            </LogoLink>
            <DownloadLink target="_self" href="datascience">
              Data Science Resume
            </DownloadLink>
            <DownloadLink target="_self" href="about">
              AboutBrent
            </DownloadLink>
          </NavRow>
          <SectionContainer>
            <SectionHeading>Inner Pages</SectionHeading>
            <SectionDescription>
              Blah
            </SectionDescription>
            <PreviewCards>
            </PreviewCards>
          </SectionContainer>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
