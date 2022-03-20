import React, { useRef, useState } from 'react'
import './ISBNFile.scss'
import axios,{ pythonAxios } from '../../api/axios'
function ISBNFile({setBook}) {
    const inputFile = useRef();
    const [file, setfile] = useState(null);
    const [isbn, setISBN] = useState('');
    const handler = async () => {
        let searchIsbn = null;
        if (isbn == '') {
            try {
                let base64 = await fileToBase64();
                base64 = base64.split(',')[1].replaceAll('+', '-').replaceAll('/', '_')
                const res = await pythonAxios.post(`/barcodereader`,JSON.stringify({image:base64}))
                searchIsbn = res.data.barcodedata
                console.log(searchIsbn);
            } catch (error) {
                alert(error);
            }
        }
        else {
            searchIsbn = isbn;
        }
        const res = await axios.get(`/Search/Book/isbn`,
            {
                params: {
                    query: searchIsbn,
                    curPage: 0,
                    pageSize: 1
                }
            })
            const data = res.data
            if(data!=[]){
              setBook(data[0])
            }
    }
    const fileToBase64 = () => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(inputFile.current.files[0])
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
            <button onClick={handler}>Find with ISBN</button>
        </span>

    )
}

export default ISBNFile