import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContent, Avatar, UserInfo, UserInfoContainer } from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface InvitedPeopleModalProps {
  invited_people?: [
    {
      id: number;
      name: string;
      confirmed_presence: boolean;
      avatar: string;
      username: string;
    }
  ];
  handleClose: any;
  open: any;
}

export function InvitedPeopleModal({
  open,
  handleClose,
  invited_people,
}: InvitedPeopleModalProps) {
  console.log();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {invited_people &&
            invited_people?.map((invitedPeople) => {
              return (
                <ModalContent key={invitedPeople.name}>
                  <Avatar src={invitedPeople.avatar} />
                  <UserInfoContainer>
                    <UserInfo>Nome: <strong>{invitedPeople.name}</strong></UserInfo>
                    <UserInfo>Username: <strong>{invitedPeople.username}</strong></UserInfo>
                    <UserInfo>Usuário confirmado? <strong> {invitedPeople.confirmed_presence ? 'SIM' : 'NÃO'}</strong>  </UserInfo>
                  </UserInfoContainer>
                </ModalContent>
              );
            })}
        </Box>
      </Modal>
    </div>
  );
}
