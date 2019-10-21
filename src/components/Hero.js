import React from 'react';
import Section from 'wrappers/Section';
import ContentContainer from 'wrappers/ContentContainer';


function Hero({ title }) {
  return (
    <Section
      bg="moon-gray"
      py='25vh'
    >
      <ContentContainer width='80%' mx='auto' justifyContent='center'>

          {title ? (
            <h1>{title}</h1>
          ) : (
            <>
              <h1>Hired by Netlify</h1>
              <h3>Hello! I created this site to try and get hired by Netlify as a Support Engineer.</h3>
            </>
          )}

      </ContentContainer>
    </Section>
  );
}

export default Hero;


//  backgroundImage="linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
