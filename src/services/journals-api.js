import axios from "axios"

const baseURL = 'http://localhost:3005/journals'
const baseURLRender = ''

export const getJournals = async () => {
    const URL = baseURL
    const response = await axios.get(URL)
    return response
}

export const getOneJournal = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.get(URL)
    console.log(response)
    return response
}

export const editJournal = async (id, data) => {
    const URL = `${baseURL}/${id}`
    console.log('URL', URL)
    const response = await axios.put(URL, data)
    console.log(response)
    return response

}

export const createJournal = async (journal) => {
    const URL = baseURL
    const response = await axios.post(URL, journal)
    return response
}
export const deleteJournal = async (id) => {
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