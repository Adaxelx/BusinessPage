import React from 'react';
import '../css/Nav.css'
import {NavLink} from 'react-router-dom';
class Nav extends React.Component {
    state = { 
        active: false
     }

     handleClick = ()=>{
         this.setState({
             active: !this.state.active,
         })
     }
     
    render() { 

        const {active} = this.state;

        return (
        <>
        <button className='navBtn' onClick={this.handleClick}>
            <span className={active ? 'top bar active' : 'top bar'}></span>
            <span className={active ? 'mid bar active' : 'mid bar'}></span>
            <span className={active ? 'bot bar active' : 'bot bar'}></span>
        </button>
      
        <nav className={active ? 'active' : ''}>
            <ul>
                <NavLink to='/'><li><span className={active ? 'number active' : 'number'}>01</span><span className={active ? 'txt active' : 'txt'}>Start</span></li></NavLink>
                <NavLink to='/offer'><li><span className={active ? 'number active' : 'number'}>02</span><span className={active ? 'txt active' : 'txt'}>Oferta</span></li></NavLink>
                <NavLink to='/place'><li><span className={active ? 'number active' : 'number'}>03</span><span className={active ? 'txt active' : 'txt'}>Gdzie nas znajdziesz</span></li></NavLink>
                <NavLink to='/contact'><li><span className={active ? 'number active' : 'number'}>04</span><span className={active ? 'txt active' : 'txt'}>Kontakt</span></li></NavLink>
            </ul>
        </nav>
        </>
          );
    }
}
 
export default Nav;