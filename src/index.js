/*components are js functions*/
/*they return htm*/
/*when installing libraries you dont need to specify path*/
import React from "react";
import  ReactDOM  from "react-dom/client";
/*when importing our own files you need to specify path*/
/*local imgaes should be in the src folder*/
/* when writing css within the js file use the style attribute and then provide a json object
eg <h4 style={{color:'black'}}></h4>
/*props pass data to individual components. a prop is only displayed if it is provided*/

import './index.css';//import css in js file
import {books} from './books'
import Book from './Book';

function BookList(){
    const text = 'random text'
    function getBook (id){
          //accepts  id as an argument and returns the book
          const book = books.find((book) => book.id === id);
          console.log(book)
    }
    return <section className='booklist'>
    {books.map((book) => {
      const { img, title, author, id } = book;
      return <Book {...book} key={id} getBook = {getBook} />;
    })}
  </section>
}
const Title = 'Stolen Youth: How Radicals Are Erasing Innocence and Indoctrinating a Generation';

const Image  = ()=> <h2><img src="https://m.media-amazon.com/images/I/91zjmw1z7BL._AC_UL480_FMwebp_QL65_.jpg"/></h2>


const Author  = ()=> <h4>Karol Markowicz and Bethany Mandel</h4>



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)

//handling events
// function handleButtonClick  (){
//     alert("Click");
// }
// return (
//     <section>
//         <button onClick={handleButtonClick}></button>
//     </section>
// )
const EventExamples = () => {
    const handleFormInput = () => {
      console.log('handle form input');
    };
    const handleButtonClick = () => {
      alert('handle button click');
    };
    return (
      <section>
        <form>
          <h2>Typical Form</h2>
          <input
            type='text'
            name='example'
            onChange={handleFormInput}
            style={{ margin: '1rem 0' }}
          />
        </form>
        <button onClick={handleButtonClick}>click me</button>
      </section>
    );
  };