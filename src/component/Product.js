import React, {PureComponent } from 'react'

export class Product extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            ProductID:'',
            qty:0      
        }
    }
    
    addToCart = (pid)=>{

        this.setState({
          ProductID:pid,
          qty:this.state.qty+1
        })
      }

    render() {
    return (
      <div>
            <h1>Product Page</h1>      
            <button onClick={()=>{this.addToCart(0)}}>Add To Cart</button>
            <Cart ProductID={this.state.ProductID} qty={this.state.qty}></Cart>
      </div>
    )
  }
}

export default Product;

class Cart extends PureComponent{
 
    constructor(props) {
      super(props)
    
      this.state = {
        qty:this.props.qty        
      }
    }
   
    // updateqty =()=>{
    //   this.setState({
    //     qty:this.state.qty+1
    //   })
    // }


    static getDerivedStateFromProps(props,state){

        console.warn(props.qty)
        console.warn(state.qty)

        if(props.qty !== state.qty){
            return {qty:props.qty}
        }

        return null;
    }
    
    
    componentDidMount(){
      console.log("Execute after component render");
    }    
    
    componentDidUpdate(){
    
      console.log(" component update ");
    
    }
  
    
  
    render() {
      return (
   
        <div>
            <h1>Cart : {this.state.qty}</h1>
            <button onClick={this.updateqty}> Update Qty </button>  
        </div>
      )
    }
  }