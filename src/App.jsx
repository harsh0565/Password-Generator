import './App.css'
import React, { useState } from 'react'
import Alert from './assets/Alert';

let keyset1= 'abcdefghijklmnopqrstuvwxyz'
let keyset2=  keyset1.toUpperCase();
let keyset3 = '!@#$%^&*-+'
let keyset4 = '1234567890'


const App = () => {



  const [password , setPassword] = useState("Generate Password");

const shuffle = (array)=>{
  for(let i = 0 ; i <array.length ; i++){
    let swapIndex = Math.floor(Math.random()*(array.length));
    let temp = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = temp;
  }
  return array;
}


  const generatePassword = ()=>{
    let generatedStr = "";
    let range = Math.floor(8 + Math.random()*9);
    for(let i = 0 ; i<=range/4;i++){
      let random = Math.floor(Math.random()*keyset1.length);
      generatedStr+=keyset1[random];
    }
    for(let i = 0 ; i<=range/2;i++){
      let random = Math.floor(Math.random()*keyset2.length);
      generatedStr+=keyset2[random];
    }
    for(let i = 0 ; i<=range/4;i++){
      let random = Math.floor(Math.random()*keyset3.length);
      generatedStr+=keyset3[random];
    }
    for(let i = 0 ; i<=range/4;i++){
      let random = Math.floor(Math.random()*keyset4.length);
      generatedStr+=keyset4[random];
    }
    let shuffledStr = shuffle(generatedStr.split('')).join('');
    console.log(generatedStr);
    setPassword(shuffledStr);
  }

  const [alertmsg, setAlertmsg] = useState(null);
  const copyPassword= ()=>{
    // alert("text copied to clipboard")
    setAlertmsg("Copied to ClipBoard Successfully");
    navigator.clipboard.writeText(password);
    
    setTimeout(() => {
      setAlertmsg(null);
    }, 500);
    
  }
  return (
    <>
    <Alert alert={alertmsg} />
    <div className="p-4  flex flex-col gap-12 mt-10 items-center">
        <h1 className='text-5xl font-bold italic tracking-wider main-heading'>Password Generator</h1>
        <div className='border box w-[550px]   rounded-xl  p-8 flex  gap-5  items-center'>
          <p className='font-semibold w-[50%] h-[30px] overflow-hidden text-2xl  text-ellipsis'>{password}</p>
          <div className='flex w-[30%] gap-8 ml-8 justify-around'>
            <button title='Copy ' onClick={copyPassword} className='text-2xl  hover:scale-125 transition-all duration-150 active:bg-green-500 p-3 rounded'><i className="fa-solid fa-copy"></i></button>
            <button title='Generate New Password' onClick={generatePassword} className='text-2xl active:rotate-[360deg] transition-all duration-150'><i class="fa-solid fa-arrows-rotate"></i></button>
          </div>
        </div>
    </div>
    <footer className='w-full absolute bottom-1'>
      <center>Created By Harsh Sengar</center>
    </footer>
    </>
  )
}

export default App


