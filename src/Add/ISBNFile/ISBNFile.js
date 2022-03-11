import React, { useRef,useState } from 'react'
import './ISBNFile.scss'
function ISBNFile() {
    const inputFile=useRef();
    const [file, setfile] = useState(null);
    const [isbn, setISBN] = useState('');
    return (
        <span className='isbn'>
             <span className='isbn-input'>
            <label htmlFor="isbn">ISBN:</label>
            <input type="text" id='isbn'value={isbn}onChange={(e)=>setISBN(e.target.value)}/></span>
        <span>
            <label htmlFor="">Or</label>
        </span>
        <span className='ISBNFile'>
            {file?file:'Choose file'}
            <input ref={inputFile} type="file" className='hideIsbn' onChange={()=>setfile(inputFile.current.files[0].name)}/>
        </span>
        <button>Find with ISBN</button>
        </span>
        
    )
}

export default ISBNFile