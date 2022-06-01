
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonRemoveProps {
    handleRemoveCard: (cardID: number | string) => void;
    id: number | string;
    w: number;
    h: number;
    bgColor: string;
    small?: boolean;
}

export function ButtonRemove({ handleRemoveCard, id, bgColor, h, w, small, ...rest }: ButtonRemoveProps) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {

        setAnchorEl(null);
    };
    const removeItem = () => {
        handleRemoveCard(id)
        setAnchorEl(null);
    }
    return (
        <>
            <ButtonContainer
                {...rest}
                small={small ? 1 : 0}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ width: w, height: h, background: bgColor }}
            >
                <div></div>
                <div></div>
                <div></div>

            </ButtonContainer>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={removeItem}>Excluir item</MenuItem>

            </Menu>
        </>
    )
}