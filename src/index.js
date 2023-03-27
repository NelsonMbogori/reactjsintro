/*components are js functions*/
/*they return htm*/
/*when installing libraries you dont need to specify path*/
import React from "react";
import  ReactDOM  from "react-dom/client";
/*when importing our own files you need to specify path*/
import './index.css';//import css in js file

function BookList(){
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}
function Book(){
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}
const Image  = ()=> <h2><img src="https://m.media-amazon.com/images/I/91zjmw1z7BL._AC_UL480_FMwebp_QL65_.jpg"/></h2>

const Title  = ()=> <h2>Stolen Youth: How Radicals Are Erasing Innocence and Indoctrinating a Generation</h2>

const Author  = ()=> <h2>Karol Markowicz and Bethany Mandel</h2>



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)