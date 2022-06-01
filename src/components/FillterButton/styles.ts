import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

export const ButtonFilter = styled(Button)`
    background-color:white;
    color:black;
    border: 1px solid #B4B4B4;
    width: 95px;
    height: 38px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const MenuList= styled(Menu)`
ul{
    display:flex;
    flex-direction:column;
}
   

`