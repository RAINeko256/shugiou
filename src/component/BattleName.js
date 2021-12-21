/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

function BattleName(props) {
  return (
    <div
      className={css({
        background:
          "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(42px)",
        borderRadius: "125px",
      })}
    >
      <h4
        className={css({
          margin: "0%",
          fontFamily: "Noto Sans JP",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "144px",
          lineHeight: "209px",
          alignItems: "center",
          textAlign: "center",

          color: "#000000",
          TextStroke: "4px #FFFFFF",
          WebkitTextStroke: "4px #FFFFFF",
        })}
      >
        {props.children}
      </h4>
    </div>
  );
}

export default BattleName;
