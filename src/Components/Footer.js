import React from 'react'



export default function footer(props) {    
    
    const x = props.darkMode ? "black": "white"

    // const darkMod = React.useState(props.darkMode ? "black" : "white")
    

    return(
        <footer class={`footer${x}`}>
             <ul>
               <li><a href={props.au}>About us</a></li>
               <li><a href={props.os}>Our services</a></li>
               <li><a href={props.pp}>Privacy policy</a></li>
               <li><a href={props.ap}>Affiliate program</a></li>
             </ul>
     </footer>
    )
}