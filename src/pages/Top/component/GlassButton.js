/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"

const GlassButton = (props) => {
  return (
    <button
      className={css({
        width: "450px",
        height: "250px",
        background:
          "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(42px)",
        /* Note: backdrop-filter has minimal browser support */
        borderRadius: "16px",
        
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