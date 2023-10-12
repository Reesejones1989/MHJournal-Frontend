import React from 'react'
import Nav from '../components/Nav'
// import Journalsapi from '../services/journals-api'
import { createJournal, deleteJournal, getJournals } from '../services/journals-api'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export default function Journals() {

    const [journals, setJournals] = useState([])
    // Fetch Data From API
    // console.log(journals)
    useEffect(() => {
        getJournals().then(res => setJournals(res.data?.data?.journals))
    }, [])
    // console.log(journals)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const [isGoodDay, setIsGoodDay] = useState(false)

    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            console.log(isGoodDay)
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
                    journal Entry: <input type='textarea' value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'checked={isGoodDay} onChange={(e)=> setIsGoodDay(!isGoodDay)}/><br/>

                    <input type="submit" />

                </form>
</div>

<br/> <br/>


        <div id='journalEntries'>
            {journals.map((journal) => {
                
                return(
                    <div id='container'>
                        <div id='date'>
                        <h2 id='handle'>Journal Date: </h2>  
                        <h2 id='value'>{journal.date}</h2><br/>
                        </div>

                        <div id='title'>
                        <h2 id='handle'>Title: </h2> 
                        <h2 id='value'>{journal.title}</h2><br/>
                        </div>

                        <div id='entry'>
                        <h2 id='handle'>Journal Entry: </h2>
                        <h2 id='value'>{journal.journalEntry}</h2><br/>
                        </div>
                        
                        <div id='day'>
                        <h3 id='handle'>Day: </h3>
                        <h3 id='value'>{journal.wasTodayAGoodDay? `Today Was A Good Day` : `Today Wasn't A Good Day`}</h3>
                        </div>
                       
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