import styled from "styled-components";

export const Container=styled.div`
    width: 100%;
    height: 309px;
    background-color:${({theme})=>theme.colors.brown_light};
    padding:21px;
    border: 1px solid #DCD1C0;
    margin-bottom:18px;
    max-width: 279px;

`

export const Title= styled.h4`
  color:${({theme})=>theme.colors.text};
  font-weight:${({theme})=>theme.fonts.bold};
  font-size: 14px;
`

export const Text= styled.p`
  color:${({theme})=>theme.colors.text};
  font-weight:${({theme})=>theme.fonts.regular};
  font-size: 14px;
`

export const Button= styled.button`
   width: 112px;
   height: 37px;
   background-color:transparent;
   border: 1px solid ${({theme})=>theme.colors.text} ;
   border-radius:4px;

   margin-top:40px;
   transition: background-color .2s ease;
   &:hover{
    background-color: rgba(0, 0, 0, .1);
   }
`
