import React from 'react'
import Nav from '../components/Nav'
import { editJournal, getOneJournal } from '../services/journals-api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Entries from '../components/Entries'

export default function Edit(props ) {
    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const [isGoodDay, setIsGoodDay] = useState(false)
    // console.log(isGoodDay)
  const navigate = useNavigate()
  useEffect(()=> {

    getOneJournal(id).then(res => {
      // console.log('res', res)
      const { data} = res.data
      setDate(data?.date)
      setTitle(data?.title)
      setJournalEntry(data?.journalEntry)
      // data.wasTodayAGoodDay = 'true'
      setIsGoodDay(data?.wasTodayAGoodDay)
      // console.log(data?.wasTodayAGoodDay)
      
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
      // console.log('id', id)
      const response = await editJournal(id, data)

      navigate('/journals')

    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div id='Edit'>
   
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
                    Date: <input type='textarea' name='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
                    Journal Entry: <input type='textarea' cols="50" rows="10" value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'checked={isGoodDay} onChange={(e)=> setIsGoodDay(!isGoodDay)}/><br/>


                    <input type="submit" />

                </form>

    </div>
  )}