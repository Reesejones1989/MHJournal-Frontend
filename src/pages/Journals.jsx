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
    useEffect(() => {
        getJournals().then(res => setJournals(res.data))
    }, [])
    console.log(journals)

  return (
    <div>
    <Nav />
    This is the All Journals Page
        <div>
            {journals.map((journal) => {
                return(
                    <div>
                        <h2>{journal.title}</h2><br/>
                        {/* <Link to= {`/${journal._id}`}>{journal.title}</Link> */}
                        </div>
                )
            })}
        </div>

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


    </div>
  )
}