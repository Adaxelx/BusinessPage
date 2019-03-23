import React from 'react';
import '../css/About.css'

let off;
let height;
let windowH = window.innerHeight;

class About extends React.Component {
    state = { 
        active: [
            false,
            false,
            false,
        ],
     }

    onScroll = () => {
        let scrollV = window.scrollY;
        this.refs.forEach(item=>{
            off = item.current.offsetTop;
             height = item.current.offsetHeight;
            if(off<scrollV+windowH-height/2){
                item.current.classList.add('active')
            }
            else{
                item.classList.remove('active');
            }
        })
    }

    onLoad = ()=>{
        this.scrollItems.forEach(item=>{
        off = item.offsetTop;
            if(off<windowH){
                item.classList.add('active')
            }
        })
    }

   handleScroll = () =>{
    let scrollV = window.scrollY;
    const tabDivs = [this.div1,this.div2,this.div3]

    tabDivs.forEach((div,i) => {
        off = div.current.offsetTop
        height = div.current.offsetHeight;
        const actives = this.state.active;
        if(off<scrollV+windowH-height/2){
            actives[i] = true;
            console.log(actives)
           this.setState({
                actives
           })
           console.log(this.state.active)
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    render(){ 

        const {active} = this.state
        
        return (  
        <section className='aboutPage'>
         <div ref={this.div1} className={active[0]? 'about active' : 'about'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
         <div ref={this.div2} className={active[1]? 'about active' : 'about'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
         <div ref={this.div3} className={active[2]? 'about active' : 'about'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
        </section>
        );
    }
}

 
export default About;