import { Box, Heading, Image, Text } from "@chakra-ui/react";

import homepic from "../assets/home.jpg";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Heading size={"4xl"} mt={16} textAlign={"start"}>
        Notes Taking App
      </Heading>
      <Image
        w={700}
        position={"absolute"}
        right={0}
        src={homepic}
        alt="Homepage Image"
      />
      <Text maxW={"50%"} mt={8} textAlign={'justify'}>
        The note-taking app is a versatile and user-friendly application
        designed to streamline the process of capturing, organizing, and
        managing information. With a clean and intuitive interface, users can
        effortlessly create, edit, and categorize notes based on their
        preferences and needs. Key features of the note-taking app include a
        rich text editor that supports various formatting options, enabling
        users to create notes with bold text, bullet points, headers, and more.
        The app also provides seamless synchronization across devices, ensuring
        that users can access their notes anytime, anywhere. To enhance
        productivity, the app incorporates a tagging system and categorization
        features, allowing users to organize their notes efficiently. Users can
        easily search for specific notes using keywords or tags, making
        retrieval quick and hassle-free. Furthermore, the app prioritizes
        collaboration by offering sharing capabilities, enabling users to
        collaborate on notes and projects in real-time. Whether it's for
        personal use or collaborative work, the note-taking app adapts to
        diverse user needs. In terms of customization, users can personalize the
        app by choosing from various themes and adjusting settings to match
        their preferences. With a focus on user experience, the note-taking app
        aims to be an indispensable tool for capturing ideas, creating to-do
        lists, and organizing thoughts in a simple yet powerful manner.
      </Text>
    </Box>
  );
}
