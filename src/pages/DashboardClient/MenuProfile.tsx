import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cardImage from "../../assets/images/cardImage.svg";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Box, Button, Modal, ListItemIcon } from "@mui/material";
import { useHistory } from "react-router-dom";
import UpdateClient from "./updateClient";
import { useAuth } from "../../providers/Auth";

const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const history = useHistory();
  const { signOut } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    signOut();
    history.push("/");
  };
  const handleModal = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    bgcolor: "rgba(0, 0, 0, 0.5)",
    border: "2px solid #000",
    boxShadow: 24,
    heigth: "100vh",
  };

  return (
    <>
      <div className="divMenu2">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={cardImage} alt="headerImage" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleModal}>
            <ListItemIcon>
              <FaUserCircle />
            </ListItemIcon>
            Minha conta
          </MenuItem>

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <FaSignOutAlt />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>

      <Modal open={openModal}>
        <Box sx={style}>
          <UpdateClient setOpenModal={setOpenModal} />
        </Box>
      </Modal>
    </>
  );
};

export default MenuProfile;
