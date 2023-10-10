import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Quotes from '../quotes';


export default function Home() {

    const randomQuoteGenerator = (event) =>{
        const newQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
        console.log(newQuote)
        // const letsGo = newQuote

    }

    return (
        <div>
            <Nav/>
            <h1>Mental Health Journal</h1>
            <h1>This is the Home Page
                <p>Within the Home, a section for Quotes to be generated</p>
            </h1>
            
            <div>
            Daily Quote Generator <br/>
            <button onClick={randomQuoteGenerator}> Quote</button>
       



            {/* <h2>{newQuote.text}</h2> */}
            </div>

            <br/><br/>

<div id='JournalForm'>
            <form action="/journals" method="POST">
                    Title: <input type='text' name='title'/><br/>
                    date: <input type='textarea' name='date'/><br/>
                    journalEntry: <input type='textarea' name='journalEntry'/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'/><br/>


                    <input type="submit" />

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