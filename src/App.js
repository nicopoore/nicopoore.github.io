import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FullResume from './components/FullResume'

const defaultState = {
  lang: 'es',
  darkMode: false,
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_LANG':
      return {
        ...state,
        lang: action.lang,
      }
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    case 'TOGGLE_SECTION':
      return {
        ...state,
        activeSection: action.activeSection
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className="AppWrap">
        <FullResume />
      </div>
    </Provider>
  );
}

export default App;
