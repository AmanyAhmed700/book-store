import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import { useState, useContext } from "react";
import BookStoreContext from "../../context/bookStorContext";
import "./book.css";

const BookPage = () => {
  const { addToCart, cartInfo } = useContext(BookStoreContext);
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  // Find the book by ID, ensuring it's converted to a number with +id
  const book = books.find((b) => b.id === +id);
  
  // Handler for quantity change
  const handleQtyChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQty(value);
    }
  };
  
  // Handler for add to cart
  const handleAddToCart = () => {
    if (book) {
      console.log('Adding to cart:', book.title, 'quantity:', qty);
      addToCart(book, qty);
      console.log('Current cart after adding:', cartInfo);
    }
  };

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={handleQtyChange}
            />
            <button
              onClick={handleAddToCart}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        molestiae corporis facere minima consequuntur, blanditiis voluptatem
        praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
        nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
        consequatur doloribus laborum adipisci quo voluptates dolorum cumque
        tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Laudantium fugit illo porro
        perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
        voluptate eveniet libero debitis consequuntur nostrum reiciendis
        officiis delectus rem.
      </p>

      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
