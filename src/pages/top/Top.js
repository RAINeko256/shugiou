/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'

import * as React from 'react'

import { useNavigate } from 'react-router'

import store from '../../store/index'
import { useSelector, useDispatch } from 'react-redux'

import { Box, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import { makeStyles } from '@mui/styles'

import GlassButton from './component/GlassButton'
import Background from '../../component/Background'
import Title from '../../component/Title'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '10px 5px',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const useStyles = makeStyles((theme) => ({
  buttonEffect: {
    color: '#F00',
    animation: `$buttonAnime 2s`,
  },
  '@keyframes buttonAnime': {
    '0%': {
      transform: 'translate(2px, 0px)',
    },
    '5%': {
      transform: 'translate(-2px, 0px)',
    },
    '10%': {
      transform: 'translate(2px, 0px)',
    },
    '15%': {
      transform: 'translate(-2px, 0px)',
    },
    '20%': {
      transform: 'translate(2px, 0px)',
    },
    '25%': {
      transform: 'translate(-2px, 0px)',
    },
    '30%': {
      transform: 'translate(0px, 0px)',
    },
  },
}))

function EnterModal(props) {
  let text = '' //textfield用の一時変数 使わない
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useDispatch() //redux用

  const topic = useSelector((state) => state.topicReducer)
  const [warning, setWarning] = React.useState(false)
  
  const setWarningTrue = () => {
    return new Promise((resolve, reject) => {
      try {
        setWarning(true)
        resolve()
      } catch (e) {
        reject()
      }
    })
  }

  const handleButtonClick = () => {
    if (topic) {
      navigate('/battle')
    } else {
      setWarningTrue()
        .then(() => {
          setTimeout(() => {
            setWarning(false)
          }, 500)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
  const handleOnChange = (event) => {
    dispatch({ type: 'SET_TOPIC', topic: event.target.value })
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <TextField
              id="outlined-helperText"
              label="あいことば"
              value={topic || ''}
              onChange={(event) => handleOnChange(event)}
            />
            {topic ? (
              <></>
            ) : (
              <Alert severity="error">
                1文字以上の文字列を入力してください
              </Alert>
            )}
          </Stack>
          <Box>
            <Button
              className={warning ? classes.buttonEffect : ''}
              variant="contained"
              onClick={() => handleButtonClick()}
            >
              {props.buttonText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

function Top() {
  const [modalOpened, setModalOpened] = React.useState(false)
  const [buttonText,setButtonText] = React.useState('')
  const handleOpen = (text) => {
    setButtonText(text)
    setModalOpened(true)}

  const handleClose = () => setModalOpened(false)
  return (
    <Background>
      <div className={css({
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        marginBottom:'100px',
      })}>
      <Title fontSize={144} />
      </div>
      {/**参戦する、観戦するボタン2つのコンテナ */}
      <EnterModal open={modalOpened} close={handleClose} buttonText={buttonText} />
      <div
        className={css({
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
        })}
      >
        <GlassButton onClick={()=>handleOpen('参戦する')}>参戦する</GlassButton>
        <GlassButton onClick={()=>handleOpen('観戦する')}>観戦する</GlassButton>
      </div>
    </Background>

  )
}

export default Top
