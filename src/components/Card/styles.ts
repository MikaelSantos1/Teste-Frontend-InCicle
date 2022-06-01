import styled, { css } from "styled-components";

interface Type{
    type:string
}
export const Container= styled.div`
    width:100%;
    background-color:${({theme})=>theme.colors.primary_color};   
    height: 93px;
    padding:11px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    @media(max-width:1200px){
        display:flex;
      
        justify-content:space-around;
        align-items:center;
        height:auto;
    }
`

export const CardContainer= styled.div`
    margin-left:16px;
`

export const Description= styled.p`
    font-weight:${({theme})=>theme.fonts.regular};   
    font-size: 9px;
    color:${({theme})=>theme.colors.text};  
    line-height: 12px;
    padding:4px;
`
export const InvitedPeople = styled.span`

    font-weight:${({theme})=>theme.fonts.regular};   
    font-size: 12px;
    color:#3489B1;
    text-decoration:underline;
    line-height: 12px;
    padding:4px;

`

export const Type= styled.p<Type>`
    font-weight:${({theme})=>theme.fonts.regular};   
    font-size: 9px;
    color:${({theme})=>theme.colors.text};  
    line-height: 12px;
    padding:4px;

    ${({ type }) => type === 'event' && css`
     color: '#333333';
     font-weight:${({theme})=>theme.fonts.bold}; 
     background: #EE8686;  
     `};

     ${({ type }) => type === 'publication' && css`
     color:${({ theme }) => theme.colors.primary_color};
     font-weight:${({theme})=>theme.fonts.bold};  
     background-color:${({ theme }) => theme.colors.text}; 
     `};

     ${({ type }) => type === 'release' && css`
     color:${({ theme }) => theme.colors.primary_color};
     font-weight:${({theme})=>theme.fonts.bold};  
     background: #3489B1;  
     `};
   
`
export const Image= styled.div`
    min-width: 73px;
    min-height: 73px;

    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width:73px;
        height:73px;
    }
`

export const Title=styled.h3`
    font-size:16px;
    font-weight:${({theme})=>theme.fonts.bold};   
    color:${({theme})=>theme.colors.text};  
`

export const DescriptionContainer=styled.div`
    display:flex;
    gap:5px;
    span{
        font-size:9px;
    }
`

export const Text=styled.p`
    font-size:13px;
    font-weight:${({theme})=>theme.fonts.regular};   
    color:${({theme})=>theme.colors.text};  
`
export const Wrapper=styled.div`
    display:flex;
    flex:1;
`