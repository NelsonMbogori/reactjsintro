function Book(props){
    const {img, title, author, getBook, id} = props;
    function getSingleBook ( ){
      //this is a wrap around function that prevents getBooks from being called immediately the page is loaded
      getBook(id)
    }
    return (
        <article className="book">
            <img src={img}></img>
            <h2>{title}</h2>
            <button onClick = {getSingleBook}>click me</button>
            <button onClick ={() => getBook(id)}>click me</button>
            <p>{author}</p>
            
        </article>
    );
};
export default Book;