import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Sidebar, About, Experience, Education } from './components'

const defaultState = {
  lang: 'es',
  darkMode: false,
  showSidebar: true,
  showSidebarToggle: false,
  showSidebarMain: false,
  activeSection: 'about-link',
  experienceArray: [
    {
      title: "Juno Clases",
      subtitle: "Web Development",
      from: "Mar 2017",
      to: "Mar 2018",
      desc: "Co-Founder and developer of Juno, an online platform to connect people in need of at-home tutoring, with tutors available near them, to make it easier to schedule, pay, and enjoy classes in the comfort of your own home, as well as help tutors find work.\n\nIn charge of online marketing execution, set-up and maintenance of its website and social networks, and responsible for Juno's online platform."
    },
    {
      title: "Kaeser Kompressoren",
      subtitle: "Applications Engineering",
      from: "Jan 2018",
      to: "Oct 2020",
      desc: "Planning, design and execution of efficient compressed air systems, interpreting and capturing the team and the clients’ ideas. Development of the Kaeser Kompressoren Engineering Blog."
    }
  ]
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_LANG':
      return {
        ...state,
        lang: action.lang
      }
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebar: action.showSidebar
      }
    case 'TOGGLE_SIDEBAR_BUTTON':
      return {
        ...state,
        showSidebarToggle: action.showSidebarToggle
      }
    case 'TOGGLE_SECTION':
      return {
        ...state,
        showSidebarMain: action.showSidebarMain,
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
      <div className="App">
        <Sidebar />
        <div className="Main">
          <About />
          <div class="divider-1"></div>
          <Experience />
          <div class="divider-2"></div>
          <Education />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
