import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'components/contactsSlice'; 
import App from 'components/App';
import './index.css';

// Load from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Load the persisted state from local storage.
const persistedState = loadState();

// Configure the Redux store with the contacts reducer and the persisted state.
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: persistedState,
});

// Save to local storage
store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
