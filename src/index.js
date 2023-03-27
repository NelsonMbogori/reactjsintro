/*components are js functions*/
/*they return htm*/
/*when installing libraries you dont need to specify path*/
import React from "react";
import  ReactDOM  from "react-dom/client";
/*when importing our own files you need to specify path*/
/*local imgaes should be in the src folder*/
/* when writing css within the js file use the style attribute and then provide a json object
eg <h4 style={{color:'black'}}></h4>
*/ 
import './index.css';//import css in js file

function BookList(){
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        
    </section>
}
const Title = 'Stolen Youth: How Radicals Are Erasing Innocence and Indoctrinating a Generation';
function Book(){
    return (
        <article className="book">
            <Image/>
            <h2>{Title}</h2>
            <Author/>
        </article>
    );
};
const Image  = ()=> <h2><img src="https://m.media-amazon.com/images/I/91zjmw1z7BL._AC_UL480_FMwebp_QL65_.jpg"/></h2>


const Author  = ()=> <h4>Karol Markowicz and Bethany Mandel</h4>



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)