import logo from "../../assets/images/logo1.png";
import "../Header/Header.scss";



const Header = () => {
    return(
<header className="header">
    <div className="header__menu">
        <div className="slogan">
            <a href="#" className="header__item item__main">THE LITTLE GENIUS WORKSHOP</a>
        </div> 
        <div className="menu">
            <a href="#" className="header__item">Home</a>
            <a href="#" className="header__item">Cards</a>
            <a href="#" className="header__item">Game</a>
            <a href="#" className="header__item">Vocabulary</a>
            <a href="#" className="header__item">Contact</a>  
        </div>      
    </div>
    <div className="header__logo">
        <img src={logo} alt="logo" className="logo"/>
    </div>
</header>
    )
};

export default Header;