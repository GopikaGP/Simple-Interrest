
import './App.css';
import { useState } from 'react';
import { TextField } from '@mui/material';

function App() {
  // state to hold the input data
  const[principle, setPrinciple] = useState(0)
  const[rate,setRate] =useState(0)
  const[year,setYear] = useState(0)
  const[interest,setInterest] = useState(0)

  // conditionally rendeering
const[isPrinciple, setIsPrinciple] = useState(true)
const[isRate,setIsRate]=useState(true)
const[isYear,setIsYear] = useState(true)

const validate=(e)=>{
  let name = e.target.name
  let value = e.target.value
  console.log(!!value.match(/^[0-9]*$/));

if(!!value.match(/^[0-9]*$/)){
  if(name=='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
 }else if(name=='rate'){
   setRate(value)
   setIsRate(true)
 }else{
   
   setYear(value)
   setIsYear(true)
 }
}else{
  if(name=='principle'){
    // setPrinciple(value)
    setIsPrinciple(false)
 }else if(name=='rate'){
  //  s
  // setRate(value)
   setIsRate(false)
 }else{
   //setYear(value)
   setIsYear(false)
 }

}

}

// RESET BUTTON FUNCTION
const handleReset = () =>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
}

// calculate
const calculate = () =>{
  setInterest((principle*rate*year)/100)
}




// console.log("principle",principle);
// console.log("interst",interest);
// console.log("year",year);()

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      {/* card */}

  <div className="card" style={{width: '18rem'}}>
 
  <div className="card-body">
    <h5 className="card-title">Simple Interest App</h5>
   {!isPrinciple &&
    <p className="card-text">Calculate your simple interest Easily</p>}
  </div>
  
  <div className="card-body">
  <div>
    <div className='mt-2'>
 <div className="form-control bg-warning text-center flex-column"   style={{ height: '100px' }}>
  <h1>₹{interest}</h1>

  <p>Total Simple Interest </p>
 </div>
 </div>

  <div className='mt-3'>
  <TextField id='outlined-basic'  value={principle || ''} label='₹ Principle Amount'  name='principle'    className='w-100'   onChange={(e)=>validate(e)}/>
  { !isPrinciple &&
   <p className='text-danger'>*Invalid Input </p>}

  </div>
  <div className='mt-3'>
  <TextField id='outlined-basic' value={rate || ''} label='rate of interest' name='rate'   className='w-100'   onChange={(e)=>validate(e)}/>
  { !isRate &&
    <p className='text-danger'>*Invalid Input </p>}
  </div>
  <div className='mt-3'>
  <TextField id='outlined-basic' value={year || ''} label='Year(yr)' name='year'    className="w-100"      onChange={(e)=>validate(e)}/>
  {!isYear &&
    <p className='text-danger'>*Invalid Input </p>}
  </div>
</div>

  <div className='d-flex g-5 mt-3'>
    <button className='btn btn-success me-3 w-100' disabled={isPrinciple && isRate && isYear?false:true}   onClick={calculate}>CALCULATE</button>
    <button className="btn btn-light text-primary w-100 border-primary" onClick={handleReset}>RESET</button>
    </div>
  </div>
</div>

      
    </div>
  );
}

export default App;
