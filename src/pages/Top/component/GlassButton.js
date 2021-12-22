/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"

const GlassButton = (props) => {
  return (
    <button
      className={css({
        width: "450px",
        height: "250px",
        background:"rgba( 255, 0, 0, 0.2 )",
        boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter:"blur( 5px )",
        WebkitBackdropFilter:"blur( 5px )",
        borderRadius:"10px",
        border:"1px solid rgba( 255, 255, 255, 0.18 )",
        "&:active":{
          boxShadow:"inset 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        },
        
        fontFamily:"Noto Sans JP",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:"80px",
        color:"#FFF",
        lineHeight:"116px",
        textAlign:"center",
      })}
    >
      {props.children}
    </button>
  )
}

export default GlassButton