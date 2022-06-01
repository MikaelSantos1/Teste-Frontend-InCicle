import React from "react";
import {
    Container,
    Logo
} from './styles'
import LogoImg from '../../assets/logo.png'
export function Header() {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="logo" />
            </Logo>

        </Container>
    )
}