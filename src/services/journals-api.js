import axios from "axios"

const baseURL = 'http://localhost:3005/journals'

export const getJournals = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getOneJournal = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const editJournal = (id , updatedJournal) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedJournal)
    return response

}

export const createJournal = (journal) => {
    const URL = baseURL
    const response = axios.post(URL, journal)
    return response
}
export const deleteJournal = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}




// import { useEffect, useState } from "react";


// export default function journalapi (props) {
// //     const journalApiURL = 'http://localhost:3005/journals'
    
//     // const [journal, setJournal] = useState(null);


// // //ALL JOURNALS
// //      const getJournals = async () => {
// //         const URL = journalApiURL
// //         const response = await fetch(URL);
// //         const data = await response.json();
// //         setJournal (data);
// //     };
// //     useEffect(() => {
// //         getJournals();
// //         }, []);

// //         const loaded = () => {
// //             console.log(journal.title)
// //             return (
// //               <div>
// //                 <h1>
// //                 Title: {journal.title}
// //                 </h1>
// //                 <h2>
// //                 Journal Entry: {journal.journalEntry}
// //                 </h2>
// //                 <h2>
// //                Date: {journal.date}
// //                 </h2>
// //               </div>
// //             );
// //           };

// //           const loading = () => {
// //             return <h1>Loading...</h1>;
// //            };


// //      const getAffirms = () => {

// // }
// // return journal && journal ? loaded() : loading();
// }