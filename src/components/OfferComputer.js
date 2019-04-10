import React from 'react';

import '../css/style.sass'

import img from '../img/tower.jpg'
import img2 from '../img/buildings.jpg'
import img3 from '../img/clouds.jpg'
import img4 from '../img/hong-kong.jpg'
let conOffs = [];
let conHeights = [];
// let txtOffs = [];
let txtHeights = [];

class OfferComputer extends React.Component {
    text1 = React.createRef();
    text2 = React.createRef();
    container1 = React.createRef();
    container2 = React.createRef();
    texts = [this.text1,this.text2]
    moveText = () =>{
        const scrollValue = window.scrollY;
        this.texts.forEach((txt,i) => {
            const value = conHeights[i] + conOffs[i] - txtHeights[i]-30;
            // console.log(value)
            console.log(conHeights[i],conOffs[i],value,scrollValue)
            if(conOffs[i]<scrollValue && value>scrollValue){
                txt.current.style.position = 'fixed';
                txt.current.style.width = 30 + '%';
                txt.current.style.top = 20 +'px';
                // console.log(1)
            }else if(value<=scrollValue){
                txt.current.style.position = 'absolute';
                txt.current.style.top = conHeights[i] - txtHeights[i] -20 + 'px';
                txt.current.style.width = 100 + '%'
                // console.log(2)
            }
            else{
                txt.current.style.position = 'absolute';
                txt.current.style.top = 20 + 'px';
                txt.current.style.width = 100 + '%'
                // console.log(3)
            }
        })
    }

    componentDidMount() {
        const containers = [this.container1,this.container2]
        this.texts.forEach(txt =>{
            txtHeights.push(txt.current.offsetHeight)
            // txtOffs.push(txt.current.getBoundingClientRect().top)
        })
        containers.forEach(con => {
            conHeights.push(con.current.offsetHeight)
            conOffs.push(con.current.getBoundingClientRect().top)
        })
        window.addEventListener('scroll', this.moveText)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.moveText)
    }

    render() { 
        return ( 
            <section className='offerComputer'>
                <p className='title' data-text="Oferta">Oferta</p>
                <section className="articles">
                <article ref={this.container1}>
                    <div className='scrollItems' ref={this.text1}>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </p>
                    </div>
                </article>
                <article ref={this.container2}>
                <div className='scrollItems' ref={this.text2}>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </p>
                    </div>
                </article>
                </section>
                <section className="images">
                <div className="img">
                    <img  src={img2} alt=""/>
                    <img src={img4} alt=""/>
                </div>
                <div className="img">
                    <img src={img} alt=""/>
                    <img src={img3} alt=""/>
                </div>
                </section>
            </section>
         );
    }
}
 
export default OfferComputer;