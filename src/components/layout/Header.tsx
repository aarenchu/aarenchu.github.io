import { useInView } from 'react-intersection-observer';
import { ResumeDataMainProps } from '../../types/ResumeDataTypes';

const Header = ({
  data,
  visibleSection,
  setVisibleSection,
}: ResumeDataMainProps & {
  visibleSection: string;
  setVisibleSection: (section: string) => void;
}) => {
  const { ref } = useInView({
    threshold: 0.25,
    onChange: (inView, entry) => {
      if (inView) setVisibleSection(entry.target.id);
    },
  });

  const networks = data.social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <>
      <header id='home' ref={ref}>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className={visibleSection === 'home' ? 'current' : ''}>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li className={visibleSection === 'about' ? 'current' : ''}>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li className={visibleSection === 'resume' ? 'current' : ''}>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li className={visibleSection === 'portfolio' ? 'current' : ''}>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            <li className={visibleSection === 'contact' ? 'current' : ''}>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'> I'm {data.name}</h1>
            <h3>
              A <span>{data.occupation}</span> {data.description}.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    </>
  );
};

export default Header;
