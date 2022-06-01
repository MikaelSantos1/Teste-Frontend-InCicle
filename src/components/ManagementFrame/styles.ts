import styled from "styled-components";

export const Container= styled.div`
    
    background-color:${({theme})=>theme.colors.primary_color};
     padding:8px ;
    border-radius:4px;
    max-width: 279px;

`
export const Title=styled.h3`
    font-size:16px;
    color:${({theme})=>theme.colors.text};
    font-weight:${({theme})=>theme.fonts.bold};
    margin-bottom:11px;
`

export const ManagementFrameCard=styled.div`
  max-width: 262.08px;
  background: rgba(52, 137, 177, 0.1);
  margin:0 auto;
  padding:0px 6px 5px 4px;
  margin-bottom:12px;
  
`

export const Header=styled.header` 
    width:100%;
    display:flex;
    justify-content:space-between;
    p{
        font-size:13px;
        color:${({theme})=>theme.colors.text};
        font-weight:${({theme})=>theme.fonts.medium};
        padding-bottom:5px;
    }
`

export const BoardImages=styled.div`
    display:flex;
    gap:4px;
`

export const Image = styled.img`
width: 60px;
height: 60px;

`
export const Content = styled.div`
    display:flex;
   gap:3px;
`
export const Icon= styled.span`
    width: 16px;
    height: 16px;

    background-color:${({theme})=>theme.colors.primary_color};
    border-radius:50%;

    display:flex;
    justify-content:center;
    align-items:center;
    img{

    }
`