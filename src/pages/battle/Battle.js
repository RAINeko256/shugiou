/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/css'

import * as React from 'react'
import { useNavigate } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '@mui/material'
import { Card } from '@mui/material'
import { Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Background from '../../component/Background'
import Title from '../../component/Title'

const Header = (props) => {
  return (
    <div
      className={css({
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0)',
      })}
    >
      <Card
        sx={{
          position: 'absolute',
          left: '10%',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '10px',
          gap: '10px',
        }}
      >
        <p
          className={css({
            alignItems: 'center',
            fontSize: '20px',
          })}
        >
          この部屋のあいことば：
        </p>
        <Chip
          label={props.topic}
          sx={{
            height: '50px',
            fontSize: '20px',
          }}
        />
      </Card>
      <Title fontSize={80} noStroke={true} />
    </div>
  )
}

const MatchStartAlert = (props) => {
  const texts = []
  const windowHeight = document.documentElement.clientHeight
  const font_size = 60
  let j = 0
  const fadein = keyframes({
    'from, 0% to': {
      opacity: 1,
    },
    '100%': {
      opacity: 1,
    },
  })
  for (let i = 0; i < windowHeight; i += font_size) {
    texts.push(
      <>
        <h1
          className={css({
            position: 'absolute',
            top: `${i}px`,
            width: '100%',
            margin: '0%',
            fontFamily: 'Noto Sans JP',
            fontStyle: 'normal',
            fontSize: `${font_size}px`,
            lineHeight: `${font_size + 5}px`,
            alignItems: 'center',
            textAlign: 'center',
            opacity: 0,
            animation: `${fadein} 1s ease`,
            animationDelay: `${j}s`,
            color: 'rgba(0,0,0,0)',
            TextStroke: '3px #000',
            WebkitTextStroke: '2px #000',
            zIndex: 5,
          })}
        >
          Match Start
        </h1>
        <h1
          className={css({
            position: 'absolute',
            top: `${i}px`,
            width: '100%',
            margin: '0%',
            fontFamily: 'Noto Sans JP',
            fontStyle: 'normal',
            fontSize: `${font_size}px`,
            lineHeight: `${font_size + 5}px`,
            alignItems: 'center',
            textAlign: 'center',
            opacity: 0,
            animation: `${fadein} 1s ease`,
            animationDelay: `${j}s`,
            color: 'rgba(0,0,0,0)',
            TextStroke: '3px #FFF',
            WebkitTextStroke: '4px #FFF',
            zIndex: 4,
          })}
        >
          Match Start
        </h1>
      </>
    )
    j += 0.05
  }
  return <div>{texts}</div>
}

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function Balloon(props) {
  const size = 200 + props.point * 8
  const navigate = useNavigate()
  const winnerBgColor = '#ffb400'
  const winBg = ()=>{
    const rgb = hexToRgb(winnerBgColor)
    const a = `rgba(${Math.max(rgb.r - 59, 0)},${Math.max(
      rgb.g - 59,
      0
    )},${Math.max(rgb.b - 59, 0)},0)`
    const b = `rgba(${Math.max(rgb.r - 59, 0)},${Math.max(
      rgb.g - 59,
      0
    )},${Math.max(rgb.b - 59, 0)},1)`
    const c = `rgba(${Math.max(rgb.r - 72, 0)},${Math.max(
      rgb.g - 72,
      0
    )},${Math.max(rgb.b - 72, 0)},1)`

    return(
      {a:a,b:b,c:c}
    )
  }
  
  const useStyles = makeStyles((theme) => ({
    burstEffect: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '50%',
      background: `radial-gradient(70.5% 70.5% at 38.63% 29.5%, ${winBg().a} 16.15%, ${winBg().b} 82.81%, ${winBg().c} 100%), ${winnerBgColor}`,
      animation: `$burstAnime 2s`,
      animationFillMode: 'forwards',
    },
    '@keyframes burstAnime': {
      '0%': {
        minWidth: `${size * 1.1}px`,
        minHeight: `${size * 1.1}px`,
      },
      '5%': {
        minWidth: `${size * 1.3}px`,
        minHeight: `${size * 1.3}px`,
      },
      '10%': {
        minWidth: `${size * 1.5}px`,
        minHeight: `${size * 1.5}px`,
      },
      '15%': {
        minWidth: `${size * 1.7}px`,
        minHeight: `${size * 1.7}px`,
      },
      '20%': {
        minWidth: `${size * 1.9}px`,
        minHeight: `${size * 1.9}px`,
      },
      '25%': {
        minWidth: `${size * 2.1}px`,
        minHeight: `${size * 2.1}px`,
      },
      '30%': {
        minWidth: `${size * 2.3}px`,
        minHeight: `${size * 2.3}px`,
      },
      '100%': {
        minWidth: `${size * 2.5}px`,
        minHeight: `${size * 2.5}px`,
      },
    },
  }))
  const classes = useStyles()

  //https://www.colorhexa.com/ffb400
  const colorGrad = [
    '#ffffff',
    '#fff9eb',
    '#fff3d8',
    '#ffeec4',
    '#ffe8b1',
    '#ffe29d',
    '#ffdc89',
    '#ffd776',
    '#ffd162',
    '#ffcb4e',
    '#ffc53b',
    '#ffc027',
  ]
  let shadowColor1, shadowColor1clear, shadowColor2
  let j = 11 //colorGradの個数
  //ポイントを、0から11まで12段階に分け、段階ごとに色を超える
  for (let i = 88; i >= 0; i -= 8, j--) {
    //ポイントが基準値以上かどうか判断
    if (props.point >= i) {
      const rgb = hexToRgb(colorGrad[j])
      shadowColor1clear = `rgba(${Math.max(rgb.r - 59, 0)},${Math.max(
        rgb.g - 59,
        0
      )},${Math.max(rgb.b - 59, 0)},0)`
      shadowColor1 = `rgba(${Math.max(rgb.r - 59, 0)},${Math.max(
        rgb.g - 59,
        0
      )},${Math.max(rgb.b - 59, 0)},1)`
      shadowColor2 = `rgba(${Math.max(rgb.r - 72, 0)},${Math.max(
        rgb.g - 72,
        0
      )},${Math.max(rgb.b - 72, 0)},1)`
      break
    }
  }

  return (
    <div
      className={
        props.point >= 100
          ? classes.burstEffect
          : css({
              minWidth: `${size}px`,
              minHeight: `${size}px`,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '50%',
              background: `radial-gradient(70.5% 70.5% at 38.63% 29.5%, ${shadowColor1clear} 16.15%, ${shadowColor1} 82.81%, ${shadowColor2} 100%), ${colorGrad[j]}`,
            })
      }
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.point >= 100 ? (
          <>
            <h1
              className={css({
                margin: '0%',
                fontFamily: 'Noto Sans JP',
                fontStyle: 'normal',
                fontSize: '60px',
                lineHeight: '209px',
                alignItems: 'center',
                textAlign: 'center',

                color: '#FFF',
                TextStroke: '2px #000',
                WebkitTextStroke: '2px #000',
              })}
            >
              Winner
            </h1>
            <h1
              className={css({
                margin: '0%',
                fontFamily: 'Noto Sans JP',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '100px',
                lineHeight: '120px',
                alignItems: 'center',
                textAlign: 'center',

                color: 'rgba(0,0,0,0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                backgroundImage:
                  'radial-gradient(50% 50% at 50% 50%, #E57F20 0%, rgba(227, 90, 90, 0.75) 100%)',
              })}
            >
              {props.children}
            </h1>
          </>
        ) : (
          <h1
            className={css({
              margin: '0%',
              fontFamily: 'Noto Sans JP',
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '209px',
              alignItems: 'center',
              textAlign: 'center',

              color: '#000000',
            })}
          >
            {props.children}
          </h1>
        )}
        <h3
          className={css({
            margin: '0%',
            fontSize: '50px',
            alignItems: 'center',
            textAlign: 'center',
          })}
        >
          {props.point}%
        </h3>
      </div>
      {props.point >= 100 ? (
        <Button
          variant="contained"
          onClick={() => {
            navigate('/')
          }}
          sx={{
            position: 'absolute',
            right: `${props.btnPosition === 'right' ? '25%' : ''}`,
            left: `${props.btnPosition === 'left' ? '25%' : ''}`,
            zIndex:10
          }}
        >
          ホームに戻る
        </Button>
      ) : (
        <></>
      )}
    </div>
  )
}

