import React from 'react';

import '../css/style.sass';

class Contact extends React.Component {
    state = { 
        username: '',
        email: '',
        message:'',
     }

     handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
     }

    // moveText = (e)=>{
    //     const divs = [this.div1,this.div2]
    //     const scrollValue = window.scrollY;
    //     const containerH = this.container.current.offsetHeight;
    //     const containerOff = container.offsetTop
    //     divs.forEach(div => {
    //         const value = containerH + containerOff-textH-30;
    //         if(containerOff<scrollValue && value>scrollValue){
    //             text.style.position = 'fixed';
    //             text.style.width = 50 + '%';
    //             text.style.top = 20 +'px';
    //         }else if(value<=scrollValue){
    //             text.style.position = 'absolute';
    //             text.style.top = containerH - textH -20 + 'px';
    //             text.style.width = 100 + '%'
    //         }
    //         else{
    //             text.style.position = 'absolute';
    //             text.style.top = 20 + 'px';
    //             text.style.width = 100 + '%'
    //         }
    //     })
       
    // }

    div1 = React.createRef();
    div2 = React.createRef();
    container = React.createRef();
     componentDidMount(){
        window.scrollTo(0,0);
     }

    render() { 
        return ( 
            <section className='contact'>
                <h1 className="title">Kontakt</h1>
                <div className="contents">
                <p className='content'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className='content'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <form className="contactForm">
                    <label className='name' htmlFor="user">
                        <p>Imię</p>
                        <input placeholder='Imię' type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    </label>
                    <label className='email' htmlFor="email">
                        <p>Email</p>
                        <input placeholder='Email' type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </label>
                    <label className='message' htmlFor="message">
                        <p>Wiadomość</p>
                        <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                    </label>
                    <button>Send</button>
                </form>
            </section>
         );
    }
}
 
export default Contact;