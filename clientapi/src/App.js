import AppRouter from './Router';
import { store } from './Store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store} >
  <AppRouter />
  </Provider>
  );
}

export default App;