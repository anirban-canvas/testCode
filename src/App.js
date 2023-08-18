import logo from './logo.svg';
import './App.css';
import './style.css';
import Items from './component/Items';
import { useEffect, useState } from 'react';
//const data=[{id:1,task:"task1"},{id:2,task:"task2"}]
function App() {
  console.log("i am rendered")
  const [mdata,setmData]=useState([])
  const [inputData,setInputData]=useState("")


  function fetchData(){

      fetch('http://127.0.0.1:8000/tasks').then(async (data)=>{

       let jsondata=await data.json()
       setmData(jsondata.data)

      })
     

  }
  useEffect(()=>{

    fetchData()


  },[])

  function addTask(){
    


    let alldata=[...mdata];
    let tempobj={
      id:Math.random(),task:inputData
    }

    console.log(tempobj)
    alldata.push(tempobj)
    console.log(alldata)

    setmData(alldata)


  }

  return (
    <div className="App">
    
      <div className='input-grp'> <input type="text" onChange={(e)=>setInputData(e.target.value)} value={inputData}/>  
      <button onClick={addTask}>Add task</button></div>

        <Items itemlist={mdata}/>


    </div>
  );
}



export default App;
