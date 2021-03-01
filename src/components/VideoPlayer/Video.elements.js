import styled from 'styled-components';

export const VideoWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 100px 0;
  
  iframe{
    @media screen and (max-width: 768px) {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
   
    @media screen and (max-width: 768px) {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;     
    }
`