import React from 'react'
import Nav from '../components/Nav'
import { editJournal, getOneJournal } from '../services/journals-api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit(props ) {
    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const [isGoodDay, setIsGoodDay] = useState(false)
  const navigate = useNavigate()
  useEffect(()=> {

    getOneJournal(id).then(res => {
      console.log('res', res)
      const { data} = res.data
      setDate(data?.date)
      setTitle(data?.title)
      setJournalEntry(data?.journalEntry)
      setIsGoodDay(data?.wasTodayAGoodDay)
    }).catch(err => console.log(err))
  }, [id])

  const handleUpdate = async(e) => {
    try {
      e.preventDefault()
      const data = {
          title,
          date,
          journalEntry,
          wasTodayAGoodDay: isGoodDay
      }
      console.log('id', id)
      const response = await editJournal(id, data)

      navigate('/journals')

    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div>
   
        <Nav />
    {/* <form> 

   
    Title: <input type="text" name="title" /><br/>
    journal Entry: <input type="text" name="journalEntry"/><br/>
    Was Today A Good Day? :
    <br/>
    <input type="submit" value="Submit Changes"/>
    </form>  */}

<form onSubmit={handleUpdate}>
                    Title: <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
                    date: <input type='textarea' name='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
                    journalEntry: <input type='textarea' value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay' value={isGoodDay} onChange={(e)=> setIsGoodDay(e.target.value)}/><br/>


                    <input type="submit" />

                </form>

    </div>
  )}