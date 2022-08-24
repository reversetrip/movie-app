import './styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='headerTitle'>
        <h1><a href='#'>CinemaSeeker service</a></h1>
      </div>
      <nav className='headerNavigation'>
        <ul>
          <li><a href='#'>Nav link 1</a></li>
          <li><a href='#'>Nav link 2</a></li>
          <li><a href='#'>Nav link 3</a></li>
          <li><a href='#'>Nav link 4</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;