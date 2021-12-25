/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'

function Title(props) {
  return (
    <h1
      className={css({
        margin: '0%',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: `${props.fontSize}px`,
        lineHeight: `${props.fontSize +20}px`,
        alignItems: 'center',
        textAlign: 'center',

        color: '#000000',
        TextStroke: `${props.noStroke ? '':'4px #FFFFFF'}`,
        WebkitTextStroke: `${props.noStroke ? '':'4px #FFFFFF'}`,
      })}
    >
      臭戯王
    </h1>
  )
}

export default Title
