import React from 'react'
import Nav from '../components/Nav'
// import Journalsapi from '../services/journals-api'
import { getJournals } from '../services/journals-api'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Entries from '../components/Entries'

export default function Journals() {

    const [journals, setJournals] = useState([])
    // Fetch Data From API
    console.log(journals)
    useEffect(() => {
        getJournals().then(res => setJournals(res.data?.data?.journals))
    }, [])
    console.log(journals)

  return (
    <div>
    <Nav />
    This is the All Journals Page

    <Entries/>

    <div id='JournalForm'>
        <h1> Create New</h1>
            <form action="/journals" method="POST">
                    Title: <input type='text' name='title'/><br/>
                    date: <input type='textarea' name='date'/><br/>
                    journalEntry: <input type='textarea' name='journalEntry'/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'/><br/>


                    <input type="submit" />

                </form>
</div>

<br/> <br/>


        <div id='journalEntries'>
            {journals.map((journal) => {
                
                return(
                    <div>
                        <h2>Title: <br/>{journal.title}</h2><br/>
                        <h2>Journal Entry:<br/> {journal.journalEntry}</h2><br/>
                        <h2>Journal Date:<br/> {journal.date}</h2><br/>
                        <h3>Day: {journal.wasTodayAGoodDay? `Today Was A Good Day` : `Today Wasn't A Good Day`}</h3>
                        
                        {/* <Link to={`/journals/${journal._id}`}>View</Link> <br/> */}
                        <Link to={`/journals/${journal._id}`}>Edit</Link> <br/>

                        <a>Delete</a>
                        {/* <Link to= {`/${journal._id}`}>{journal.title}</Link> */}
                        </div>
                )
            })}
        </div>

            

















    </div>
  )
}