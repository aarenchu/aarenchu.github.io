import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = ({ data, setVisibleSection }) => {
  const { ref } = useInView({
    threshold: 0.25,
    onChange: (inView, entry) => {
      if (inView) setVisibleSection(entry.target.id);
    },
  });

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setStatus('idle');

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setErrorMessage('Please fill in name, email, and message.');
      setStatus('error');
      return;
    }

    if (!validateEmail(contactEmail)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(
      contactSubject || 'Contact from website',
    );
    const body = encodeURIComponent(
      `Name: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`,
    );

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id='contact' ref={ref}>
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
          <form
            id='contactFormReact'
            name='contactFormReact'
            onSubmit={handleSubmit}
            noValidate
          >
            {status === 'error' && (
              <div id='message-warning'>{errorMessage}</div>
            )}
            {status === 'success' && (
              <div id='message-success'>
                <i className='fa fa-check'></i>Your email client should open
                now.
                <br />
              </div>
            )}
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  value={contactName}
                  id='contactName'
                  name='contactName'
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='email'
                  value={contactEmail}
                  id='contactEmail'
                  name='contactEmail'
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  value={contactSubject}
                  id='contactSubject'
                  name='contactSubject'
                  onChange={(e) => setContactSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  id='contactMessage'
                  name='contactMessage'
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button type='submit' className='submit'>
                  Submit
                </button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Email Address</h4>
            <p className='address'>
              <span>{data.email}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
