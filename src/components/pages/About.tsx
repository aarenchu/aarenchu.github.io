import { useInView } from 'react-intersection-observer';

const About = ({ data, setVisibleSection }) => {
  const { ref } = useInView({
    threshold: 0.25,
    onChange: (inView, entry) => {
      if (inView) setVisibleSection(entry.target.id);
    },
  });

  const profilepic = 'images/' + data.image;

  return (
    <section id='about' ref={ref}>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src={profilepic}
            alt='Aaren Seucharan Profile Pic'
          />
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>

          <p>{data.bio}</p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{data.name}</span>
                <br />
                <span>{data.email}</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a href={data.resumedownload} className='button' download>
                  <i className='fa fa-download'></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
