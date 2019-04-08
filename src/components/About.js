import React from 'react';
import '../css/style.sass'

import img from '../img/clouds.jpg'
import img2 from '../img/hong-kong.jpg'

let off;
let height;
let windowH = window.innerHeight;

class About extends React.Component {
    state = { 
        active: [
            false,
            false,
            false,
            false,
            false,
        ],
     }

   handleScroll = () =>{
    let scrollV = window.scrollY;
    const tabDivs = [this.div1,this.div2,this.img1,this.img2,this.div3]

    tabDivs.forEach((div,i) => {
        off = div.current.offsetTop
        height = div.current.offsetHeight;
        const actives = this.state.active;
        if(off<scrollV+windowH-height/2){
            actives[i] = true;
           this.setState({
                actives
           })
        }
        else{
            actives[i]= false;
            this.setState({
                actives
            })
        }
    })
    }

    div1 = React.createRef();
    div2 = React.createRef();
    div3 = React.createRef();
    img1 = React.createRef();
    img2 = React.createRef();

    componentDidMount() {
        window.scrollTo(0,0);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    render(){ 

        const {active} = this.state
        
        return (  
        <section className='aboutPage'>
         <div ref={this.div1} className={active[0]? 'aboutContent active' : 'aboutContent'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
         <div ref={this.div2} className={active[1]? 'aboutContent active' : 'aboutContent'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
         <img src={img} ref={this.img1} alt="" className={active[2] ? 'aboutImg active' : 'aboutImg'}></img>
         <img src={img2} ref={this.img2} alt="" className={active[3] ? 'aboutImg active' : 'aboutImg'}></img>
         <div ref={this.div3} className={active[4]? 'aboutContent active' : 'aboutContent'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
         
         
        </section>
        );
    }
}

 
export default About;