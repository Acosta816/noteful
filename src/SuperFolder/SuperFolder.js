import React from 'react';
import {Link} from 'react-router-dom';
import DummyStore from '../dummy-store';




class SuperFolder extends React.Component {

    findNotes= (note)=>{
        return note.folderId === DummyStore.folders[1].id
    }

    render(){
        const SuperNotes = DummyStore.notes.filter(this.findNotes);
        console.log(SuperNotes);
         
        return(
            <>
            <p>click on a note or on a folder</p>
            <ul className="NotesList">
                {SuperNotes.map(note=> {
                    
                    return(
                        <li key={note.id}>
                            <Link to={`/note/${note.id}`}>
                                {note.name}
                            </Link>
                        </li>
                    )
                })}
            
            </ul>
            </>
        )
    }
}

export default SuperFolder;