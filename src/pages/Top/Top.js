/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

import * as React from "react";

import { withRouter } from "react-router"
import { Link} from "react-router-dom";


import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import GlassButton from "./component/GlassButton";
import Background from "../../component/Background";
import Title from "../../component/Title";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EnterModal(props) {
  let text='' //textfield用の一時変数 使わない
  const [topic,setTopic]=React.useState('')
  const [isInputTopic,setIsInputTopic]=React.useState(false)
  const handleButtonClick=()=>{
    if(topic){
      props.history.push({
        pathname: '/battle',
        state:{topic:topic}
      })
    }else{
      console.log("入力してね")

    }
  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-helperText"
            label="あいことば"
            value={topic || ''}
            onChange={(event)=> setTopic(event.target.value)}
          />
          {/*
            isInputTopic
          ?  <Link to={{ pathname: "/battle", state: { topic: topic } }}>
            <Button variant="contained">参加する</Button>
          </Link>
          : <Button variant="contained" disabled>参加する</Button>
          */}
          <Button variant="contained" onClick={()=>handleButtonClick()}>参加する</Button>
        </Box>
      </Modal>
    </div>
  );
}

function Top() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const handleOpen = () => setModalOpened(true);
  const handleClose = () => setModalOpened(false);
  return (
    <Background>
      <Title />
      {/**参戦する、観戦するボタン2つのコンテナ */}
      <EnterModal open={modalOpened} close={handleClose} />
      <div
        className={css({
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <GlassButton onClick={handleOpen}>参戦する</GlassButton>
        <GlassButton onClick={handleOpen}>観戦する</GlassButton>
      </div>
    </Background>
  );
}

export default Top
