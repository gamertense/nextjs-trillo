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
  </div>
)

export default Home
