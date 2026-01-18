import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <>
        <h1>Hello Shreya</h1>
         <p>how are you</p>
         
        </>
    )
}

createRoot(document.getElementById('root')).render(
  
    <MyApp />
    
    //MyApp()    not a good practice
  
)
