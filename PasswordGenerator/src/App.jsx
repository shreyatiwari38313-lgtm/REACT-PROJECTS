import {useState, useCallback, useEffect, useRef} from'react';
import './App.css'

function App() {
  // Passwordlength 
  const[length, setLength]= useState(7);

  // CheckBoxes default values(if numbers are to include in pswrd)
  const[includeNumbers, setIncludeNumbers]= useState(false);

  // for characters to be included in password
  const[includeCharacters, setIncludeCharacters] = useState(false);

  //Password field
  const[password, setPassword] = useState("");

  // function to generate password(this has to passed in characters Numbers Length) 
  // const generatePassword = () =>{}
  
  //So we need a new hook where we can use a function multiple times on writing once.
  //This type of hook is called usecallback hook .

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  // SYNTAX - const cachedFn = useCallback(fn, dependencies) where, dependencies passed in an array(single array).
  // and to use it we have to first import it in the same file


  {/* Password generation function*/}
  const generatePassword = useCallback(()=>{
    let pass =""         // password generated 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"      // password me jo data use hoga

    if(includeNumbers) str+= "0123456789"
    if(includeCharacters) str+= "@#$%^&*!~`+-><?"
    //random value reading from string for password generation
    for(let i=0; i<length; i++){
     // pass = str.charAt(Math.floor(Math.random() * str.length))    giving you single value everytime
      pass += str.charAt(Math.floor(Math.random() * str.length))   // concatenating the values to make a password
    }
    setPassword(pass)
  }, [length, includeNumbers, includeCharacters]);  // callback me jo dependency array h wo optimize krne ke liye h(means memory/cache me rkhne ke liye)  don't compare it with useEffect dependencies

  // useRef Hook - useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // (here we are using it for copying password when we are clicking on copy button)
  // SYNTAX - const refContainer = useRef(initialValue);

  const passwordRef = useRef(null);   // initial value is null


  // making function to copy password to clipboard

  const copyPasswordToClipBoard =useCallback(()=>{
      //optimization 

      //mainly what this line does is highlighting the copied password so that user can see what he copied or it(here password) is copied or not
            passwordRef.current?.select()   // optionally selecting with ? as current value can be zero also

      //giving range to highlight( means some part of password highlighted)
        //    passwordRef.current?.setSelectionRange(0,5)      //highlighting only first five characters of password

           window.navigator.clipboard.writeText(password)   //window.navigator has clipboard property which has writeText method to write text to clipboard
            },[password])    
    // run once on copy button clicking so one dependency only
    // as we are using REACT which will be going to compile into JS,
    // so we have window object and we can directly use it. 
    // In next js, next js has server side rendering where code is compiled on server side and server side don't have window object. 

  
  {/* calling Password generation function */}

  // generatePassword();    // we can't call like this directly as REACT will be controlling the rendering of function so we can't manually call it 
                            // 1st method is we make a button and apply onClick event to call this function 
                            // Another is we can use useEffect hook to call this function whenever there is a change in length , includeNumbers , includeCharacters

   // useEffect is a React Hook that lets you synchronize a component with an external system. 
   // To use we must import it first,  import {useEffect} from 'react';
   //useEffect takes callback function as the first argument and an optional "array of dependencies" as the second argument.
   // SYNTAX - useEffect(setup, dependencies?)   

   useEffect(()=>{
     generatePassword();
   },[length, includeCharacters, includeNumbers, generatePassword]);   // these are the dependencies that when changed will call the useEffect function again
  
  return (
    <>
      <div className="w-full max-w-md p-8 flex flex-col items-center justify-start
       rounded-3xl bg-purple-400 shadow-fuchsia-500">

        <h1 className=" mt-8 text-2xl px-32 font-bold text-zinc-600 align-text-top"> Password Generator </h1>

       <br />
        
        {/*Passsword */}
        <div className="w-full bg-white rounded-lg py-4 px-30 text-2xl font-sans text-amber-100">
          <input 
          type="text"
          className = "w-full bg-transparent text-pink-400 text-xl font-mono outline-none text-left"
          value={password}
          placeholder="Your password..."
          readOnly    // can make no changes ready only property

          ref = {passwordRef}  // taking password from input field(using useRef hook) and attaching to copy button so while clicking button we have the password value
          
          />
        </div>

        {/*Password copy button */}
        <button 
        onClick={copyPasswordToClipBoard}     // on clicking copy button this function(copyPasswordToClipBoard) will be called
        className="w-20 py-2 mt-4 text-pink-300 rounded-lg">copy </button>

        <br />  

        {/* Length slider */}
        <div className="w-64 flex flex-row items-center justify-between bg-purple-300 rounded-lg p-2">
          <label className="text-lg text-gray-800 font-medium font-sans">
            Password Length:{length}
          </label>
          <input 
            type= "range"
            min="7"
            max="20"
            value={length}
            className="w-full accent-fuchsia-300 cursor-pointer"
            // SYNTAX - onChange={ ()=> {}}   //onChange needs a callback function and an event parameter
            onChange={ (e) =>{setLength(e.target.value)}}   // length is current number , setLength is a function to change that number
            
            />

        </div>

        <br />

        {/*Checkboxes , for checkboxes we use checked instead of value*/}
        <label className="flex items-center gap-3 text-lg cursor-pointer">
      <input
        type="checkbox"
        name="numbers"
        checked={includeNumbers}
        className="w-4 h-4 accent-white"
        onChange={()=>{
          //setIncludeNumbers(true)  the problem with this is once we check it it will remain on checked 
          // instead we are going to use a callback function inside which takes setIncludeNumbers prev value
          //  which is false by default and reverse it means make it true evertime we refresh page it will be unchecked so we can check it again 
          setIncludeNumbers( (prev)=> !prev)} }    
        />   
      Numbers
    </label>


<br /> 
    <label className="flex items-center gap-3 text-lg cursor-pointer">
      <input 
        type="checkbox"
        name="characters"
        checked= {includeCharacters}
        className="w-4 h-4 accent-white"
        onChange={()=>{
          //setIncludeCharacters(true)  the problem with this is once we check it it will remain on checked
          //instead we are going to use a callback function inside which takes setIncludeNumbers prev value which is false
          //by default and reverse it means make it true evertime we refresh page it will be unchecked so we can check it again 
           setIncludeCharacters((prev) => !prev)
        }}
      />
      Characters
    </label>
        


<br/> 
    <nav>
      <label className="flex items-end gap-3 text-lg text-gray-800 font-sans">
        Page designed by  <br/> @ Shreya Tiwari 
      </label>
    </nav>


      </div>
    </>
  )
}

export default App
