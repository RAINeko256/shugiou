/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

import Background from "../../component/Background";
import Title from "../../component/Title";
import BattleName from "../../component/BattleName";

function Battle() {
  return (
    <Background>
      <Title />
      <div className={css({
        display:"flex"
      })}>
        <BattleName>plmwa</BattleName>
        <div className={css({})}>
          <h2
            className={css({
              color: "white",
            })}
          >
            VS
          </h2>
        </div>
        <BattleName>Chaha1n</BattleName>
      </div>
    </Background>
  );
}

export default Battle;
