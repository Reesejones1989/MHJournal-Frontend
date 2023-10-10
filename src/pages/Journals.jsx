import React from 'react'
import Nav from '../components/Nav'
import Journalsapi from '../services/journals-api'

export default function Journals(props) {
  return (
    <div>
    <Nav />
    This is the All Journals Page
    <Journalsapi />

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