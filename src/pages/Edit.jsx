import React from 'react'
import Nav from '../components/Nav'
import { getOneJournal } from '../services/journals-api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit(props ) {
    const {id} = useParams();
    // console.log(getOneJournal(id))
    // console.log(id)
    // const [oneJournal, setOneJournal] = useState([])
    // console.log(oneJournal)
    // useEffect(() => {
    //     // getOneJournal(id).then(res => res.json()).then(data  => console.log(data))()
    //     getOneJournal(id).then(res => setOneJournal(res.data?.data?.oneJournal))
   
    // console.log(journals)
            // setOneJournal(res.data?.data?.oneJournal))
    // }, [])
    // console.log(oneJournal)

    getOneJournal();
  return (
    <div>
   
        <Nav />
    <form> 

   
    Title: <input type="text" name="title" /><br/>
    journal Entry: <input type="text" name="journalEntry"/><br/>
    Was Today A Good Day? :
    <br/>
    <input type="submit" value="Submit Changes"/>
    </form> 



    </div>
  )}