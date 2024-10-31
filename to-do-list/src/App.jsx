import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import { Footer } from './components/Footer'
import Newnote from './components/Newnote'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <Note onAdd={addNote}/>
      <div id='notes'>
      {notes.map((noteItem, index) => {
        return (
          <Newnote 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
      </div>
      <Footer />
    </>
  )
}

export default App
