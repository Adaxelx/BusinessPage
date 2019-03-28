import React from 'react';

import '../css/Loading.css'

class Loading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            <div className='loading'>
            <div class="loadingTxt">
                <p class='shinyTxt'>Mostowski</p>
            </div>
            <div className="wrapLoad">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    </>
         );
    }
}
 
export default Loading;