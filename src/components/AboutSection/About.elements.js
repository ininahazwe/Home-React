import styled from 'styled-components';

export const Height = styled.div`
  height: 100vh;

  @media screen and (max-width: 960px){
    height: auto;
  }
  
`
export const AboutSectionWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 960px){
    height: auto;
    padding: 3vh;
  }
  
  @media screen and (max-width: 768px){
    height: auto;
    padding: 50px 50px;
    grid-template-areas: "col1 col1"
                         "col2 col2";
  }
  
`;

export const AboutSectionWrapper2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 24px 0 24px;
  grid-template-areas: "col1 col2";
  
  @media screen and (max-width: 768px){
    padding: 150px 50px 0 50px;
    min-height: auto;
    grid-template-areas: "col2 col2"
                         "col1 col1";
  }
  
`;

export const AboutPart = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const AccordionPart = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  justify-content: flex-end;
`;

export const AboutTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 36px;
    text-align: center;
  }
`;

export const AboutDescription = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;