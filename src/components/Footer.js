import React from 'react';

import '../css/style.sass'

let off;
let height;
let windowH = window.innerHeight;

class Footer extends React.Component{

    state = {
        active: false,
    }

    handleScroll = () =>{
        let scrollV = window.scrollY;
            off = this.footer.current.offsetTop
            height = this.footer.current.offsetHeight;
            if(off<scrollV+windowH-height/2){
                this.setState({
                    active: true,
                })
            }
            else{
                this.setState({
                    active: false,
                })
            }
        }
        
    
        footer = React.createRef();
    
        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
          }
    render(){
        return ( 
    
            <footer ref={this.footer} className={this.state.active ? 'active' : ''}>
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
        
            
         );
    }
   
}
 
export default Footer;