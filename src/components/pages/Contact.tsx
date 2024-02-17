import { ResumeDataMainProps } from '../../types/ResumeDataTypes';

const Contact = ({ data }: ResumeDataMainProps) => {
  const handleChange = () => {};
  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className='ten columns'>
          <p className='lead'>{data.contactmessage}</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          <form action='' method='post' id='contactForm' name='contactForm'>
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue=''
                  id='contactName'
                  name='contactName'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue=''
                  id='contactEmail'
                  name='contactEmail'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  defaultValue=''
                  // size='35'
                  id='contactSubject'
                  name='contactSubject'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea id='contactMessage' name='contactMessage'></textarea>
              </div>

              <div>
                <button className='submit'>Submit</button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </fieldset>
          </form>

          <div id='message-warning'> Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Email Address</h4>
            <p className='address'>
              <span>aarenchu@gmail.com</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
