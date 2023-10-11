import React from 'react'
import Nav from '../components/Nav'
// import Journalsapi from '../services/journals-api'
import { createJournal, deleteJournal, getJournals } from '../services/journals-api'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export default function Journals() {

    const [journals, setJournals] = useState([])
    // Fetch Data From API
    console.log(journals)
    useEffect(() => {
        getJournals().then(res => setJournals(res.data?.data?.journals))
    }, [])
    console.log(journals)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const [isGoodDay, setIsGoodDay] = useState(false)

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
        //    console.log('res.data', res.data)
            setJournals(prev => [res.data.data,...journals])
        } catch (error) {
            console.log('error', error)
        }
    }
    const handleDelete = async (id)=> {
        try {
            const res = await deleteJournal(id)
            console.log('delete res', res)
            setJournals(prev => prev.filter(journal=> journal._id !== id ))
        } catch (error) {
            console.log('error', error)
            
        }
    }
  return (
    <div>
    <Nav />

    {/* <Entries/> */}

    <div id='JournalForm'>
        <h1> Create New Journal</h1>
            <form onSubmit={handleCreate}>
                    Title: <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
                    date: <input type='textarea' name='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
                    journalEntry: <input type='textarea' value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay' value={isGoodDay} onChange={(e)=> setIsGoodDay(e.target.value)}/><br/>


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

                        <button onClick={()=> {
                            handleDelete(journal._id)
                        }}>Delete</button>
                       
                        </div>
                )
            })}
        </div>

            

















    </div>
  )
}