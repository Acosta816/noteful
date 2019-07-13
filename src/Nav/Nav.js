import React from 'react';
import {Link} from 'react-router-dom';
import dummyStore from '../dummy-store';



class Nav extends React.Component {

    render(){
        console.log(this.props);

        return(
            <>
                <ul className="FolderListNav">
                    {
                        dummyStore.folders.map(folder=>{
                            return(
                                <li key={folder.id}>
                                    <Link to={`/folder/${folder.id}`}>
                                        {folder.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </>

        )
    }
}

export default Nav;