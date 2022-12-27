const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Our contacts:</h1>;
      <div>
        <li className="contact__item">
          <a href="mailto:krasavceva.va@gmail.com" className="contact__mail">
            Связаться
          </a>
          <li className="contact__item">
            &copy;
            <a
              href="https://github.com/Krasavceva"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              by Victoria
            </a>
          </li>
        </li>
      </div>
    </div>
  );
};

export default Contacts;
