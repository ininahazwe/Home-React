import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    height: auto;
    padding: 3vh;
  }
  
  @media screen and (max-width: 768px){
    height: auto;
    padding: 50px 50px;
  }
  @media screen and (max-width: 480px){
    height: auto;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: center;
  grid-gap: 16px;
  padding: 0 120px;

  @media screen and (max-width: 640px){
    padding: 0;
  }
`;

export  const ServicesCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 190px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);  
  transition: all 0.2s ease-in-out;
  position: relative;
  background: var(--color2);
  overflow: hidden;
   
  &:hover{
    transform: scale(1.02);
    cursor: pointer;
  } 
  &:hover h2{
    opacity: 0;
  }
  &:hover p{
    transform: translateY(0px);
  }
  &:hover img{
    opacity: 0.5;
  }
  
  @media screen and (max-width: 768px){
    width: 250px;
    height: 150px;
    margin: auto;
  }
`;

export const ServicesIcon = styled.img`
  width: 100%;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--color4);
  margin-bottom: 64px;
  
  @media screen and (max-width: 768px){
    font-size: 2rem;
    text-align: left;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 0.8rem;
  color: var(--color3);
  text-transform: uppercase;
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  background: var(--color1);
  padding: 8px;
  text-align: center;
`;

export const ServicesDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 30px;
  color: var(--color3);
  transform: translateY(180px);
  position: absolute;
  transition: all 0.3s ease;
`;

//Project

export const ProjectAbstract = styled.p`
  font-style: italic;
  font-weight: 300;
`;

export const ProjectContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  padding: 100px 60px;
  
  @media screen and (max-width: 960px){
    height: auto;
    grid-template-columns: 1fr;
  }
`

export const ProjectImage = styled.img`
  width: 300px;
  height: 80vh;
  object-fit: cover;
  
  @media screen and (max-width: 960px){
    width: 100%;
    height: 150px;
  }
`

export const Content = styled.div`
  column-count: 2;
  column-fill: auto;
  height: 43vh;
  overflow: auto;
  position:relative;
  
  :&before{
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
      content: '';
      height: 10px;
      position: absolute;
      background: linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,1));
    }
  
  @media screen and (max-width: 960px){
    column-count: 1;
    padding-top: 0;
  }
`

export const DivClose = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  background: var(--color1);
  z-index: 99;

  @media screen and (max-width: 960px){
    
  }
  
  &:hover{
    opacity: 1;
  }  
  &:before, &:after{
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
`




