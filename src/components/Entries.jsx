import { useNavigate } from 'react-router-dom'

function Entries(){
    const nav = useNavigate()

    // const createEntry = (event) => {
    //     const journal = {title: event.target.title.value}
    //     createJournal(journal).then(() => nav('/journals'))
    // }

    return (
        <div>

{/* <div id='JournalForm'>
        <h1> Create New Journal</h1>
            <form onSubmit={handleCreate}>
                     Title: <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
                    date: <input type='textarea' name='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
                    journal Entry: <input type='textarea' value={journalEntry} name='journalEntry' onChange={(e)=> setJournalEntry(e.target.value)}/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'checked={isGoodDay} onChange={(e)=> setIsGoodDay(!isGoodDay)}/><br/>

                    <input type="submit" />

                </form>
</div> */}
        </div>
    )
}

export default Entries;