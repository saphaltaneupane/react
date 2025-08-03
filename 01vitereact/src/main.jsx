import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import {jsx as _jsx} from 'react/jsx-runtime'

//  function MyApp(){
//   return( <>
//    <h1>Custom App ! chai </h1>
//    </>)
 
// }

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://ww.google.com',
//         target:'_blank',

//     },
//     children:'Click me to visit Google'
    
// }
// const anotherElement=(
//   <a href="https://www.google.com" target="_blank">Visit Google</a>
// )




const AnotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google - ' + AnotherUser
)

createRoot(document.getElementById('root')).render(
  ReactElement
)


// ReactElement
  // MyApp() yesari ni chalxa not ramro 