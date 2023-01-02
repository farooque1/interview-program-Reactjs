import React, { Component } from 'react'
import { SketchPicker ,
    AlphaPicker,
     BlockPicker ,
     ChromePicker ,
     CirclePicker ,
     CompactPicker,
      GithubPicker ,
      HuePicker ,
      MaterialPicker ,
      PhotoshopPicker ,
      SliderPicker ,
      SwatchesPicker ,TwitterPicker} from 'react-color';

export default class Colorpicker extends Component {
  
    state = {
        background: '#fff',
      };
    
      handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    render() {
      return (
        <div className='container'>
        <div className='text-center mt-5 mb-5'>
        {/* <BlockPicker/>  */}
        <div className='col-6'>
        <PhotoshopPicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
        /> <br />
        </div>
        <div className='col-6'>
        <SketchPicker width='100%'
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
        </div>
    </div>
    </div>

    )
  }
}




// import React,{useState} from 'react'

// import { SketchPicker ,
//     AlphaPicker,
//      BlockPicker ,
//      ChromePicker ,
//      CirclePicker ,
//      CompactPicker,
//       GithubPicker ,
//       HuePicker ,
//       MaterialPicker ,
//       PhotoshopPicker ,
//       SliderPicker ,
//       SwatchesPicker ,TwitterPicker} from 'react-color';


// function Colorpicker() {

//     const [background,setbg]=useState('#fff');

//    const handleChangeComplete = (color) => {
//         setbg({ background: color.hex });
//       };

//     return (
//     <div className='container'>

//         <div>
//         <SketchPicker
//         color={ background }
//         onChangeComplete={ handleChangeComplete } /> <br />
//         {/* <BlockPicker/> 
//         <ChromePicker/>  */}
//         <PhotoshopPicker
//                     color={ background }
//                     onChangeComplete={ handleChangeComplete }
//         /><br />
//         </div>

//     </div>
//   )
// }

// export default Colorpicker