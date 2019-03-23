import React from 'react';
import '../css/Nav.css'

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
                <li><span className={active ? 'number active' : 'number'}>02</span><span className={active ? 'txt active' : 'txt'}>O nas</span></li>
                <li><span className={active ? 'number active' : 'number'}>03</span><span className={active ? 'txt active' : 'txt'}>Oferta</span></li>
                <li><span className={active ? 'number active' : 'number'}>04</span><span className={active ? 'txt active' : 'txt'}>Gdzie nas znajdziesz</span></li>
                <li><span className={active ? 'number active' : 'number'}>05</span><span className={active ? 'txt active' : 'txt'}>Kontakt</span></li>
            </ul>
        </nav>
        </>
          );
    }
}
 
export default Nav;