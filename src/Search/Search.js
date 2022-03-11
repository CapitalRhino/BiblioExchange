import React,{useState} from 'react'
import SearchMenu from './SearchMenu/SearchMenu'
import './Search.scss'
import BookListSearch from '../Books/BookListSearch'
function Search() {
  const [title, setTitle] = useState('')
  return (
    <section className='Search'>
      <SearchMenu setTitle={setTitle}/>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptas nobis. Dolorem esse deleniti delectus, dicta assumenda molestiae nisi, inventore unde blanditiis beatae mollitia omnis qui pariatur veritatis, quod sit.</p>
             {title!=''? <BookListSearch title={title}/>:<></>}

      </article>
    </section>
  )
}

export default Search