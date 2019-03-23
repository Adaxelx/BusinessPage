import React from 'react';

class About extends React.Component {
    state = {  }
    windowH = window.innerHeight;

    onScroll = ()=>{
        let scrollV = window.scrollY;
        // scrollItems.forEach(item=>{
        //     off = item.offsetTop;
        //      height = item.offsetHeight;
        //     if(off<scrollV+windowH-height/2){
        //         item.classList.add('active')
        //     }
        //     else{
        //         item.classList.remove('active');
        //     }
    }


    onLoad = ()=>{
    // scrollItems.forEach(item=>{
    //     off = item.offsetTop;
    //         if(off<windowH){
    //             item.classList.add('active')
    //         }
    //     })
    }

    render(){ 
        return (  
        <section>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </div>
        </section>
        );
    }
}

 
export default About;