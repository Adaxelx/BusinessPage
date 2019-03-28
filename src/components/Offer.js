import React from 'react';

import '../css/Offer.css'
import img from '../img/tower.jpg'
import img2 from '../img/buildings.jpg'

let off;
let height;
let windowH = window.innerHeight;

class Offer extends React.Component {
    state = { 
        active: [
            false,
            false,
            false,
            false,
            false,
        ],
     }
     onLoad = () =>{
        const tabArticles = [this.articleRef,this.articleRef2,this.articleRef3]
        let transition = 1;
        let delay = 0;

        tabArticles.forEach(art => {
            art.current.style.transition = `${transition}s ${delay}s`
            
            delay+=0.2;
        })

     }
    imgRef = React.createRef();
    imgRef2 = React.createRef();
    articleRef = React.createRef();
    articleRef2 = React.createRef();
    articleRef3 = React.createRef();
    handleScroll = () =>{
        let scrollV = window.scrollY;
        const tabImgs = [this.articleRef,this.articleRef2,this.imgRef,this.articleRef3,this.imgRef2]
        tabImgs.forEach((img,i) => {
            off = img.current.offsetTop;
            height = img.current.offsetHeight;
            const actives = this.state.active;
            if(off<scrollV+windowH-height/2){
                actives[i] = true;
               this.setState({
                    actives
               })
            }
            // else{
            //     actives[i]= false;
            //     this.setState({
            //         actives
            //     })
            // }
        })
        }

    componentDidMount() {
        this.onLoad();
        setTimeout(this.handleScroll,1700);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() { 
        return ( 
            <section className='offer'>
                <p className='title' data-text="Oferta">Oferta</p>
                <article ref={this.articleRef} className={this.state.active[0] ? 'active' : ''}>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
              
                <article ref={this.articleRef2} className={this.state.active[1] ? 'active' : ''}>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
                <div className="img">
                    <img ref={this.imgRef} src={img2} className={this.state.active[2] ? 'active' : ''} alt=""/>
                </div>
                <article ref={this.articleRef3} className={this.state.active[3] ? 'active' : ''}>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
                <div className="img">
                    <img ref={this.imgRef2} className={this.state.active[4] ? 'active' : ''} src={img} alt=""/>
                </div>
            </section>
         );
    }
}
 
export default Offer;