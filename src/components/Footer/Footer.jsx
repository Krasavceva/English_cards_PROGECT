import "../Footer/Footer.css"
import logo from "../../assets/images/logo1.png";

 const Footer = () => {
    return(
    <div className="footer">
      <img src={logo} className='footer_logo'/>
      <div className="footer__contact">
        <p>FlashVocabCards helps you to learn new words easely</p>
        <p>&copy; 2022 Viktoria Krasavceva</p>
      </div>
      <div className="footer__menu">
        <a href='#'>CONTACT</a>
      </div>
    </div>


    )
}

export default Footer