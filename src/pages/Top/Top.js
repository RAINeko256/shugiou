/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"

import { Link } from "react-router-dom"

import GlassButton from "./component/GlassButton"
import Background from "../../component/Background"
import Title from "../../component/Title"

function Top() {
  return (
    <Background>
      <Title/>
      {/**参戦する、観戦するボタン2つのコンテナ */}
      <div
        className={css({
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <GlassButton>参戦する</GlassButton>
        <GlassButton>観戦する</GlassButton>
      </div>
    </Background>
  );
}

export default Top;
