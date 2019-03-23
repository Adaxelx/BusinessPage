import React from 'react';
import '../css/Nav.css'

class Nav extends React.Component {
    state = { 
     }

    render() { 
        return (
        <>
        <button className='navBtn'>
            <span className='top bar'></span>
            <span className='mid bar'></span>
            <span className='bot bar'></span>
        </button>
      
        <nav>
            <ul>
                <li><span className='number'>01</span><span className='txt'>Start</span></li>
                <li><span className='number'>02</span><span className='txt'>O nas</span></li>
                <li><span className='number'>03</span><span className='txt'>Oferta</span></li>
                <li><span className='number'>04</span><span className='txt'>Gdzie nas znajdziesz</span></li>
                <li><span className='number'>05</span><span className='txt'>Kontakt</span></li>
            </ul>
        </nav>
        </>
          );
    }
}
 
export default Nav;