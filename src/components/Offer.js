import React from 'react';

import '../css/Offer.css'

class Offer extends React.Component {
    state = {  }
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
                <article>
                    <i className="fas fa-users icon"></i>
                    <p className="titleArt">Lorem ipsum</p>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!</p>
                </article>
            </section>
         );
    }
}
 
export default Offer;