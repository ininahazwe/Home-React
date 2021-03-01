import styled from 'styled-components';

export  const PartnersCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
`;
export const PartnersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`
export const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;  
  background: #FBFCF7;
  margin: 5px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 960px){
    width: 180px;
    height: 180px;
  }
  
  @media screen and (max-width: 768px){
    width: 150px;
    height: 150px;
  }
  
  &:hover{
    background: var(--color1);
  }
`;

export const PartnerH2 = styled.h2`
  color: var(--color4);
  font-size: 1rem;
  font-weight: 400;
`;

export const PartnerIcon = styled.img`
  width: 150px;
  transition: all 0.3s ease-in-out;
  
  @media screen and (max-width: 768px){
    width: 120px;
  }
  
  &:hover{
    filter: grayscale();
    transform: scale(0.8);
  }
`;