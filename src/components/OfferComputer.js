import React from 'react';

import '../css/style.sass'

import img from '../img/tower.jpg'
import img2 from '../img/buildings.jpg'
import img3 from '../img/clouds.jpg'
import img4 from '../img/hong-kong.jpg'
let off;
let height;
let windowH = window.innerHeight;

class OfferComputer extends React.Component {


    render() { 
        return ( 
            <section className='offerComputer'>
                <p className='title' data-text="Oferta">Oferta</p>
                <section className="articles">
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </p>
                </article>
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? </p>
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