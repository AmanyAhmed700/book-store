# Book Store React Application

A modern React-based e-commerce web application for browsing and purchasing books online. This application demonstrates core React concepts including context-based state management, routing, and component composition.

![Book Store App](https://github.com/ozidan13/booksstorereact/raw/main/public/screenshot.png)

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

## Debugging Documentation

For information about resolved issues and debugging solutions, see [DEBUGGING.md](./DEBUGGING.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
