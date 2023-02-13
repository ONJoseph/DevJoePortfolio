import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Joseph!";
const bio1 = "A Full Stack Developer";
const bio2 = "Specialized in React and Sql";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading size="xl">{greeting}</Heading>
      <Heading size="md">{bio1}</Heading>
      <Heading size="md">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
