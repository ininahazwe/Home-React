import styled from 'styled-components';

export  const PartnersCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
`;

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  margin: 5px;
  flex-wrap: wrap;
`;

export const PartnerH2 = styled.h2`
  color: var(--color4);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease;
  
  &:hover{
    filter: grayscale();
  }
  
  @media screen and (max-width: 768px){
    width: 80px;
    height: 80px;
  }
`;