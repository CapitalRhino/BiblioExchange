import React, { useRef, useState } from 'react'
import './ISBNFile.scss'
// import axios
function ISBNFile() {
    const inputFile = useRef();
    const [file, setfile] = useState(null);
    const [isbn, setISBN] = useState('');
    const handler = async () => {
        if (isbn == '') {
            try {
                const base64 = await fileToBase64();
                console.log();
            } catch (error) {
                alert(error);
            }
        }
        else{
            
        }



    }
    const fileToBase64 = () => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(inputFile)
            fileReader.onload = () => {
                res(fileReader.result)
            }
            fileReader.onerror = (err) => {
                rej(err);
            }
        })
    }
    return (
        <span className='isbn'>
            <span className='isbn-input'>
                <label htmlFor="isbn">ISBN:</label>
                <input type="text" id='isbn' value={isbn} onChange={(e) => setISBN(e.target.value)} /></span>
            <span>
                <label htmlFor="">Or</label>
            </span>
            <span className='ISBNFile'>
                {file ? file : 'Choose file'}
                <input ref={inputFile} type="file" className='hideIsbn' onChange={() => setfile(inputFile.current.files[0].name)} />
            </span>
            <button>Find with ISBN</button>
        </span>

    )
}

export default ISBNFile