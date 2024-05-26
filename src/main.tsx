import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
