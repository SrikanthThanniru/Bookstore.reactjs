import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {
    isClick: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  scrollOptions = () => (
    <ul className="options-container">
      <li className="nav-menu-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/shelf" className="nav-link">
          Bookshelves
        </Link>
      </li>
      <button className="logout-desktop-button" type="button">
        Logout
      </button>
      <button
        type="button"
        className="close-button"
        onClick={this.onClickNavbar}
      >
        <AiFillCloseCircle className="close-logo" />
      </button>
    </ul>
  )

  onClickNavbar = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick,
    }))
  }

  render() {
    const {isClick} = this.state

    return (
      <nav className="nav-header">
        <div className="nav-content">
          <div className="navbar-mobile-logo-main-container">
            <div className="navbar-mobile-logo-container">
              <Link to="/">
                <h1>BookStore</h1>
              </Link>
              <button
                type="button"
                className="nav-bars-button"
                onClick={this.onClickNavbar}
              >
                <FaBars className="nav-bars" />
              </button>
            </div>
            <div className="scroll-options-container">
              {isClick && this.scrollOptions()}
            </div>
          </div>
          <div className="navbar-desktop-container">
            <Link to="/" className="nav-link">
              <h1 className="h1">BookStore</h1>
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/shelf" className="nav-link">
                  AllBooks
                </Link>
              </li>
              <button
                className="logout-desktop-button"
                onClick={this.onClickLogout}
                type="button"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
