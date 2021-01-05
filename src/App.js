import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FullResume from './components/FullResume'

const enContent = {
  about: [
    "I'm a full stack developer, currently deepening my knowledge of Advanced JavaScript Development, particularly frameworks with a MERN stack focus, after having finished two degrees in Javascript web development.",
    "Constantly focusing on design, I'm experienced in Web Development, 3D modelling, Adobe Creative Suite, with a strong passion for programming and innovation. I have Full Stack Web Development Certifications from FCC and EducacionIT.",
    "In my free time I love watching movies (you can find me on Letterboxd!), playing the piano (plus sucking at the guitar), programming, and learning."
  ],
  timelines: {
    experienceArray: [
      {
        id: "juno",
        title: "Juno Clases",
        subtitle: "Web Development",
        date: {
          from: "Mar 2017",
          to: "Mar 2018"
        },
        desc: "Co-Founder and developer of Juno, an online platform to connect people in need of at-home tutoring, with tutors available near them, to make it easier to schedule, pay, and enjoy classes in the comfort of your own home, as well as help tutors find work.\n\nIn charge of online marketing execution, set-up and maintenance of its website and social networks, and responsible for Juno's online platform."
      },
      {
        id: "kaeser",
        title: "Kaeser Kompressoren",
        subtitle: "Applications Engineering",
        date: {
          from: "Jan 2018",
          to: "Oct 2020",
        },
        desc: "Planning, design and execution of efficient compressed air systems, interpreting and capturing the team and the clients’ ideas. Development of the Kaeser Kompressoren Engineering Blog."
      }
    ],
    formalEdArray: [
      {
        id: "sanlu",
        title: "St. Luke's College",
        subtitle: "Secondary Education in Hard Sciences",
        date: {
          from: "2011",
          to: "2016"
        },
        desc: ''
      },
      {
        id: "uba",
        title: "University of Buenos Aires",
        subtitle: "Software Engineering",
        date: {
          from: "2017",
          to: "Present"
        },
        desc: ''
      }
    ],
    personalEdArray: [
      {
        id: "igcse",
        title: "University of Cambridge",
        subtitle: "IGCSE",
        date: "2015",
        desc: "International Certificate of Education with Merit"
      },
      {
        id: "edIT",
        title: "EducacionIT",
        subtitle: "JavaScript Advanced Developer",
        date: "2020",
        desc: "Currently finishing the Advanced Full Stack Javascript Developer degree in EducaciónIT, which includes React, Node, OOP, Progressive Web Apps, among other classes."
      },
      {
        id: "fcc",
        title: "freeCodeCamp",
        subtitle: "Full Stack Development Certification",
        date: "2020",
        desc: "Including the following four modules: Responsive Web Design, Javascript Algorithm Scripting, Front End Libraries, APIs and Microservices"
      }
    ]
  },
  skills: {
    technical: [
      {
        code: "htmlcss",
        name: "HTML5/CSS3",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "js",
        name: "JavaScript",
        keywords: [
          "programming",
          "frontend",
          "backend"
        ],
        level: "advanced"
      },
      {
        code: "react",
        name: "ReactJS/Redux",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "ps",
        name: "Adobe Photoshop",
        keywords: [
          "design",
          "tools"
        ],
        level: "advanced"
      },
      {
        code: "node",
        name: "NodeJS",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "express",
        name: "Express",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "mongo",
        name: "MongoDB/Mongoose",
        keywords: [
          "programming",
          "backend",
          "databases"
        ],
        level: "intermediate"
      },
      {
        code: "chai",
        name: "Chai (QA)",
        keywords: [
          "programming",
          "backend",
          "QA"
        ],
        level: "basic"
      },
      {
        code: "python",
        name: "Python",
        keywords: [
          "programming",
          "backend"
        ],
        level: "basic"
      },
      {
        code: "django",
        name: "Django",
        keywords: [
          "programming",
          "backend",
          "frontend"
        ],
        level: "basic"
      }
    ],
    languages: [
      {
        code: "es",
        lang: "Spanish",
        fluency: "C2",
        level: 100,
        desc: "Native language"
      },
      {
        code: "en",
        lang: "English",
        fluency: "C2",
        level: 100,
        desc: "Grade A (94/100) in English as a First Language, certified by the University of Cambridge."
      },
      {
        code: "de",
        lang: "German",
        fluency: "A2",
        level: 33,
        desc: "Currently studying at Goethe-Institut."
      },
      {
        code: "fr",
        lang: "French",
        fluency: "A1",
        level: 10,
        desc: "Basic communicational proficiency in French, certified by the Alliance française."
      }
    ]
  },
  projects: [
    {
      id: 1,
      name: "Technical Documentation Page",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript"
      ],
      url: "https://nicopoore.github.io/technical-documentation/",
      repo: "https://github.com/nicopoore/technical-documentation"
    },
    {
      id: 2,
      name: "Landing Page",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap"
      ],
      url: "https://nicopoore.github.io/landing-page/",
      repo: "https://github.com/nicopoore/landing-page"
    },
    {
      id: 3,
      name: "Random Quote Machine",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/random-quote-machine/",
      repo: "https://github.com/nicopoore/random-quote-machine"
    },
    {
      id: 4,
      name: "Markdown Previewer",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/markdown-previewer/",
      repo: "https://github.com/nicopoore/markdown-previewer"
    },
    {
      id: 5,
      name: "Drum Machine",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/drum-machine/",
      repo: "https://github.com/nicopoore/drum-machine"
    },
    {
      id: 6,
      name: "Calculator",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-calculator/",
      repo: "https://github.com/nicopoore/react-calculator"
    },
    {
      id: 7,
      name: "Pomodoro Timer",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-pomodoro/",
      repo: "https://github.com/nicopoore/react-pomodoro"
    },
    {
      id: 8,
      name: "Timestamp Microservice",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://evening-wave-75791.herokuapp.com/",
      repo: "https://github.com/nicopoore/timestamp-service"
    },
    {
      id: 9,
      name: "Request Header Parser",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://pure-brushlands-16955.herokuapp.com/",
      repo: "https://github.com/nicopoore/request-header-parser"
    },
    {
      id: 10,
      name: "URL Shortener",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://mysterious-hamlet-01922.herokuapp.com/",
      repo: "https://github.com/nicopoore/url-shortener"
    },
    {
      id: 11,
      name: "File Metadata Parser",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://enigmatic-fjord-43448.herokuapp.com/",
      repo: "https://github.com/nicopoore/file-metadata"
    },
    {
      id: 12,
      name: "Exercise Tracker",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://secret-cove-94553.herokuapp.com/",
      repo: "https://github.com/nicopoore/exercise-tracker"
    }
  ]
}

