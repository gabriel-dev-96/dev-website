import netflixme from '../assets/projects_images/netflixme.PNG'
import chatapp from '../assets/projects_images/chatapp.JPG'
import hardware_store from '../assets/projects_images/hardware_store.jpg'
import portfolio from '../assets/projects_images/portfolio.JPG'
import COVID from '../assets/projects_images/COVID.jpg'
import websiteme from '../assets/projects_images/websiteme.PNG'

const data_projects = [
    {
        name: 'Netflix Clone',
        image: netflixme,
        deployed_url: 'https://dev-netflix.herokuapp.com/',
        github_url: 'https://github.com/gabriel-dev-96/dev-netflix',
        category: ['django', 'react']
    },
    
    {
        name: 'Website',
        image: websiteme,
        deployed_url: 'https://dev-website-portafolio.herokuapp.com/',
        github_url: 'https://github.com/gabriel-dev-96/dev-website',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: '#',
        github_url: '#',
        category: ['react.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: '#',
        github_url: '#',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '!#',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: '#',
        category: ['vanilla']
    }
]

export default data_projects;