import React , { Component } from 'react';


class MyLabel extends Component {
render(){
return <label> Clicou no {this.props.text}</label>
}

}

export default MyLabel;