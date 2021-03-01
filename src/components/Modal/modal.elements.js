import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  top: 70px;
  right: 120px;
  width: 79vw;
  height: 80vh;
  background: whitesmoke;
  z-index: 10;
  
  @media screen and (max-width: 960px){
    right: 84px;
    top: 100px;
    height: auto;
    padding-bottom: 10vh;
  }

  @media screen and (max-width: 768px){
    right: 38px;
  }
`;

export const CloseIcon = styled.button`
  color: var(--color1);
  margin: 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 400;
  border: none;
  background: white;
  padding: 10px;
  border-radius: 50%;
  
  &:hover{
    opacity: 0.8;
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
  @media screen and (max-width: 768px){
    border-radius: 0%;
    padding: 5px;
  }
`;
