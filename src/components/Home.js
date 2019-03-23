import React from 'react';
import img from '../img/img.jpg'
import '../css/Home.css'

import About from './About.js'

let lastScrollY,ticking;

class Home extends React.Component {
    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.img.current.style.transform = `scale(${1 - lastScrollY/400}) `
            this.img.current.style.top = `${10 + lastScrollY/7}%`
            this.img.current.style.opacity = `${1 - lastScrollY/250}`;
            this.logo.current.style.opacity = `${1 - lastScrollY/250}`
            ticking = false;
          });
       
          ticking = true;
        }
    }

    img = React.createRef();
    logo = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    render(){
        return(
            <>
            <section className='home'>
                <img ref={this.img} className='homeImg' src={img} alt=""></img>
                <p className='logo' ref={this.logo}>Business name</p>
            </section>
           <About/>
            </>
        )
    }
}
 
export default Home;