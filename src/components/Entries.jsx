import { useNavigate } from 'react-router-dom'
import { createJournal } from '../services/journals-api'

function Entries(){
    const nav = useNavigate()

    const createEntry = (event) => {
        const journal = {title: event.target.title.value}
        createJournal(journal).then(() => nav('/journals'))
    }

    return (
        <div>
            <h2> Journal Entry</h2>
            <form onSubmit={createEntry}>
                <input type="text" name="title" placeholder="Title" id='Title'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Entries;