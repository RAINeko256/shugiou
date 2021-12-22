/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

import Background from "../../component/Background";
import Title from "../../component/Title";
import BattleName from "./component/BattleName";

//名前とゲージなどを入れるためのLayoutコンポーネント
function BattlerDataBox(props) {
  return (
    <Box
      sx={{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {props.children}
    </Box>
  );
}

//LinearProgressの幅を変更するためのカスタム
const CustomLinearProgress = styled(LinearProgress)(({theme})=>({
  height:20,

}))

function PointGauge(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <CustomLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Battle() {

  const [userA,setUserA] = React.useState(0.0)
  const [userB,setUserB] = React.useState(0.0)

  //デモのためにゲージの量を変更させるやつ
  //今後削除する
  React.useEffect(() => {
    const timer = setInterval(() => {
      setUserA((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Background>
      <Title />
      <div
        className={css({
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
        })}
      >
        <BattlerDataBox>
          <BattleName>userA</BattleName>
          <PointGauge value={userA} />
        </BattlerDataBox>
        <div className={css({})}>
          <h2
            className={css({
              color: "white",
              fontSize:"60px"
            })}
          >
            VS
          </h2>
        </div>
        <BattlerDataBox>
          <BattleName>userB</BattleName>
          <PointGauge value={userB} />

        </BattlerDataBox>
      </div>
    </Background>
  );
}

export default Battle;
