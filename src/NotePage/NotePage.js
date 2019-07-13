import React from 'react';
import dummyStore from '../dummy-store';



function NotePage(props){
    console.log(props);
    const note = dummyStore.notes.find(nt=> {
        return (
            nt.id === props.match.params.noteId
            )
    })

    return(

        <div className="Note">
            <h2>{note.name}</h2>
        
        </div>
    )
}

export default NotePage;