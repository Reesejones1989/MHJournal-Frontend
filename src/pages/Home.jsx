import React from 'react'
import { useNavigate } from "react-router-dom";
import Nav from '../components/Nav';
import Quotes from '../quotes';
import { useState } from 'react';
import { createJournal } from '../services/journals-api';

export default function Home() {
    const [quoteText, setQuoteText] = useState(null)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const [isGoodDay, setIsGoodDay] = useState(false)
    const navigate = useNavigate();


    const randomQuoteGenerator = (event) =>{
        const newQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
        console.log(newQuote)
        // textbox.value= newQuote
        setQuoteText(newQuote.text)
    }
    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const data = {
                title,
                date,
                journalEntry,
                wasTodayAGoodDay: isGoodDay
            }
            const res = await createJournal(data)
            navigate('/journals');
        } catch (error) {
            console.log('error', error)
        }
    }
    // useEffect(()=>{
    //     const helper = async() => {
    //         const res = await axios.get("/journals")
    //         console.log(res)

    //     }
    //     helper();
    // },[])
    return (
        <div className=''>
            <Nav/>
            <h1>Mental Health Journal</h1>
            {/* <h1>This is the Home Page
            </h1> */}
            
            <div>
            Daily Quote Generator <br/>
            <textbox id= "textarea" default value=""></textbox>
            <button onClick={randomQuoteGenerator}> Quote</button>
       
            {quoteText && 
            <p>{quoteText}</p>}


            {/* <h2>{newQuote.text}</h2> */}
            </div>

            <br/><br/>

<div id='JournalForm'>
            <form onSubmit={handleCreate}>
            Title: <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
                    date: <input type='textarea' name='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
                    journal Entry: <input type='textarea' value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'checked={isGoodDay} onChange={(e)=> setIsGoodDay(!isGoodDay)}/><br/>


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