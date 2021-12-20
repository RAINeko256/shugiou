/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"

import GlassButton from "./component/GlassButton"

const Top=()=>{
  return(
    <div
      className={css({
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(50% 50% at 50% 50%, #E57F20 0%, rgba(227, 90, 90, 0.75) 100%)",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center"
      })}
    >
      <h1
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
          TextStroke:"4px #FFFFFF",
          WebkitTextStroke: "4px #FFFFFF",
        })}
      >
        臭戯王
      </h1>
      {/**参戦する、観戦するボタン2つのコンテナ */}
      <div className={css({
        width:"100%",
        display:"flex",
        justifyContent:"space-around"
      })}>
      <GlassButton>
        参戦する
      </GlassButton>
      <GlassButton>
        観戦する
      </GlassButton>
      </div>
    </div>
  )
}

export default Top