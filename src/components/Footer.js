import React from 'react';
import Section from 'wrappers/Section';
import ContentContainer from 'wrappers/ContentContainer';
import Text from 'wrappers/Text';


function Footer() {
  return (
    <Section
      bg="light-gray"
      py='5vh'
    >
      <ContentContainer width={[ 1, 1/2, 1/3, 1/4]} mx='auto' alignContent='center'>
        <Text textAlign='center'>Made with ❤️ by Javi</Text>
      </ContentContainer>
    </Section>
  );
}

export default Footer;
