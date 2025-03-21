
import './App.css';
import React, {useState} from 'react';

function App() {

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState("");
  const [message,setMessage]=useState("");


  let bmiCalc=(e)=>{
    e.preventDefault()
    if(weight=== 0 || height=== 0){
      alert("Enter valid weight and height")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
    }

    if(bmi<25){
      setMessage("you are under weight")
    }
    else if(bmi>25 && bmi<30){
      setMessage("you have a healthy weight")
    }
    else{
      setMessage("you are over weight")
    }
  }

  // Reload
  let reload=()=>{
    window.location.reload();
  }

  return (
    <div className="app">

       <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={bmiCalc}>
          <div className='value'>
            <label>Weight (ibn)</label>
            <input type="text" placeholder='enter Weight Value' onChange={(e)=> setWeight(e.target.value)} />
          </div>

          <div className='value'>
            <label>Height (in)</label>
            <input type="text" placeholder='enter Height Value' onChange={(e)=> setHeight(e.target.value)} />
          </div>

           <div>
          <button className='btn' type="submit">Submit</button>
          <button className='btn btn-outline' type="submit" onClick={reload}>Reload</button>
          </div>

          <div className="center">
            <h1>Your BMI is:{bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
       </div>

    </div>
  );
}

export default App;
