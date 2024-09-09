import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
    
   const[text,setText]=useState('')
   const[audioUrl,setAudioUrl]=useState('')
   const[language,setLanguage]=useState('en-US')

   const handleConvertToSpeech=async() =>{
    try{
      const response=await axios.post('http://localhost:5000/api/convert',{
        text,
        language,
      })
      setAudioUrl(response.data.audioUrl)
    }catch(error){
      console.error('error')
    }
   }
  return (
    <div className="App">
       <div className='tts-container'>
        <h1>Text to Speech</h1>
        <textarea
          row="4"
          cols="50"
          placeholder='Enter text here'
          value={text}
          onChange={(e) =>setText(e.target.value)}
        ></textarea><br/>
        <br/>
        <button onClick={handleConvertToSpeech} className='btn'>Convert</button>
        {audioUrl && (
        <div className='download-link'>
          <h3>Download Converted Speech:</h3>
          <a href={audioUrl} download="speech.mp3" className="btn">Download</a>
          <audio controls src={audioUrl}></audio>
        </div>
        )}
       </div>
    </div>
  )
}

export default App
