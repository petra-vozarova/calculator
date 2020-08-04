import React from 'react';
import './App.css';

var summary='';
var operands = [];
var operand = '';
var number='';
var maxLength = 21;
class Buttons extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      summary: summary,
      input: ''
    }
    this.onClick = this.onClick.bind(this)
    this.deleteValues = this.deleteValues.bind(this)
    this.calculateResult = this.calculateResult.bind(this)
    this.sanitizeOperands = this.sanitizeOperands.bind(this)
  }
  componentDidMount(){
    document.addEventListener('keydown',this.onClick);
  }
  componentDidUpdate(prevProps){
    if (prevProps.summary !== this.state.summary ){
      document.getElementById('display').innerHTML= this.state.summary;
      document.getElementById('currentValue').innerHTML = this.state.input;
    }if (prevProps.input !== this.state.input){
      document.getElementById('display').innerHTML= this.state.summary;
      document.getElementById('currentValue').innerHTML = this.state.input;
    }
  }
  sanitizeOperands(e) {
    number ='';
    operand = e.target.value;
    operands.push(e.target.value);
    if (operands.length > 2) {
      operand= operands[operands.length -1];
    } else if (operands.length === 1){
      operand = operands[0]
    }else {
      if (operands[1] ==='-'){
      operand = operands[0] + operands[1]
      } else {
      operand = operands[1];
      }
    }
   this.setState({
      summary: summary,
      input: operand
    });
     document.getElementById('currentValue').innerHTML = this.state.input;
  }

  deleteValues(){
    number='';
    summary ='';
    operand ='';
    operands =[];
    this.setState({
      summary: 0,
      input: 0
    });
    document.getElementById('currentValue').innerHTML = this.state.summary;
    document.getElementById('display').innerHTML= this.state.input; 
    document.getElementById('ocean').setAttribute("viewBox", "0 24 200 28")
  }

  calculateResult(){
    summary = eval(summary);
    //summary = summary.toFixed(16)
    if (isNaN(summary)){
      summary = '0'
    };
    this.setState({
      input: '',
      summary: summary
    });
    document.getElementById('currentValue').innerHTML = this.state.input;
    document.getElementById('display').innerHTML=this.state.summary;
    if(parseInt(summary) > 50 && parseInt(summary) < 100) {
      document.getElementById('ocean').setAttribute("viewBox", "0 24 150 28")
    } else if(parseInt(summary) < 50) {
        document.getElementById('ocean').setAttribute("viewBox", "0 24 200 28")
    } else if(parseInt(summary) > 100 && parseInt(summary) < 200) {
      document.getElementById('ocean').setAttribute("viewBox", "0 24 120 28")
    } else if(parseInt(summary) > 200 && parseInt(summary) < 500){
      document.getElementById('ocean').setAttribute("viewBox", "0 24 100 28")
    } else if(parseInt(summary) > 500 && parseInt(summary) < 1000){
      document.getElementById('ocean').setAttribute("viewBox", "0 24 70 28")
    } else if(parseInt(summary) > 1000){
      document.getElementById('ocean').setAttribute("viewBox", "0 24 50 28")
    }
  }
   
  
  onClick(e){
    var value = e.target.value;
    if (value === '.'){
      if (number.includes(value)){
        value =''
      }
    }
    if (number.length >= maxLength){
      document.getElementById('currentValue').innerHTML ='Max Length Exceeded';
      console.log(3);
    } else{
    number += value;
    summary += operand;
    operands =[];
    operand ='';
    if (summary !== '0' || value !== '0'){
      summary+= value;
      this.setState({
          input: value,
          summary: summary
      });
    } else{
        this.setState({
          input:''
        });
    }
    document.getElementById('currentValue').innerHTML = this.state.input;
    document.getElementById('display').innerHTML=this.state.summary
    }
  }
 
  render(){
    return(
        <div  className='keyboard'>
          <button id='clear' value='ACC' onClick={this.deleteValues}>ACC</button>
          <button id='multiply' value='*' onClick={this.sanitizeOperands}>*</button>
          <button id='divide' value='/' onClick={this.sanitizeOperands}>/</button>
          <button id='add' value='+' onClick={this.sanitizeOperands}>+</button>
          <button id='subtract' value='-' onClick={this.sanitizeOperands}>-</button>
          <button id='decimal' value='.' onClick={this.onClick}>.</button>
          <button id='equals' value='=' onClick={this.calculateResult}>=</button>
          <button id='nine' value='9' onClick={this.onClick}>9</button>
          <button id='eight' value='8' onClick={this.onClick}>8</button>
          <button id='seven' value='7' onClick={this.onClick}>7</button>
          <button id='six' value='6' onClick={this.onClick}>6</button>
          <button id='five' value='5' onClick={this.onClick}>5</button>
          <button id='four' value='4' onClick={this.onClick}>4</button>
          <button id='three' value='3' onClick={this.onClick}>3</button>
          <button id='two' value='2' onClick={this.onClick}>2</button>
          <button id='one' value='1' onClick={this.onClick}>1</button>
          <button id='zero'value='0' onClick={this.onClick}>0</button>
       </div>
      
    )
  }
}
  const Display =(props) => { 
    return (
    <div class= 'screen'>
        <div>
          <div id='display'></div>
        </div>
        <div id='currentValue'>
          <p></p>
        </div>
    </div>
    )
  }

const App =(props)=> {
    return(
      <div id='box'>
        <h1>My Calculator</h1>
        <Display />
        <div>
          <Buttons/>
        </div>
      </div>
    )
 }


export default App;
