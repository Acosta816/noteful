import React from 'react';
import {Link} from 'react-router-dom';
import DummyStore from '../dummy-store';




class ImportantFolder extends React.Component {

    findNotes= (note)=>{
        return note.folderId === DummyStore.folders[0].id
    }

    render(){
        const ImportantNotes = DummyStore.notes.filter(this.findNotes);
        console.log(ImportantNotes);
         
        return(
            <>
            <p>click on a note or on a folder</p>
            <ul className="NotesList">
                {ImportantNotes.map(note=> {
                    
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

export default ImportantFolder;