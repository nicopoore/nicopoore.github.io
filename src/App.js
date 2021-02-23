import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FullResume from './components/FullResume'
import enContent from './rawData/enContent.json'
import esContent from './rawData/esContent.json'

const defaultState = {
  lang: 'es',
  darkMode: false,
  showSidebarMobile: false,
  showSidebarMain: false,
  activeSection: 'about-link',
  about: [...esContent.about],
  timelines: {...esContent.timelines},
  skills: {...esContent.skills},
  projects: [...esContent.projects],
  projectFilter: [],
  contact: {
    location: 'Vicente López, Buenos Aires',
    phone: '15-5526-4650',
    email: 'nicolaspoore@gmail.com',
    github: 'https://github.com/nicopoore',
    linkedin: 'https://www.linkedin.com/in/nicolas-poore/'
  }
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_LANG':
      return {
        ...state,
        lang: action.lang,
        about: state.lang === 'en' ? [...esContent.about] : [...enContent.about],
        timelines: state.lang === 'en' ? {...esContent.timelines} : {...enContent.timelines},
        skills: state.lang === 'en' ? {...esContent.skills} : {...enContent.skills},
        projects: state.lang === 'en' ? [...esContent.projects] : [...enContent.projects],
      }
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebarMobile: action.showSidebarMobile
      }
    case 'TOGGLE_SECTION':
      return {
        ...state,
        showSidebarMain: action.showSidebarMain,
        activeSection: action.activeSection
      }
    case 'ADD_FILTER':
      return {
        ...state,
        projectFilter: [...state.projectFilter, action.tag]
      }
    case 'REMOVE_FILTER':
      return {
        ...state,
        projectFilter: action.projectFilter
      }
    case 'RESET_FILTER':
      return {
        ...state,
        projectFilter: []
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
