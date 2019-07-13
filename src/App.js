import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import DummyStore from './dummy-store';
import NavLinks from './Nav/Nav';
import NotesListPage from './NotesListPage/NotesListPage';
import NotePage from './NotePage/NotePage';
import './App.css'
import SpangleyFolder from './SpangleyFolder/SpangleyFolder';
import SuperFolder from './SuperFolder/SuperFolder';
import ImportantFolder from './ImportantFolder/ImportantFolder';

//all Routes will have same header
//state will be passed in by fake responseJson object 

class  App extends React.Component {

  state = {
    folders: [],
    notes: []
  }
  
  componentDidMount(){
    this.setState(DummyStore)
  }


  render(){
    console.log(this.state);

    return (
      <div className="App">
        <nav className="navBar">
        <Route path='/' component={NavLinks}/>
          
        </nav>

        <header className="app-title">
          <Link to="/"><h1>Noteful</h1></Link>
        </header>

        <main>

          <Switch>

            <Route exact path='/' component={NotesListPage} />
            
            <Route path="/folder/:folderId" component={SpangleyFolder}/>
            <Route path="/folder/:folderId" component={SuperFolder}/>
            <Route path="/folder/:folderId" component={ImportantFolder}/>

            <Route path="/note/:noteId" component ={NotePage} /> {/*Route component is passing down it's props */}

          </Switch>

          

        </main>

      </div>
    );

  }
  
}

export default App;
