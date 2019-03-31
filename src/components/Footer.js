import React from 'react';

import '../css/Footer.css'

const Footer = () => {
    return ( 
        <>
        <footer>
            <p className="title">Więcej o nas!</p>
            <div className="socials">
                <p>Instagram</p> 
                <p>Instagram</p> 
            </div>
            <div className="contactFot">
                <p className='header'>Skontaktuj się z nami!</p>
                <p>exapsaka@o2.pl</p> 
                <p>530 439 439</p>
                <p>Lub napisz wiadomość tutaj!</p>
            </div>
            <div className="partnership">
                <p className='header'>Dołącz do nas!</p>
                <p>work.saodjk@o2.pl</p>
            </div>
            <div className="placeFot">
                <p className='header'>Znajdziesz nas pod adresem:</p>
                <p>aosdk sapodasd 23, alskd laskda</p>
            </div>
        </footer>
        </>
        
     );
}
 
export default Footer;