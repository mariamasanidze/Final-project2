import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList

// import React from 'react';
// import { useGlobalContext } from '../../context.'; // Import global context
// import Book from "../BookList/Book";
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";

// const BookList = () => {
//   const { books, loading, resultTitle, addToFavorites } = useGlobalContext(); // Access addToFavorites from context

//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // Removing /works/ to get only the ID
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id 
//         ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` 
//         : coverImg,
//     };
//   });

//   if (loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {booksWithCovers.slice(0, 30).map((book, index) => (
//             <div key={index} className="book-item-wrapper">
//               <Book {...book} />
//               {/* Add to Favorites Button */}
//               <button
//                 className="btn btn-primary add-to-favorites-btn"
//                 onClick={() => addToFavorites(book)}
//               >
//                 Add to Favorites
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookList;

// import React from 'react';
// import { useGlobalContext } from '../../context'; // Import global context
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import Book from "../BookList/Book";
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";

// const BookList = () => {
//   const { books, loading, resultTitle, addToFavorites } = useGlobalContext(); // Access addToFavorites from context

//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // Removing /works/ to get only the ID
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id 
//         ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` 
//         : coverImg,
//     };
//   });

//   if (loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {booksWithCovers.slice(0, 30).map((book, index) => (
//             <div key={index} className="book-item-wrapper">
//               <Book {...book} />
//               {/* Add to Favorites Button */}
//               <button
//                 className="btn btn-primary add-to-favorites-btn"
//                 onClick={() => addToFavorites(book)}
//               >
//                 Add to Favorites
//               </button>
//             </div>
//           ))}
//         </div>
//         {/* Link to the Favorites Page */}
//         <div className='favorites-link'>
//           <Link to="/favorites" className="btn btn-secondary">
//             Go to Favorites Page
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookList;
