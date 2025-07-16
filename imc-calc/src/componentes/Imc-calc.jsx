import { useState } from "react";
import "./Imc-calc.css"
import Button from "./Button";


const ImcCalc =({calcImc})=>{
    const[height, setHeight] = useState("")
    const[weight, setWeight] = useState("")

    const ClearForm =(e)=>{
        e.preventDefault();
        setWeight("");
        setHeight("");
    }

    const validDigitos =(text)=>{
        return text.replace(/[^0-9,]/g,"")
    }

    const handleChangeHeight =(e)=>{
        const updatedValue = validDigitos(e.target.value);
         setHeight(updatedValue); 
    }

    const handleChangeWeight =(e)=>{
        const updatedValue = validDigitos(e.target.value);
          setWeight(updatedValue);
    }


    return <div id ="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
          <div className="form-inputs">

             <div className="form-control">
                <label htmlFor="height">Altura</label>
                <input
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder="Exemplo: 1.63"
                    onChange={(e) => handleChangeHeight(e)}
                    value = {height}
                />
            </div>
              <div className="form-control">
                <label htmlFor="weight">Peso</label>
                <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder="Exemplo: 56"
                    onChange={(e)=> handleChangeWeight(e)}
                    value ={weight}
                    />
                </div>
           
          </div>
          <div className="action-control">
           <Button id="calc-btn" text="Calcular" action={(e)=> calcImc(e,height, weight)}></Button>
           <Button id="clear-btn" text="Limpar"action={(e) => clearForm(e)}></Button>
          </div>
        </form>
    </div>
}

export  default ImcCalc;