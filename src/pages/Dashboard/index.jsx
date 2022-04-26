import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import ModalNewTech from "../../components/ModalNewTech";
import ModalUpdateTech from "../../components/ModalUpdateTech";
import api from "../../services/api";
import {
  ContainerHeader,
  ContainerUser,
  ContentHeader,
  ParenteContainer,
  TechContainer,
  TechsContainer,
} from "./styles";

const Dashboard = ({ authenticated, userName, userToken }) => {
  const [userTechs, setUserTechs] = useState(userName.techs);
  const [newTechModalIsOpen, setNewTechModalIsOpen] = useState(false);
  const [updateTechModalIsOpen, setUpdateTechModalIsOpen] = useState(false);
  const [techID, setTechID] = useState("");
  const [techTitle, setTechTitle] = useState("");

  useEffect(() => userInfo(), []);

  const userInfo = () => {
    api
      .get(`/users/${userName.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setUserTechs(response.data.techs);
        setNewTechModalIsOpen(false);
      });
  };

  const history = useHistory();

  const hadleNavigation = () => {
    localStorage.clear();
    return history.go(0);
  };

  const handleTech = async (tech_id, title) => {
    await setTechID(tech_id);
    await setTechTitle(title);
    await setUpdateTechModalIsOpen(true);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <ParenteContainer>
      <ContainerHeader>
        <h2>Kenzie Hub</h2>
        <Button
          colorSchema="--grey2"
          colorSchemaHover="--grey1"
          onClick={() => hadleNavigation()}
        >
          Sair
        </Button>
      </ContainerHeader>
      <ContainerUser>
        <h1>Olá, {userName.name}!</h1>
        <span>{userName.course_module}</span>
      </ContainerUser>
      <ContentHeader>
        <h2>Tecnologias</h2>
        <Button
          colorSchema="--grey2"
          colorSchemaHover="--grey1"
          onClick={() => setNewTechModalIsOpen(true)}
        >
          +
        </Button>
        <ModalNewTech
          open={newTechModalIsOpen}
          close={() => setNewTechModalIsOpen(false)}
          userToken={userToken}
          userInfo={userInfo}
        />
      </ContentHeader>
      <TechsContainer>
        {userTechs.map((tech) => {
          return (
            <>
              <TechContainer
                onClick={(e) => handleTech(e.target.id, e.target.title)}
                id={tech.id}
                title={tech.title}
              >
                <h3>{tech.title}</h3>
                <span>{tech.status}</span>
              </TechContainer>
              <ModalUpdateTech
                tech_id={techID}
                title={techTitle}
                open={updateTechModalIsOpen}
                close={() => setUpdateTechModalIsOpen(false)}
                userToken={userToken}
                userInfo={userInfo}
              />
            </>
          );
        })}
      </TechsContainer>
    </ParenteContainer>
  );
};

export default Dashboard;