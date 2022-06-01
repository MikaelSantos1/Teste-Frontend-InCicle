import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { EndomarketingPopup } from "../../components/EndomarketingPopup";
import { FilterButton } from "../../components/FillterButton";
import { ManagementFrame } from "../../components/ManagementFrame";
import { api } from "../../services/api";
import { apiManagement } from "../../services/managementApi";
import { Data } from "./IData";
import {
  Container,
  Main,
  Header,
  ButtonContainer,
  Button,
  Aside
} from "./styles";

export function Dashboard() {

  const [data, setData] = useState<Data[]>([]);
  const [filterdData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("");
      setData(data.data);
      setFilteredData(data.data);
    };

    fetchData();

  }, []);

  function filterData(type: string) {
    if (type === "all") {
      setFilteredData(data);
    } else {
      console.log(type);
      const newDataFiltered = data.filter((data) => data.type === type);
      console.log(newDataFiltered);
      setFilteredData(newDataFiltered);
    }
  }
  function handleRemoveCard(id: number | string) {
    const data = filterdData.filter((data) => data.id !== id);
    setData(data);
    setFilteredData(data);
  }
  return (
    <Container>
      <Main>
        <Header>
          <h1>Endomarketing</h1>
          <ButtonContainer>
            <FilterButton
              title="Tipo"
              labelEventCheckBox="Eventos"
              labelPublicationCheckBox="Publicações"
              labelreleaseBox="Comunicados"
              filterData={filterData}
            />
            <Button>
              Criar <span>+</span>
            </Button>
          </ButtonContainer>
        </Header>
        {filterdData &&
          filterdData.map((data) => (
            <Card
              id={data.id}
              key={data.id}
              title={data.title}
              type={data.type}
              info={data.info}
              invited_people={data.invited_people}
              text={data.description}
              image={data.file.url}
              handleRemoveCard={handleRemoveCard}
            />
          ))}
      </Main>
      <Aside>
        <EndomarketingPopup
          title="Endomarketing"
          text="Endomarketing está relacionado às
            ações de treinamento ou qualificação
            dos colaboradores da empresa
            visando um melhor serviço para o
            cliente. Marketing interno, devido ao
            nome, é usualmente confundido com
            Endomarketing mesmo sendo
            conceitos diferentes."
          buttonText="DISPENSAR"
        />
        <ManagementFrame

        />
      </Aside>
    </Container>
  );
}