function Battle() {
  const dispatch = useDispatch() //redux
  const topic = useSelector((state) => state.topicReducer)
  const client = useSelector((state) => state.mqttClientReducer)
  const player = useSelector((state) => state.playerReducer)

  const onMessageCallback = (topic, payload, packet) => {
    const body = JSON.parse(payload.toString())
    const name = body.name.toString()
    const smellPoint = parseInt(body.value)
    if (!Number.isNaN(smellPoint)) {
      dispatch({ type: 'SET_PLAYER_DATA', name: name, point: smellPoint })
      if (smellPoint >= 100) {
        //試合終了
        client.end()
        dispatch({ type: 'CLEAR_PLAYER_DATA'})
      }
    } else {
      console.log('smell point is not number')
    }
  }

  React.useEffect(() => {
    client.subscribe(topic, { qos: 2 })
    console.log('subscribe in use effect')
    client.on('message', onMessageCallback)
    console.log('callback is set')
  }, [])

  console.log(player.nameA)
  return (
    <div
      className={css({
        //スクロールできないようにする
        position: 'fixed',
        top: '0px',
        bottom: '0px',
      })}
    >
      <Header
        topic={topic}
        end={player.pointA >= 100 || player.pointB >= 100}
      />
      {player.pointA || player.pointB ? <MatchStartAlert /> : <></>}
      <Background>
        <div
          className={css({
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '1rem',
          })}
        >
          <Balloon point={player.pointA} btnPosition="right">
            {player.nameA}
          </Balloon>
          <div className={css({})}>
            <h2
              className={css({
                color: 'white',
                fontSize: '60px',
              })}
            >
              VS
            </h2>
          </div>
          <Balloon point={player.pointB} btnPosition="left">
            {player.nameB}
          </Balloon>
        </div>
      </Background>
    </div>
  )
}

export default Battle
