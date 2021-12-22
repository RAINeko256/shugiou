/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'

function Title() {
  return (
    <h1
      className={css({
        margin: '0%',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '144px',
        lineHeight: '209px',
        alignItems: 'center',
        textAlign: 'center',

        color: '#000000',
        TextStroke: '4px #FFFFFF',
        WebkitTextStroke: '4px #FFFFFF',
      })}
    >
      臭戯王
    </h1>
  )
}

export default Title
