import styled from 'styled-components';
import bg from '../../images/rwanda2.jpg';

export const BigTitle = styled.h1`
  font-size: 12rem;
  font-weight: 900;
  background-image: url(${bg});
  background-position: center;
  background-attachment: fixed;
   -webkit-background-clip: text;
  color: transparent;
  
  @media screen and (max-width: 768px){
    font-size: 4.5rem;
    text-align: left;
  }
  
`
export const SmallTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
`

export const Description = styled.p`
  text-align: justify;
`

export const ImageGrande = styled.img`
  border-radius: 10px;
  width: 300px;
  height: auto;
  margin: auto;
  display: block;
  
  @media screen and (max-width: 768px){
    width: 250px;
  }
`

export const ImagePetite = styled.img`
  border-radius: 10px;
  width: 150px;
  height: auto;
  margin: 30px 0;
  float: right;
`
export const Player = styled.div`
  width: 480px;
`