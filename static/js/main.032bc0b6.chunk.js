(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/clouds.bfcbf6e3.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/hong-kong.be435631.jpg"},18:function(e,t,a){e.exports=a.p+"static/media/tower.3e4975d8.jpg"},19:function(e,t,a){e.exports=a.p+"static/media/buildings.c77798ef.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/wave.1c8b4743.png"},28:function(e,t,a){e.exports=a.p+"static/media/img.53016398.jpg"},30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i,n,c,r,l,s,o,m,u,d,p=a(0),f=a.n(p),v=a(25),h=a.n(v),E=a(2),g=a(3),b=a(5),w=a(4),N=a(6),y=(a(35),a(12)),j=a(1),O=(a(11),a(26)),x=a.n(O),k=window.pageYOffset,q=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={active:!1,activeNav:!1,flag:!0},a.changeStateNav=function(){a.setState({activeNav:!a.state.activeNav})},a.changeFlag=function(){a.setState({flag:!0})},a.handleClick=function(){a.setState({flag:!1,active:!a.state.active}),setTimeout(a.changeFlag,1e3),a.state.activeNav?setTimeout(a.changeStateNav,1e3):(a.setState({activeNav:!a.state.activeNav}),a.nav.current.style.transform="rotate(0deg)",a.nav.current.style.left="5vh")},a.handleScroll=function(){var e=window.pageYOffset;k<e&&e>50?(a.nav.current.style.transform="rotate(-90deg) translateY(-2vh)",a.nav.current.style.left="0vh"):(a.nav.current.style.transform="rotate(0deg)",a.nav.current.style.left="5vh"),k=e},a.nav=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.active,a=e.activeNav;return f.a.createElement(f.a.Fragment,null,f.a.createElement("button",{ref:this.nav,className:"navBtn",onClick:this.state.flag?this.handleClick:null},f.a.createElement("span",{className:a?"top bar active":"top bar"}),f.a.createElement("span",{className:a?"mid bar active":"mid bar"}),f.a.createElement("span",{className:a?"bot bar active":"bot bar"})),f.a.createElement("nav",{className:a?"active":""},f.a.createElement("ul",null,f.a.createElement(y.b,{to:"/",onClick:this.handleClick},f.a.createElement("li",null,f.a.createElement("span",{className:t?"number active":"number"},"01"),f.a.createElement("span",{className:t?"txt active":"txt"},"Start"))),f.a.createElement(y.b,{to:"/offer",onClick:this.state.flag?this.handleClick:null},f.a.createElement("li",null,f.a.createElement("span",{className:t?"number active":"number"},"02"),f.a.createElement("span",{className:t?"txt active":"txt"},"Oferta"))),f.a.createElement(y.b,{to:"/place",onClick:this.state.flag?this.handleClick:null},f.a.createElement("li",null,f.a.createElement("span",{className:t?"number active":"number"},"03"),f.a.createElement("span",{className:t?"txt active":"txt"},"Gdzie nas znajdziesz"))),f.a.createElement(y.b,{to:"/contact",onClick:this.state.flag?this.handleClick:null},f.a.createElement("li",null,f.a.createElement("span",{className:t?"number active":"number"},"04"),f.a.createElement("span",{className:t?"txt active":"txt"},"Kontakt")))),window.innerWidth>1280?f.a.createElement("img",{src:x.a,alt:""}):""))}}]),t}(f.a.Component),R=a(28),L=a.n(R),S=a(16),C=a.n(S),A=a(17),T=a.n(A),I=window.innerHeight,F=function(e){function t(){var e,a;Object(E.a)(this,t);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={active:[!1,!1,!1,!1,!1]},a.handleScroll=function(){var e=window.scrollY;[a.div1,a.div2,a.img1,a.img2,a.div3].forEach(function(t,c){i=t.current.offsetTop,n=t.current.offsetHeight;var r=a.state.active;i<e+I-n/2?(r[c]=!0,a.setState({actives:r})):(r[c]=!1,a.setState({actives:r}))})},a.div1=f.a.createRef(),a.div2=f.a.createRef(),a.div3=f.a.createRef(),a.img1=f.a.createRef(),a.img2=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.active;return f.a.createElement("section",{className:"aboutPage"},f.a.createElement("div",{ref:this.div1,className:e[0]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),f.a.createElement("div",{ref:this.div2,className:e[1]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),f.a.createElement("img",{src:C.a,ref:this.img1,alt:"",className:e[2]?"aboutImg active":"aboutImg"}),f.a.createElement("img",{src:T.a,ref:this.img2,alt:"",className:e[3]?"aboutImg active":"aboutImg"}),f.a.createElement("div",{ref:this.div3,className:e[4]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "))}}]),t}(f.a.Component),W=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).handleScroll=function(e){c=window.scrollY,r||(window.requestAnimationFrame(function(){var e;(e=window.innerWidth>1280?5+c/7:10+c/7)<100?(a.img.current.style.top=e+"%",a.img.current.style.opacity=0,a.img.current.style.transform="scale(0)"):a.img.current.style.top="100%",a.img.current.style.transform="scale(".concat(1-c/400,") "),a.img.current.style.opacity="".concat(1-c/250),a.logo.current.style.opacity="".concat(1-c/250),r=!1}),r=!0)},a.img=f.a.createRef(),a.logo=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("section",{className:"home"},f.a.createElement("img",{ref:this.img,className:"homeImg",src:L.a,alt:""}),f.a.createElement("p",{className:"logo",ref:this.logo},"Business name")),f.a.createElement(F,null))}}]),t}(f.a.Component),z=a(18),D=a.n(z),H=a(19),B=a.n(H),M=window.innerHeight,U=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={active:[!1,!1,!1,!1,!1]},a.addEvent=function(){window.addEventListener("scroll",a.handleScroll)},a.onLoad=function(){var e=[a.articleRef,a.articleRef2,a.articleRef3],t=0;e.forEach(function(e){e.current.style.transition="".concat(1,"s ").concat(t,"s"),t+=.2})},a.imgRef=f.a.createRef(),a.imgRef2=f.a.createRef(),a.articleRef=f.a.createRef(),a.articleRef2=f.a.createRef(),a.articleRef3=f.a.createRef(),a.handleScroll=function(){var e=window.scrollY;[a.articleRef,a.articleRef2,a.imgRef,a.articleRef3,a.imgRef2].forEach(function(t,i){l=t.current.offsetTop,s=t.current.offsetHeight;var n=a.state.active;l<e+M-s/2&&(n[i]=!0,a.setState({actives:n}))})},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.onLoad(),setTimeout(this.handleScroll,1700),setTimeout(this.addEvent,100)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return f.a.createElement("section",{className:"offer"},f.a.createElement("p",{className:"title","data-text":"Oferta"},"Oferta"),f.a.createElement("article",{ref:this.articleRef,className:this.state.active[0]?"active":""},f.a.createElement("i",{className:"fas fa-users icon"}),f.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),f.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? ")),f.a.createElement("article",{ref:this.articleRef2,className:this.state.active[1]?"active":""},f.a.createElement("i",{className:"fas fa-users icon"}),f.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),f.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? ")),f.a.createElement("div",{className:"img"},f.a.createElement("img",{ref:this.imgRef,src:B.a,className:this.state.active[2]?"active":"",alt:""})),f.a.createElement("article",{ref:this.articleRef3,className:this.state.active[3]?"active":""},f.a.createElement("i",{className:"fas fa-users icon"}),f.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),f.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? ")),f.a.createElement("div",{className:"img"},f.a.createElement("img",{ref:this.imgRef2,className:this.state.active[4]?"active":"",src:D.a,alt:""})))}}]),t}(f.a.Component),V=a(29),Y=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={username:"",email:"",message:""},a.handleChange=function(e){var t=e.target.name,i=e.target.value;a.setState(Object(V.a)({},t,i))},a.div1=f.a.createRef(),a.div2=f.a.createRef(),a.container=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return f.a.createElement("section",{className:"contact"},f.a.createElement("h1",{className:"title"},"Kontakt"),f.a.createElement("div",{className:"contents"},f.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),f.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),f.a.createElement("form",{className:"contactForm"},f.a.createElement("label",{className:"name",htmlFor:"user"},f.a.createElement("p",null,"Imi\u0119"),f.a.createElement("input",{placeholder:"Imi\u0119",type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange})),f.a.createElement("label",{className:"email",htmlFor:"email"},f.a.createElement("p",null,"Email"),f.a.createElement("input",{placeholder:"Email",type:"text",id:"email",name:"email",value:this.state.email,onChange:this.handleChange})),f.a.createElement("label",{className:"message",htmlFor:"message"},f.a.createElement("p",null,"Wiadomo\u015b\u0107"),f.a.createElement("textarea",{id:"message",name:"message",value:this.state.message,onChange:this.handleChange})),f.a.createElement("button",null,"Send")))}}]),t}(f.a.Component),P=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"loading"},f.a.createElement("div",{className:"loadingTxt"},f.a.createElement("p",{className:"shinyTxt"},"Mostowski")),f.a.createElement("div",{className:"wrapLoad"},f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null))))}}]),t}(f.a.Component),Q=a(15),J=window.innerHeight,K=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={active:!1},a.addEvent=function(){window.addEventListener("scroll",a.handleScroll)},a.addClass=function(){a.setState({active:!0})},a.handleScroll=function(){var e=Object(Q.a)(Object(Q.a)(a)).p,t=window.scrollY;m=e.current.offsetTop,o=e.current.offsetHeight,m<t+J-o/2&&a.setState({active:!0})},a.p=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),setTimeout(this.handleScroll,2e3),setTimeout(this.addEvent,100)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.active;return f.a.createElement("section",{className:"place"},f.a.createElement("iframe",{className:e?"active":"",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.3035818382623!2d23.145927369669682!3d52.02703867803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1553897983975!5m2!1spl!2spl",style:{border:0,frameborder:0},title:"google",allowFullScreen:!0}),f.a.createElement("p",{ref:this.p,className:e?"active adress":"adress"},f.a.createElement("span",null,"Orzechowa 23B  Bia\u0142a")," ",f.a.createElement("span",null,"Podlaska 21-500")))}}]),t}(f.a.Component),G=window.innerHeight,Z=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).state={active:!1},a.handleScroll=function(){var e=window.scrollY;u=a.footer.current.offsetTop,d=a.footer.current.offsetHeight,u<e+G-d/2?a.setState({active:!0}):a.setState({active:!1})},a.footer=f.a.createRef(),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return f.a.createElement("footer",{ref:this.footer,className:this.state.active?"active":""},f.a.createElement("p",{className:"title"},"Wi\u0119cej o nas!"),f.a.createElement("div",{className:"socials"},f.a.createElement("p",null,"Instagram"),f.a.createElement("p",null,"Instagram")),f.a.createElement("div",{className:"contactFot"},f.a.createElement("p",{className:"header"},"Skontaktuj si\u0119 z nami!"),f.a.createElement("p",null,"exapsaka@o2.pl"),f.a.createElement("p",null,"530 439 439"),f.a.createElement("p",null,"Lub napisz wiadomo\u015b\u0107 tutaj!")),f.a.createElement("div",{className:"partnership"},f.a.createElement("p",{className:"header"},"Do\u0142\u0105cz do nas!"),f.a.createElement("p",null,"work.saodjk@o2.pl")),f.a.createElement("div",{className:"placeFot"},f.a.createElement("p",{className:"header"},"Znajdziesz nas pod adresem:"),f.a.createElement("p",null,"aosdk sapodasd 23, alskd laskda")))}}]),t}(f.a.Component),$=[],X=[],_=[],ee=function(e){function t(){var e,a;Object(E.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).addEvent=function(){window.addEventListener("scroll",a.moveText)},a.text1=f.a.createRef(),a.text2=f.a.createRef(),a.container1=f.a.createRef(),a.container2=f.a.createRef(),a.texts=[a.text1,a.text2],a.moveText=function(){var e=window.scrollY;a.texts.forEach(function(t,a){var i=X[a]+$[a]-_[a]-30;$[a]<e&&i>e?(t.current.style.position="fixed",t.current.style.width="30%",t.current.style.top="20px"):i<=e?(t.current.style.position="absolute",t.current.style.top=X[a]-_[a]-20+"px",t.current.style.width="100%"):(t.current.style.position="absolute",t.current.style.top="20px",t.current.style.width="100%")})},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=[this.container1,this.container2];this.texts.forEach(function(e){_.push(e.current.offsetHeight)}),e.forEach(function(e){X.push(e.current.offsetHeight),$.push(e.current.getBoundingClientRect().top)}),setTimeout(this.addEvent,100)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.moveText)}},{key:"render",value:function(){return f.a.createElement("section",{className:"offerComputer"},f.a.createElement("p",{className:"title","data-text":"Oferta"},"Oferta"),f.a.createElement("section",{className:"articles"},f.a.createElement("article",{ref:this.container1},f.a.createElement("div",{className:"scrollItems",ref:this.text1},f.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),f.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "))),f.a.createElement("article",{ref:this.container2},f.a.createElement("div",{className:"scrollItems",ref:this.text2},f.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),f.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? ")))),f.a.createElement("section",{className:"images"},f.a.createElement("div",{className:"img"},f.a.createElement("img",{src:B.a,alt:""}),f.a.createElement("img",{src:T.a,alt:""})),f.a.createElement("div",{className:"img"},f.a.createElement("img",{src:D.a,alt:""}),f.a.createElement("img",{src:C.a,alt:""}))))}}]),t}(f.a.Component),te=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=window.innerWidth>1280?ee:U;return f.a.createElement(y.a,{basename:"/BusinessPage"},f.a.createElement("div",{className:"App"},f.a.createElement(P,null),f.a.createElement(q,null),f.a.createElement(j.c,null,f.a.createElement(j.a,{path:"/",exact:!0,component:W}),f.a.createElement(j.a,{path:"/offer",exact:!0,component:e}),f.a.createElement(j.a,{path:"/place",exact:!0,component:K}),f.a.createElement(j.a,{path:"/contact",exact:!0,component:Y})),f.a.createElement(Z,null)))}}]),t}(p.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(f.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.032bc0b6.chunk.js.map