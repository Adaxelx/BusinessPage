import React from 'react';
import '../css/Nav.css'
import {NavLink} from 'react-router-dom';

let prevScrollpos = window.pageYOffset;

class Nav extends React.Component {
    state = { 
        active: false,
        activeNav: false,
     }

     changeStateNav = ()=>{
        this.setState({
            activeNav: !this.state.activeNav,
        })
     }

     handleClick = ()=>{
         this.setState({
             active: !this.state.active,
         })
         if(this.state.activeNav){
            setTimeout(this.changeStateNav, 1000)
        }else{
            this.setState({
                activeNav: !this.state.activeNav,
            })
            this.nav.current.style.transform = `rotate(0deg)`
            this.nav.current.style.left = "5vh"
        }

     }

     handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if(prevScrollpos < currentScrollPos){
            this.nav.current.style.transform = `rotate(-90deg)`
            this.nav.current.style.left = "0vh"
        }
        else{
            this.nav.current.style.transform = `rotate(0deg)`
            this.nav.current.style.left = "5vh"
        }
        prevScrollpos = currentScrollPos;
     }

     nav = React.createRef();

     componentDidMount(){
         window.addEventListener('scroll',this.handleScroll)
     }
     
    render() { 

        const {active, activeNav} = this.state;

        return (
        <>
        <button ref={this.nav} className='navBtn' onClick={this.handleClick}>
            <span className={activeNav ? 'top bar active' : 'top bar'}></span>
            <span className={activeNav ? 'mid bar active' : 'mid bar'}></span>
            <span className={activeNav ? 'bot bar active' : 'bot bar'}></span>
        </button>
      
        <nav className={activeNav ? 'active' : ''}>
            <ul>
                <NavLink to='/' onClick={this.handleClick}><li><span className={active ? 'number active' : 'number'}>01</span><span className={active ? 'txt active' : 'txt'}>Start</span></li></NavLink>
                <NavLink to='/offer' onClick={this.handleClick}><li><span className={active ? 'number active' : 'number'}>02</span><span className={active ? 'txt active' : 'txt'}>Oferta</span></li></NavLink>
                <NavLink to='/place' onClick={this.handleClick}><li><span className={active ? 'number active' : 'number'}>03</span><span className={active ? 'txt active' : 'txt'}>Gdzie nas znajdziesz</span></li></NavLink>
                <NavLink to='/contact' onClick={this.handleClick}><li><span className={active ? 'number active' : 'number'}>04</span><span className={active ? 'txt active' : 'txt'}>Kontakt</span></li></NavLink>
            </ul>
        </nav>
        </>
          );
    }
}
 
export default Nav;