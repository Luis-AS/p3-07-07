import React , { Component } from 'react';

class Conversor extends Component{
  constructor(props){
    super(props);
    this.state = {
        total : 0,
        number : 0,
        real: 1,
        dolar: 5.38,
        euro: 6.06,
    };
  }

  handleChange = (e) =>{
    const { name , value} = e.target;
    this.setState({ [name] : value }) ;
  }

 Real = () =>{
     const { number, real } = this.state;
     this.setState({ total : parseInt(number) * parseInt(real)});
 }

 Dolar = () =>{
  const { number, dolar } = this.state;
  this.setState({ total : parseInt(number) * parseInt(dolar)});
}

Euro = () =>{
  const { number, euro } = this.state;
  this.setState({ total : parseInt(number1) * parseInt(euro)});
}

  render(){
      return (
        <div>
            <input type="text" name="number" value={this.state.number} onChange={this.handleChange}/>
            <input type="text" name="real" value={this.state.real} onChange={this.handleChange}/>
            <input type="text" name="dolar" value={this.state.dolar} onChange={this.handleChange}/>
            <input type="text" name="euro" value={this.state.euro} onChange={this.handleChange}/>
            <button onClick={this.Real}>*</button>
            <button onClick={this.Dolar}>*</button>
            <button onClick={this.Euro}>*</button>
            
            <input type="text" name="total" value={this.state.total} readOnly />            
        </div>

      );
  }

}

export default Conversor;