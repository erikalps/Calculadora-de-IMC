import { useState } from 'react'
import { data } from './data/data'
import './App.css'

import ImcTable from './componentes/ImcTable'
import ImcCalc from './componentes/Imc-calc'

function App() {
  

  const[imc, setImc] = useState("")
  const[info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  const calcImc =(e, height, weight)=>{
    e.preventDefault();
   
    if(!weight || !height ) return

    const weightFloat = +weight.replace(",",".")
    const heightFloat = +height.replace(",",".")
    
    const imcResult =(weight/(heightFloat*heightFloat)).toFixed(1);

    setImc(imcResult)
    
    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass)

      }
    })

    if(!info) return;
  }

  const resetCalc =(e)=>{
    e.preventDefault();

    setImc("");
    seiInfo("");

  }






  return (
    <div className='container'>
      {!imc? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info}  resetCalc={resetCalc} infoClass={infoClass}/>}
    </div>
  )
}

export default App
