import React from 'react';
import { Button, Box, Container, OutlinedInput } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Link } from 'react-router-dom';



function OutlinedButton(props) {
  let style = {
    background: "linear-gradient('-90%', '#3B4371', '#F3904F')"
  }
  return (
    <Button disabled className="Button" onClick={() => props.fn()} variant='outlined'>{props.name}</Button>

  )
}
function FilledButton(props) {
  let style = {
    background: "linear-gradient(90deg,#3B4371, #F3904F)"
    // backgroundColor:'#3B4371',



  }
  return (
    <Button className="Button" sx={style} onClick={() => props.fn()} variant='contained'>{props.name}</Button>

  )
}
function OutlinedInput1(props) {

  let styleret = (args) => {
    let style = { border: 'solid 2px #F3904F', width: '40%' }
    if (args == undefined) {
      return style
    }
    else {
      Object.keys(args).map((v, i) => {
        style[v] = args[v]

      }
      )
      return style
    }



  }
  const CssTextField = styled(OutlinedInput)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });
  return (
    <>
      {props.calls == 'custom' ?
        <CssTextField label="Custom CSS" id="custom-css-outlined-input" /> :
        <div>
          <p style={props.style}> {props.label}</p>
          {props.style != undefined ?
            <>
              <OutlinedInput style={styleret(props.style)} onChange={(e) => props.onChange(e)} name={props.name} placeholder={props.placeholder}></OutlinedInput>
            </>
            :
            <OutlinedInput style={styleret()}></OutlinedInput>
          }
        </div>

      }


    </>
  )
}


function LayoutStateForm(props) {

  let styleret = (args) => {
    let style = { display: 'block', flexDirection: 'center', justifyContent: 'center', alignItems: 'center', }
    // style.args['borderTopRightRadius']
    Object.keys(args).map((v, i) => {
      style[v] = args[v]

    })
    return style
  }
  return (
    <div className='glassmorphic-container' >
      <Container sx={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', height: '80%' }}>
        <Box className='.glassmorphic-left' sx={styleret({ borderBottomLeftRadius: '20px', width: '30%', backgroundColor: '#3B4371', opacity: '0.9' })}>
          <Box className='' sx={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '25px', width: '60%', backgroundColor: '#F3904F', marginLeft: '0px', position: 'relative', top: '-20px' }}>

            <h1 style={{ margin: '20px', padding: '10px' }}>{props.step}</h1>


          </Box>
          <Box className='' sx={{  width: '90%', backgroundColor: '#transparent',color:'white', margin: '0 auto',position:'relative',top:'70px' }}>

            <h3 style={{ margin: '0 auto', padding: '10px' }}>{props.steptag}</h3>
            <Link to={props.link} style={{ margin: '70px', padding: '10px',color:'white' }}>{props.linkname} </Link>


          </Box>

        </Box>
        <Box className='glassmorphic-right' sx={styleret({ display: 'flex', borderTopRightRadius: '20px', width: '70%', backgroundColor: 'white', opacity: '0.75' })}>
          <Container sx={{ margin: '5rem' }}>
            {props.b1 == undefined
              ?
              <>

              </>


              :
              <>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <OutlinedInput1 calls={'not'} label={props.b1[0].label1} onChange={props.b1[0].onChange} value={props.b1[0].value} name={props.b1[0].name} style={{ width: '100%' }} ></OutlinedInput1>
                  <OutlinedInput1 calls={'not'} label={props.b1[1].label2} onChange={props.b1[1].onChange} value={props.b1[1].value} name={props.b1[1].name} style={{ width: '100%', marginLeft: '2rem' }} ></OutlinedInput1>




                </Box>
              </>
            }
            {props.b2 != undefined
              ?
              <Box sx={{}}>
                <OutlinedInput1 calls={'not'} style={{ width: '80%' }} label={props.b2[0].label} onChange={props.b2[0].onChange} value={props.b2[0].value} name={props.b2[0].name} ></OutlinedInput1>

              </Box>
              :
              <>
              </>
            }
            <Box sx={{}}>
              <OutlinedInput1 calls={'not'} style={{ width: '80%' }} label={props.b3[0].label} onChange={props.b3[0].onChange} value={props.b3[0].value} name={props.b3[0].name} ></OutlinedInput1>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: '', margin: '20px', }}>
              <FilledButton name={props.b4[0].label} fn={props.b4[0].onClick} />
            </Box>
          </Container>


        </Box>
      </Container>
    </div>
  )
}




export { OutlinedButton, FilledButton, LayoutStateForm, OutlinedInput1 };