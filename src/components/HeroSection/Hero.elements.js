import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export const HeroContainer = styled.div`
  background: var(--color3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px){
    height: 700px;
  }
  
  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.1;
  filter: invert();
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
   @media screen and (max-width: 768px){
    padding: 8px 40px;
  }
`;

export const HeroH1 = styled.h1`
  color: var(--color4);
  font-size: 3rem;
  line-height: 3rem;
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const HeroDate = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  text-align: center;
  margin: 1rem;
`;

export const HeroHashTag = styled.span`
  font-weight: 600;
  
  &:before{
    content: '#';
    color: var(--color1);
  }
`

export const HeroP = styled.p`
  color: var(--color4);
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 100;
  
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  @media screen and (max-width: 480px){
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;