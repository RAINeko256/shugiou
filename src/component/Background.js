/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"

function Background(props){
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
      {props.children}
    </div>
  )
}

export default Background