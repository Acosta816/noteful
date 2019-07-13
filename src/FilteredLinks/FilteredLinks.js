import React from 'react';
import {Link} from 'react-router-dom';
import DummyStore from '../dummy-store';




class FilteredLinks extends React.Component {

    findNotes= (note)=> {
        return note.folderId === this.props.match.params.folderId
    }

    render(){
        const FilteredLinks = DummyStore.notes.filter(this.findNotes);
        console.log(this.props);
         
        return(
            <>
            <p>click on a note or on a folder</p>
            <ul className="NotesList">
                {FilteredLinks.map(note=> {
                    
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

export default FilteredLinks;