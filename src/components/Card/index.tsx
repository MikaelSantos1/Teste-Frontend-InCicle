import React, { useState } from "react";
import { InvitedPeopleModal } from "../InvitedPeopleModal";
import { ButtonRemove } from "../ButtonRemove";
import {
    Container,
    CardContainer,
    Description,
    Image,
    Title,
    DescriptionContainer,
    Text,
    Type,
    Wrapper,
    InvitedPeople
} from "./styles";

interface CardProps {
    id: number;
    title: string;
    type: string;
    info: {
        date: string
        place: string
    }
    invited_people?: [{
        id: number
        name: string;
        confirmed_presence: boolean;
        avatar: string;
        username: string
    }];
    text: string;
    image: string;
    handleRemoveCard: (cardId: number | string) => void;

}

export function Card({
    id,
    info,
    invited_people,
    text,
    title,
    type,
    image,
    handleRemoveCard
}: CardProps) {
    const confirmatedPeople = invited_people?.filter((data) => data.confirmed_presence === true)

    function typeTranslate(type: string) {
        if (type === 'event') return 'Evento'
        if (type === 'release') return 'Comunicado'
        if (type === 'publication') return 'Publicação'
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <Container>
            <Wrapper>
                <Image>
                    <img src={image} alt="" />
                </Image>
                <CardContainer>

                    <Title>{title}</Title>
                    <DescriptionContainer>
                        <Type type={type}>{typeTranslate(type)} </Type>
                        <Description >{info.date} </Description>
                        {
                            confirmatedPeople &&
                            <>
                                <span>|</span>
                                <InvitedPeople onClick={handleOpen} >
                                    {confirmatedPeople?.length + ' confirmações de '}
                                    {invited_people?.length}
                                </InvitedPeople>
                            </>
                        }
                    </DescriptionContainer>
                    <Text>{text}</Text>
                </CardContainer>

            </Wrapper>
            <ButtonRemove
                w={24}
                h={24}
                bgColor="#DBDBDB"
                handleRemoveCard={handleRemoveCard}
                id={id}

            />
            <InvitedPeopleModal
                invited_people={invited_people}
                open={open}
                handleClose={handleClose}
            />
        </Container>
    )
}