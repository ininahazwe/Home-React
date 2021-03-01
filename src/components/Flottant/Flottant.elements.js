import styled from 'styled-components';
import {FaFacebook, FaInstagram, FaPen, FaTwitter} from 'react-icons/fa';

export const Reseaux = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 35% ;
  left: 1%;
  z-index: 10;
  animation: slide-out 2s forwards;

  @keyframes slide-out {
    0% { left: -5%; }
    100% { left: 1%; }
  }
`;

export const Trait = styled.div`
   border: 1px dotted var(--color1);
   transform: rotate(90deg);
   width: 50px;
   margin: 3rem 0;
`;

export const IconFacebook = styled(FaFacebook)`
  color: var(--color1);
  margin: 0.3rem;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
`;

export const IconTwitter = styled(FaTwitter)`
  color: var(--color1);
  margin: 0.3rem;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
`;

export const IconInstagram = styled(FaInstagram)`
  color: var(--color1);
  margin: 0.3rem;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 35% ;
  right: 1%;
  z-index: 3;
  animation: slide-in 2s forwards;

  @keyframes slide-in {
    0% { right: -5%; }
    100% { right: 1%; }
  }
`;


export const IconContact = styled(FaPen)`
  color: var(--color1);
  margin: 0.3rem;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.2);
    transition: 0.3s all ease;
  }
`;