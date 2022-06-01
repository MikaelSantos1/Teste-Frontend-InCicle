import React, { useState } from "react";
import {
    Container,
    Title,
    Text,
    Button,

} from "./styles";

interface EndomarketingPopupProps {
    title: string;
    text: string;
    buttonText: string
}

export function EndomarketingPopup({ title, text, buttonText }: EndomarketingPopupProps) {

    const [dissmis, setDismiss] = useState(false)

    if (!dissmis) {
        return (
            <Container>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Button onClick={() => setDismiss(true)}>{buttonText}</Button>
            </Container>
        )
    } else {
        return (
            <>
            </>
        )
    }

}