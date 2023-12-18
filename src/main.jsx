import Game from '@/components';
import '@/index.css';
import { store } from '@/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Game />
  </Provider>,
);
