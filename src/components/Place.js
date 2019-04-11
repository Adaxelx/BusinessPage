import React from 'react';

import '../css/style.sass'

let height,off;
let windowH = window.innerHeight;

class Place extends React.Component {
    state = { 
        active: false,
     }

     addEvent = () =>{
        window.addEventListener('scroll',this.handleScroll)
     }

     addClass = () =>{
         this.setState({
             active: true,
         })
     }

     handleScroll = () =>{
        const {p} = this;
        let scrollV = window.scrollY;
        off = p.current.offsetTop;
        height = p.current.offsetHeight;
        if(off<scrollV+windowH-height/2){
               this.setState({
                    active: true,
               })
            }
            // else{
            //     this.setState({
            //         active: false,
            //    })
            // }
        }
     p = React.createRef();

     componentDidMount(){
        window.scrollTo(0,0);
        setTimeout(this.handleScroll,2000)
        setTimeout(this.addEvent,100)
     }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
    render() { 

        const {active} = this.state

        return ( 
            <section className="place">
                
                <iframe className={active ? 
                'active' : ''}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.3035818382623!2d23.145927369669682!3d52.02703867803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1553897983975!5m2!1spl!2spl"  style={{
                    border: 0,
                    frameborder: 0,
                }} title="google"
                allowFullScreen></iframe>
                <p ref={this.p} className={active ? 'active adress' : 'adress'}><span>Orzechowa 23B  Biała</span> <span>Podlaska 21-500</span></p>
            </section>
         );
    }
}
 
export default Place;