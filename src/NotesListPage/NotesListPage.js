import React from 'react';
import DummyStore from '../dummy-store';
import {Link} from 'react-router-dom';



function NotesListPage(props) {


    return(
        <>
        <p>click on a note or on a folder</p>
        <ul className="NotesList">
            {DummyStore.notes.map((note,index)=> {
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


export default NotesListPage;