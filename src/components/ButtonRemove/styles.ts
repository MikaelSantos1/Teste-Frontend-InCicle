import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

interface Props {
  small?: boolean | number;
}

export const ButtonContainer = styled(IconButton)<Props>`
  background: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: ${({ small }) => (small ? "3px" : "5px")};
    height: ${({ small }) => (small ? "3px" : "5px")};
    border-radius: 50%;
    background: #707070;
    padding: ${({ small }) => (small ? "2px" : "3px")};
    margin-right: 1px;
  }
`;
