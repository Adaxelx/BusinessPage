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
        ],
     }

    imgRef = React.createRef();
    imgRef2 = React.createRef();

    handleScroll = () =>{
        let scrollV = window.scrollY;
        const tabImgs = [this.imgRef,this.imgRef2]
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
            else{
                actives[i]= false;
                this.setState({
                    actives
                })
            }
        })
        }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() { 
        return ( 
            <section className='offer'>
                <p className='title' data-text="Oferta">Oferta</p>
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
              
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
                <div className="img">
                    <img ref={this.imgRef} src={img2} className={this.state.active[0] ? 'active' : ''} alt=""/>
                </div>
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
                <div className="img">
                    <img ref={this.imgRef2} className={this.state.active[1] ? 'active' : ''} src={img} alt=""/>
                </div>
            </section>
         );
    }
}
 
export default Offer;