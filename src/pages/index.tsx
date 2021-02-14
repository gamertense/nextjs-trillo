const Home = () => (
  <div className="container">
    <header className="header">
      <img src="img/logo.png" alt="trillo logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button"></button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img
            src="img/user.jpg"
            alt="User photo"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <img src="/img/sprite.svg#icon-home"></img>
              </svg>
              <span>Hotel</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <img src="/img/sprite.svg#icon-aircraft-take-off"></img>
              </svg>
              <span>Flight</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <img src="/img/sprite.svg#icon-key"></img>
              </svg>
              <span>Car rental</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <img src="img/sprite.svg#icon-map"></img>
              </svg>
              <span>Tours</span>
            </a>
          </li>
        </ul>

        <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
      </nav>
    </div>
  </div>
)

export default Home