const esContent = {
  about: [
    "Soy desarrollador full-stack, actualmente profundizando mis conocimientos de Desarrollo Avanzado Javascript, especialmente focalizado a frameworks de stack MERN, después de haber terminado dos carreras de desarrollo en Javascript junto con diversos proyectos.",
    "Me caracterizo por una tendencia al diseño -calificado en modelado 3D, desarrollo web y Adobe Creative Suit- y el desarrollo de herramientas para solucionar problemas. Cuento con certificados de desarrollo web Full Stack de FCC y EducacionIT.",
    "En mi tiempo libre me encanta ver peliculas (estoy en Letterboxd!), tocar el piano (o fallar intentando tocar la guitarra), programar y aprender."
  ],
  timelines: {
    experienceArray: [
      {
        id: "juno",
        title: "Juno Clases",
        subtitle: "Desarrollo Web",
        date: {
          from: "Mar 2017",
          to: "Mar 2018"
        },
        desc: "Co-Fundador y desarrollador de Juno, una plataforma online que conecta a personas con necesidad de clases particulares, con tutores, maestros y/o profesores disponibles cerca de ellos, para facilitarle a los alumnos la reserva, pago, y disfrute de clases en la comodidad de tu casa, y a los tutores a encontrar clases para dar."
      },
      {
        id: "kaeser",
        title: "Kaeser Kompressoren",
        subtitle: "Ingeniería en Aplicaciones",
        date: {
          from: "Ene 2018",
          to: "Oct 2020",
        },
        desc: "Planificación, diseño y ejecución de eficientes sistemas de aire comprimido, interpretando y plasmando eficientemente las ideas transmitidas por el equipo de trabajo y los clientes. Desarrollo del blog de ingeniería de Kaeser Kompressoren Argentina."
      }
    ],
    formalEdArray: [
      {
        id: "sanlu",
        title: "St. Luke's College",
        subtitle: "Título Secundario en Exactas",
        date: {
          from: "2011",
          to: "2016"
        },
        desc: ''
      },
      {
        id: "uba",
        title: "Universidad de Buenos Aires",
        subtitle: "Ingeniería Informática",
        date: {
          from: "2017",
          to: "Presente"
        },
        desc: ''
      }
    ],
    personalEdArray: [
      {
        id: "igcse",
        title: "University of Cambridge",
        subtitle: "IGCSE",
        date: "2015",
        desc: "International Certificate of Education with Merit (Certificado Internacional de Educación con Méritos)"
      },
      {
        id: "edIT",
        title: "EducacionIT",
        subtitle: "Desarrollador Avanzado JavaScript",
        date: "2020",
        desc: "Actualmente terminando la carrera de desarrollador avanzado full stack JavaScript en EducacionIT, que incluye cursos en React, Node, OOP, Progressive Web Apps, entre otros."
      },
      {
        id: "fcc",
        title: "freeCodeCamp",
        subtitle: "Certificación de Desarrollador Full Stack",
        date: "2020",
        desc: "Incluyendo los siguientes módulos: Desarrollo Web Responsive, Algoritmos Javascript, Librerías Front End, APIs y Microservicios"
      }
    ]
  },
  skills: {
    technical: [
      {
        code: "htmlcss",
        name: "HTML5/CSS3",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "js",
        name: "JavaScript",
        keywords: [
          "programming",
          "frontend",
          "backend"
        ],
        level: "advanced"
      },
      {
        code: "react",
        name: "ReactJS/Redux",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "ps",
        name: "Adobe Photoshop",
        keywords: [
          "design",
          "tools"
        ],
        level: "advanced"
      },
      {
        code: "node",
        name: "NodeJS",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "express",
        name: "Express",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "mongo",
        name: "MongoDB/Mongoose",
        keywords: [
          "programming",
          "backend",
          "databases"
        ],
        level: "intermediate"
      },
      {
        code: "chai",
        name: "Chai (QA)",
        keywords: [
          "programming",
          "backend",
          "QA"
        ],
        level: "basic"
      },
      {
        code: "python",
        name: "Python",
        keywords: [
          "programming",
          "backend"
        ],
        level: "basic"
      },
      {
        code: "django",
        name: "Django",
        keywords: [
          "programming",
          "backend",
          "frontend"
        ],
        level: "basic"
      }
    ],
    languages: [
      {
        code: "es",
        lang: "Español",
        fluency: "C2",
        level: 100,
        desc: "Lenguaje nativo"
      },
      {
        code: "en",
        lang: "Inglés",
        fluency: "C2",
        level: 100,
        desc: "Grado A (94/100) en Inglés como Primer Lenguaje, certificado por la Universidad de Cambridge."
      },
      {
        code: "de",
        lang: "Alemán",
        fluency: "A2",
        level: 33,
        desc: "Actualmente estudiando en el Goethe-Institut."
      },
      {
        code: "fr",
        lang: "Francés",
        fluency: "A1",
        level: 10,
        desc: "Nivel de comunicación básica en francés, certificado por la Alliance française."
      }
    ]
  },
  projects: [
    {
      id: 1,
      name: "Página de doc. técnica",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript"
      ],
      url: "https://nicopoore.github.io/technical-documentation/",
      repo: "https://github.com/nicopoore/technical-documentation"
    },
    {
      id: 2,
      name: "Landing Page",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap"
      ],
      url: "https://nicopoore.github.io/landing-page/",
      repo: "https://github.com/nicopoore/landing-page"
    },
    {
      id: 3,
      name: "Máquina de frases",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/random-quote-machine/",
      repo: "https://github.com/nicopoore/random-quote-machine"
    },
    {
      id: 4,
      name: "Visualizador Markdown",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/markdown-previewer/",
      repo: "https://github.com/nicopoore/markdown-previewer"
    },
    {
      id: 5,
      name: "App de pads",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/drum-machine/",
      repo: "https://github.com/nicopoore/drum-machine"
    },
    {
      id: 6,
      name: "Calculadora",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-calculator/",
      repo: "https://github.com/nicopoore/react-calculator"
    },
    {
      id: 7,
      name: "Temporizador Pomodoro",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-pomodoro/",
      repo: "https://github.com/nicopoore/react-pomodoro"
    },
    {
      id: 8,
      name: "Microservicio de tiempo",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://evening-wave-75791.herokuapp.com/",
      repo: "https://github.com/nicopoore/timestamp-service"
    },
    {
      id: 9,
      name: "Lector de Request Header",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://pure-brushlands-16955.herokuapp.com/",
      repo: "https://github.com/nicopoore/request-header-parser"
    },
    {
      id: 10,
      name: "Acortador de URLs",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://mysterious-hamlet-01922.herokuapp.com/",
      repo: "https://github.com/nicopoore/url-shortener"
    },
    {
      id: 11,
      name: "Lector de Metadata",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://enigmatic-fjord-43448.herokuapp.com/",
      repo: "https://github.com/nicopoore/file-metadata"
    },
    {
      id: 12,
      name: "Log de ejercicio",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://secret-cove-94553.herokuapp.com/",
      repo: "https://github.com/nicopoore/exercise-tracker"
    }
  ]
}

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
