import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Quotes from '../quotes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createJournal } from '../services/journals-api';

export default function Home() {

    const randomQuoteGenerator = (event) =>{
        const newQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
        console.log(newQuote)
        // textbox.value= newQuote
        

    }
    // useEffect(()=>{
    //     const helper = async() => {
    //         const res = await axios.get("/journals")
    //         console.log(res)

    //     }
    //     helper();
    // },[])
    return (
        <div>
            <Nav/>
            <h1>Mental Health Journal</h1>
            {/* <h1>This is the Home Page
            </h1> */}
            
            <div>
            Daily Quote Generator <br/>
            <textbox id= "textarea" default value=""></textbox>
            <button onClick={randomQuoteGenerator}> Quote</button>
       



            {/* <h2>{newQuote.text}</h2> */}
            </div>

            <br/><br/>

<div id='JournalForm'>
            <form action="/journals" method="POST">
                    Title: <input type='text' name='title'/><br/>
                    Date: <input type='textarea' name='date'/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'/><br/>
                    <br/>
                    Journal Entry: <textarea type='textarea' name='journalEntry'/><br/>

                    <input onClick={createJournal} type="submit" />

                </form>
</div>






        </div>
    )





}







// {Quotes.map((quote, i) => {
//     const {text, author, id} = quote;
//     return(
//         // <blockquote key={`q-${id}`}>{author}: "{text}"</blockquote>)})}
//         <div>
//         <h2>{text}</h2>
//         <h3>{author}</h3>
//         </div>
//         )
// })}