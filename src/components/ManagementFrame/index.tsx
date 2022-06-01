import React, { useEffect, useState } from "react";
import { apiManagement } from "../../services/managementApi";
import { ButtonRemove } from "../ButtonRemove";
import WorldICon from '../../assets/worldIcon.png'
import {
    Container,
    Title,
    ManagementFrameCard,
    Header,
    BoardImages,
    Image,
    Content,
    Icon
} from "./styles";

interface ManagementFrameProps {
    title: string;
}
interface DataManagement {
    title: string
    resume_files: [{
        file: string
    }]
}
export function ManagementFrame() {
    const [management, setManagement] = useState<DataManagement[]>([])
    useEffect(() => {
        const fetchManagementData = async () => {
            const { data } = await apiManagement.get("");

            const managementData = data.data[0].boards
            setManagement(managementData)
        };
        fetchManagementData()
    }, [])
    function handleRemoveCard(title: any) {
        const data = management.filter((data) => data.title !== title);
        setManagement(data);
    }

    console.log(management)
    return (
        <Container>
            <Title>Quadros de Gestão à Vista</Title>
            {
                management &&
                management.map((management, i) => (

                    <ManagementFrameCard key={i}>
                        <Header>
                            <p>{management.title}</p>
                            <Content>
                                <Icon>
                                    <img src={WorldICon} alt="Icone do globo" />
                                </Icon>
                                <ButtonRemove
                                    w={16}
                                    h={16}
                                    bgColor="#FFFF"
                                    handleRemoveCard={handleRemoveCard}
                                    id={management.title}
                                    small={true}
                                />
                            </Content>
                        </Header>
                        <BoardImages>
                            {management.resume_files.map((file) =>
                                <Image src={file.file} alt="foto" key={file.file} />
                            )
                            }
                        </BoardImages>

                    </ManagementFrameCard>
                ))
            }
        </Container>
    )
}