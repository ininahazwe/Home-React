import styled from 'styled-components';

export const ImgEdition = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin: 10px;
  
    @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
    }
`
export const EditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .3s ease;
  
  &:hover:before{
      top: -10px;
      }
  
  &:before{
      content: '';
      width: 200px;
      height: 200px;
      border: 2px solid whitesmoke;
      z-index: -1;
      position: absolute;
      top: 40px;
      border-radius: 50%;
      
       @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
    }
  }
`

export const EditionBigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-wrap: wrap;
  grid-area: col2;
  
`
//post

export const EditionPageImage = styled.img`
  object-fit: cover;
  height: 80vh;
  max-width: 100%;
  overflow: auto;

  @media screen and (max-width: 960px) {
    height: 300px;
    width: 100%;
    top: 0;
  }
  
  @media screen and (max-width: 768px) {
        height: 150px;
    }
`

export const EditionH1 = styled.h1`
  text-align: center;
  margin: 50px;
  
  @media screen and (max-width: 768px) {
        margin: 25px;
    }
`

export const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;  
  
  @media screen and (max-width: 768px) {
        z-index: 2;
    }
`

export const SideText = styled.div`
  padding: 20px 60px;
`

export const EditionContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: center;
   align-items: flex-start;
   
   @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        gap: 0px;
      
    }
`