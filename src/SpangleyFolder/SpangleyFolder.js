import React from 'react';
import {Link} from 'react-router-dom';
import DummyStore from '../dummy-store';




class SpangleyFolder extends React.Component {

    findNotes= (note)=>{
        return note.folderId === DummyStore.folders[2].id
    }

    render(){
        const SpangleyNotes = DummyStore.notes.filter(this.findNotes);
        console.log(SpangleyNotes);
         
        return(
            <>
            <p>click on a note or on a folder</p>
            <ul className="NotesList">
                {SpangleyNotes.map(note=> {
                    
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

export default SpangleyFolder;