import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='linkBlock'>
        <div className='groupLink'>
          <h4>Group link one</h4>
          <ul>
            <li><a href='#'>footer link</a></li>
            <li><a href='#'>footer link</a></li>
            <li><a href='#'>footer link</a></li>
          </ul>
        </div>
        <div className='groupLink'>
          <h4>Group link two</h4>
          <ul>
            <li><a href='#'>footer link</a></li>
            <li><a href='#'>footer link</a></li>
            <li><a href='#'>footer link</a></li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>
          Movie search app with omdbapi <br />
          <i>CinemaSeeker service, {new Date().getFullYear()} ©</i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;