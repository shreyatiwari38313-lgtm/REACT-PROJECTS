import { useState } from 'react'
import image from './image.png';
import './App.css'
import Card from './components/card.jsx';

function App() {
    let myObj = {
      name:'shreya', 
      age:21 
    };

    let newArr=[1,2,3,4,5];

  return (
    <>
      <h1 className= 'bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      
      {/* <Card description ='HelloWorld! from react' />
       <Card description ='HelloWorld! from react' someObj ={myObj} />
      <Card description ='HelloWorld! from react' someObj ={newArr} /> */}
   <div className='flex justify-center gap-2'> 
       <Card description ='Shreya Tiwari' btnText='Click me' />

       <Card description='Sohni Ahuja' btnText = 'Visit me' />

   </div>








    {/* <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
    <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={image} alt="image.png" />
    <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Erin Lindford</p>
      <p className="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button className="border-purple-200 text-blue-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div> */}


{/* Card component */}
{/* <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://i0.wp.com/traveltoyournature.com/wp-content/uploads/2023/07/beautiful-nature-india-1-1024x768.jpeg?resize=1024%2C768"
          alt="Featured content"
          width={400}
          height={300}
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
          Featured
        </span>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
          Modern Design Solutions
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Discover cutting-edge design patterns and UI components that elevate
        your digital experiences.
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors duration-200">
          Learn More
        </button>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>234 views</span>
        </div>
      </div>
    </div> */}
 




    </>
  )
}

export default App
