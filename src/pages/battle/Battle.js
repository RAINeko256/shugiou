/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'

import * as React from 'react'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

import Background from '../../component/Background'
import Title from '../../component/Title'
import BattleName from './component/BattleName'
import mqtt from 'mqtt-browser'

//名前とゲージなどを入れるためのLayoutコンポーネント
function BattlerDataBox(props) {
  return (
    <Box
      sx={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {props.children}
    </Box>
  )
}

//LinearProgressの幅を変更するためのカスタム
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
}))

function PointGauge(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <CustomLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

function Battle() {
  const [nameA, setNameA] = React.useState('')
  const [pointA, setPointA] = React.useState(0.0)
  const [nameB, setNameB] = React.useState('')
  const [pointB, setPointB] = React.useState(0.0)

  const MQTTOptions = {
    port:	process.env.REACT_APP_WSPORT,
    username:process.env.REACT_APP_USERNAME,
    password:process.env.REACT_APP_PASSWORD,
  }
  const client = mqtt.connect('wss://driver.cloudmqtt.com',MQTTOptions);

  const onMessageCallback = (topic,payload,packet)=>{
    const body = JSON.parse(payload.toString())
    console.log(nameA,nameB,pointA,pointB)
    console.log(body)
   
    const playerName = body.name.toString();
    const smell = parseInt(body.value)
    if(!Number.isNaN(smell)){
      if(smell === 100){//試合終了
        client.end()
        //TODO:ホーム画面に戻る by Raineko
      }else if(nameA === ''){//まだどのクライアントも接続していない
        setNameA(playerName);
        console.log('nameA set')
      }
      else if(nameA === playerName){  
        setPointA(smell);
        console.log('pointA set')
      }else if(nameB === ''){//クライアントが1台だけ接続されている
        setNameB(playerName);
        console.log('nameB set')
      }else if(nameB === playerName){
        setPointB(smell)
        console.log('pointB set')
      }
    }
  }

  client.on('message',onMessageCallback);
  const topic = 'smell'; //TODO:import topic with Redux by RAINeko
  
 
  React.useEffect(() => {
    client.on('connect',()=>{
      client.subscribe(topic,{qos:2});
    })
  }, [])//We need to subscribe just once,so hand over blank array.

  return (
    <Background>
      <Title />
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
        <BattlerDataBox>
          <BattleName>{nameA}</BattleName>
          <PointGauge value={pointA} />
        </BattlerDataBox>
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
        <BattlerDataBox>
          <BattleName>{nameB}</BattleName>
          <PointGauge value={pointB} />
        </BattlerDataBox>
      </div>
    </Background>
  )
}

export default Battle
