/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'

import * as React from 'react'
import { useNavigate } from 'react-router'

import store from '../../store/index'

import { Button } from '@mui/material'
import { Card, CardContent } from '@mui/material'
import { Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Background from '../../component/Background'
import Title from '../../component/Title'
import mqtt from 'mqtt-browser'

const Header = (props) => {
  return (
    <div
      className={css({
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
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
      <Title fontSize={80} noStroke={props.end} />
    </div>
  )
}

function Balloon(props) {
  const size = 200 + props.point * 8
  const navigate = useNavigate()
  const useStyles = makeStyles((theme) => ({
    burstEffect: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '50%',
      background:
        'radial-gradient(70.5% 70.5% at 38.63% 29.5%, rgba(196, 196, 196, 0) 16.15%, #C4C4C4 82.81%, #989797 100%), #FFFFFF',
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
  console.log(size)
  return (
    <div
      className={
        props.point === 100
          ? classes.burstEffect
          : css({
              minWidth: `${size}px`,
              minHeight: `${size}px`,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '50%',
              background:
                'radial-gradient(70.5% 70.5% at 38.63% 29.5%, rgba(196, 196, 196, 0) 16.15%, #C4C4C4 82.81%, #989797 100%), rgba(255,255,255,0.6)',
            })
      }
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.point === 100 ? (
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
                fontSize: '80px',
                lineHeight: '100px',
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
            fontSize: '30px',
            alignItems: 'center',
            textAlign: 'center',
          })}
        >
          {props.point}%
        </h3>
      </div>
      {props.point === 100 ? (
        <Button
          variant="contained"
          onClick={() => {
            navigate('/')
          }}
          sx={{
            position: 'absolute',
            right: `${props.btnPosition == 'right' ? '30%' : ''}`,
            left: `${props.btnPosition == 'left' ? '30%' : ''}`,
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
  const default_name = '対戦者を待っています...'
  const [nameA, setNameA] = React.useState(default_name)
  const [pointA, setPointA] = React.useState(0)
  const [nameB, setNameB] = React.useState(default_name)
  const [pointB, setPointB] = React.useState(0)

  const MQTTOptions = {
    port: process.env.REACT_APP_WSPORT,
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  }
  const client = mqtt.connect('wss://driver.cloudmqtt.com', MQTTOptions)
  console.log('client connect')

  const onMessageCallback = (topic, payload, packet) => {
    const body = JSON.parse(payload.toString())
    console.log(nameA, nameB, pointA, pointB)
    console.log(body)

    const playerName = body.name.toString()
    const smell = parseInt(body.value)
    if (!Number.isNaN(smell)) {
      if (smell === 100) {
        //試合終了
        client.end()
        //TODO:ホーム画面に戻る by Raineko
      } else if (nameA === '') {
        //まだどのクライアントも接続していない
        setNameA(playerName)
        console.log('nameA set')
      } else if (nameA === playerName) {
        setPointA(smell)
        console.log('pointA set')
      } else if (nameB === '') {
        //クライアントが1台だけ接続されている
        setNameB(playerName)
        console.log('nameB set')
      } else if (nameB === playerName) {
        setPointB(smell)
        console.log('pointB set')
      }
    }
  }

  client.on('message', onMessageCallback)
  const topic = store.getState().topic

  client.on('connect', () => {
    console.log('connnect')
  })
  React.useEffect(() => {
    client.subscribe(topic, { qos: 2 })
    console.log('useEffect')
  }, []) //We need to subscribe just once,so hand over blank array.

  return (
    <div
      className={css({
        //スクロールできないようにする
        position: 'fixed',
        top: '0px',
        bottom: '0px',
      })}
    >
      <Header topic={topic} end={pointA === 100 || pointB === 100} />
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
          <Balloon point={pointA} btnPosition="right">
            {nameA}
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
          <Balloon point={pointB} btnPosition="left">
            {nameB}
          </Balloon>
        </div>
      </Background>
    </div>
  )
}

export default Battle
