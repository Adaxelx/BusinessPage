import React from 'react';

import '../css/Loading.css'

class Loading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            <div className='loading'>
            <div className="loadingTxt">
                <p className='shinyTxt'>Mostowski</p>
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