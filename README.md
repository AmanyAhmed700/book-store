# Book Store React Application

A modern React-based e-commerce web application for browsing and purchasing books online. This application demonstrates core React concepts including context-based state management, routing, and component composition.



## Features

- **Book Browsing**: View available books with details like title, author, price, and ratings
- **Shopping Cart**: Add/remove books from your cart with quantity selection
- **State Management**: React Context API for global state management
- **Responsive Design**: Mobile-friendly UI

## Project Structure

```
/src
  /components        # Reusable UI components
  /context           # Context providers and state management
  /data              # Static data (book catalog)
  /pages             # Page components for different routes
  /images            # Static image assets
  App.js             # Main application component
  index.js           # Entry point
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




## Technology Stack

- React 18+
- React Router v6
- Context API for state management
- CSS for styling

## Implementation Details

### Context Structure

The application uses React's Context API to manage the shopping cart state across components:

```jsx
// Context creation
const BookStoreContext = createContext();

// Provider component with state management
const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);
  
  // Methods for cart management
  const addToCart = (item, qty) => { /* ... */ };
  const removeFromCart = (id) => { /* ... */ };
  
  return (
    <BookStoreContext.Provider value={{ cartInfo, addToCart, removeFromCart, cartInfoLength: cartInfo.length }}>
      {children}
    </BookStoreContext.Provider>
  );
};
```

### Component Hierarchy

- `App`: Main component with routing setup
- `BookStoreProvider`: Context provider wrapping the application
- `Header`: Navigation and cart display
- `HomePage`: Landing page with featured books
- `Book`: Individual book page with add-to-cart functionality
- `Cart`: Shopping cart page
