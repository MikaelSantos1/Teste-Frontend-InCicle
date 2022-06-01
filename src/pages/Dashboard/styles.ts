import styled from "styled-components";

export const Container= styled.div`
    background-color:${({theme})=>theme.colors.background};
     height: calc(100vh - 55px ); 
    display:flex;
    justify-content:center;
    padding-top:34px;
    gap:32px;
    width:100vw;
    @media(max-width:1200px){
        height:100%;
        flex-direction:column;
        align-items:center;
    }
`
export const Main= styled.main`
    max-width:894px;
    width:100%;

    display:flex;
    align-items:center;
    
    flex-direction:column;
    gap:10px;

    @media(max-width:950px){
        max-width:80vw;
    }
    @media(max-width:390px){
        max-width:90vw;
    }
   
`
export const Header= styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    h1{
        font-size:35px;
        font-weight:${({theme})=>theme.fonts.regular};
        color:${({theme})=>theme.colors.text};
    }
    @media(max-width:650px){
       flex-direction:column;
       align-items:center;
    }
`

export const ButtonContainer= styled.div`
    display:flex;
    gap:8.5px;
    justify-content:center;
    align-items:center;
   
`
export const Button = styled.button`
     background-color:${({theme})=>theme.colors.blue};
     width: 103px;
     height: 38px;
     color:${({theme})=>theme.colors.primary_color};
     font-size:14px;
     font-weight:${({theme})=>theme.fonts.medium};

     display: flex;
     justify-content: space-around;
     align-items: center;

     border:none;
     border-radius:4px;
     span{
         font-size:18px;
         font-weight:${({theme})=>theme.fonts.bold};
     }
    
`
export const Aside = styled.aside`
    width: 279px;
    @media(max-width:1200px){
        display:flex;
        width:100%;
        max-width: 1000px;
        justify-content:space-evenly;
        align-items:center;
    }
    @media(max-width:650px){
       flex-direction:column;
    }
`