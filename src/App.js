/* eslint-disable prettier/prettier */
import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryElement = props => {
  const {item, fun} = props
  const {logoUrl, domainUrl, timeAccessed, title, id} = item

  const deleteItem = () => {
    fun(id)
  }

  return (
    <li className="history-container">
      <p className="history-time">{timeAccessed}</p>
      <div className="more-history-container">
        <img className="url-logo" alt="domain logo" src={logoUrl} />
        <p className="history-title">{title}</p>
        <p className="history-url">{domainUrl}</p>
      </div>
      <button
        // eslint-disable-next-line no-undef
        className="delete-button"
        type="button"
        onClick={deleteItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    realHistoryList: initialHistoryList,
  }

  changeValues = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = uniqueNo => {
    const {realHistoryList} = this.state
    const notDeletedList = realHistoryList.filter(i => i.id !== uniqueNo)
    this.setState({
      realHistoryList: notDeletedList,
    })
  }

  render() {
    const {searchInput, realHistoryList} = this.state

    const newHistoryList = realHistoryList.filter(i =>
      i.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = newHistoryList.length

    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="search-element"
              placeholder="Search history"
              onChange={this.changeValues}
            />
          </div>
        </nav>
        {count !== 0 ? (
          <div className="card-parent-container">
            <ul className="card-container">
              {newHistoryList.map(i => (
                <HistoryElement fun={this.deleteHistory} item={i} key={i.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="no-element">
            <p className="comment">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

const App = () => <BrowserHistory />

export default App
