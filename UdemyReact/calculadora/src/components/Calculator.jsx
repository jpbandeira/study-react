import React, {Component} from 'react'
import './css/Calculator.css'
import Button from './Button'
import Display from './Display'

export default class Calculator extends Component{
    
    clearMemory = () =>{
        console.log("Limpar");
    }
    
    setOperation(operation){
        console.log("op");
    }

    addDigit(n){
        console.log("add");
    }

    render(){

        const addDigit = n => this.addDigit(n)
        const setOperation = operation => this.addDigit(operation)

        return(
            <div>
                <div className="calculator">
                    <Display value={100}/>
                    <Button label="AC" click={this.clearMemory} triple/>
                    <Button label="/" click={this.setOperation} operation/>
                    <Button label="7" click={this.addDigit}/>
                    <Button label="8" click={this.addDigit}/>
                    <Button label="9" click={this.addDigit}/>
                    <Button label="*" click={this.setOperation} operation/>
                    <Button label="4" click={this.addDigit}/>                
                    <Button label="5" click={this.addDigit}/>                
                    <Button label="6" click={this.addDigit}/>                
                    <Button label="-" click={this.setOperation} operation/>                
                    <Button label="1" click={this.addDigit}/>                
                    <Button label="2" click={this.addDigit}/>                
                    <Button label="3" click={this.addDigit}/>                
                    <Button label="+" click={this.setOperation} operation/>                
                    <Button label="0" click={this.addDigit} double/>
                    <Button label="." click={this.addDigit}/>                
                    <Button label="=" click={this.setOperation} operation/>                                

                </div>
            </div>
        )
    }
}