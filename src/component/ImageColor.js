import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { BlockPicker } from 'react-color';


export default function ImageColor() {

    const [state, setState] = useState({
        logoSrc: '',
        colors: [],
        selectedColor: 'FFFFFF',
        cssLink: '',
        img: new Image()
      })
      
      const handleColorSelect = (color) => setState({...state, selectedColor: color})
    
      useEffect(() => {
        setState({...state, cssLink: `<link rel="stylesheet" href="https://insight-engine-styling.netlify.app?color=${cleanHexColor(state.selectedColor)}&logo=${state.logoSrc}"/>`})
        console.log(state)
      }, [state.logoSrc, state.selectedColor])

  return (

    <div className='container'
      align="center"
      justify="center"
      direction="column"
      spacing={2}
      maxWidth='100%'
    >
      <div item>
        <input className='form-control'
          onChange={event => setState({...state, logoSrc: event.target.value})}/>
        </div>
      <div item>
        <button className='btn btn-primary my-4'>Load Image</button>
      </div>

      {state.logoSrc &&
        <div item>
          <ColorExtractor src={enableCorsProxy(state.logoSrc)} getColors={colors=>setState({...state, colors: colors, selectedColor: colors[0]})}/>
          <img src={enableCorsProxy(state.logoSrc)} handleClick={handleColorSelect} width='70%'/>
          <BlockPicker 
            triangle='hide'
            color={state.selectedColor}
            colors={state.colors} 
            onChangeComplete={color => setState({...state, color: color.hex, selectedColor: color.hex})}
          />
        </div>
      }
    </div>
  );
}

const enableCorsProxy = (src) => {
  const corsProxy = 'https://insight-engine-styling.netlify.app/.netlify/functions/cors-proxy?url='
  return corsProxy + encodeURIComponent(src)
}

const cleanHexColor = (color) => {
  if ( color ) {
    return color.replace(/#(?=\S)/g, '')
  }

  return color
}

const Canvas = (props, handleClick) => {
  const canvasRef = useRef()
  const [xy, setXY] = useState()
  const [color, setColor] = useState()
  const [context, setContext] = useState()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    setContext(ctx)

    const image = new Image();
    image.src = props.src
    image.crossOrigin = "Anonymous"

    image.onload = () => {
      canvas.height= image.height
      canvas.width = image.width
      ctx.drawImage(image, 0, 0);
    };
  }, [props.src])
  
  return (
    <>
      <canvas 
        ref={canvasRef} 
        onMouseMove={e => {
          xy && setColor(pixelDataToHex(context.getImageData(xy.x, xy.y, 1, 1).data))
          setXY({x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY})}
        } 

        onClick={() => props.handleClick(color)}

      {...props}/>
      <div>
        {xy && xy.x},{xy && xy.y}
        <br/>
      </div>
      {props.proxySrc && <ColorExtractor src={props.proxySrc} getColors={colors=>{console.log(colors)}}/>}
    </>
  )
}

const pixelDataToHex = pixel => (
  "#" + ("000000" + rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6)
)

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

