(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/img.53016398.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/clouds.bfcbf6e3.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/hong-kong.be435631.jpg"},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n,i,c,l,r=a(0),o=a.n(r),s=a(19),m=a.n(s),u=a(2),d=a(3),p=a(5),v=a(4),f=a(6),h=(a(31),a(11)),g=a(10),b=(a(32),window.pageYOffset),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={active:!1,activeNav:!1,flag:!0},a.changeStateNav=function(){a.setState({activeNav:!a.state.activeNav})},a.changeFlag=function(){a.setState({flag:!0})},a.handleClick=function(){a.setState({flag:!1,active:!a.state.active}),setTimeout(a.changeFlag,1500),a.state.activeNav?setTimeout(a.changeStateNav,1e3):(a.setState({activeNav:!a.state.activeNav}),a.nav.current.style.transform="rotate(0deg)",a.nav.current.style.left="5vh")},a.handleScroll=function(){var e=window.pageYOffset;b<e?(a.nav.current.style.transform="rotate(-90deg)",a.nav.current.style.left="0vh"):(a.nav.current.style.transform="rotate(0deg)",a.nav.current.style.left="5vh"),b=e},a.nav=o.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.active,a=e.activeNav;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{ref:this.nav,className:"navBtn",onClick:this.state.flag?this.handleClick:null},o.a.createElement("span",{className:a?"top bar active":"top bar"}),o.a.createElement("span",{className:a?"mid bar active":"mid bar"}),o.a.createElement("span",{className:a?"bot bar active":"bot bar"})),o.a.createElement("nav",{className:a?"active":""},o.a.createElement("ul",null,o.a.createElement(h.b,{to:"/",onClick:this.handleClick},o.a.createElement("li",null,o.a.createElement("span",{className:t?"number active":"number"},"01"),o.a.createElement("span",{className:t?"txt active":"txt"},"Start"))),o.a.createElement(h.b,{to:"/offer",onClick:this.state.flag?this.handleClick:null},o.a.createElement("li",null,o.a.createElement("span",{className:t?"number active":"number"},"02"),o.a.createElement("span",{className:t?"txt active":"txt"},"Oferta"))),o.a.createElement(h.b,{to:"/place",onClick:this.state.flag?this.handleClick:null},o.a.createElement("li",null,o.a.createElement("span",{className:t?"number active":"number"},"03"),o.a.createElement("span",{className:t?"txt active":"txt"},"Gdzie nas znajdziesz"))),o.a.createElement(h.b,{to:"/contact",onClick:this.state.flag?this.handleClick:null},o.a.createElement("li",null,o.a.createElement("span",{className:t?"number active":"number"},"04"),o.a.createElement("span",{className:t?"txt active":"txt"},"Kontakt"))))))}}]),t}(o.a.Component),N=a(22),w=a.n(N),y=(a(41),a(42),a(23)),j=a.n(y),O=a(24),C=a.n(O),k=window.innerHeight,x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={active:[!1,!1,!1,!1,!1]},a.handleScroll=function(){var e=window.scrollY;[a.div1,a.div2,a.img1,a.img2,a.div3].forEach(function(t,c){n=t.current.offsetTop,i=t.current.offsetHeight;var l=a.state.active;n<e+k-i?(l[c]=!0,a.setState({actives:l})):(l[c]=!1,a.setState({actives:l}))})},a.div1=o.a.createRef(),a.div2=o.a.createRef(),a.div3=o.a.createRef(),a.img1=o.a.createRef(),a.img2=o.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.active;return o.a.createElement("section",{className:"aboutPage"},o.a.createElement("div",{ref:this.div1,className:e[0]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),o.a.createElement("div",{ref:this.div2,className:e[1]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),o.a.createElement("img",{src:j.a,ref:this.img1,className:e[2]?"aboutImg active":"aboutImg"}),o.a.createElement("img",{src:C.a,ref:this.img2,className:e[3]?"aboutImg active":"aboutImg"}),o.a.createElement("div",{ref:this.div3,className:e[4]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "))}}]),t}(o.a.Component),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).handleScroll=function(e){c=window.scrollY,l||(window.requestAnimationFrame(function(){var e=10+c/7;a.img.current.style.top=e<100?e+"%":"100%",a.img.current.style.transform="scale(".concat(1-c/400,") "),a.img.current.style.opacity="".concat(1-c/250),a.logo.current.style.opacity="".concat(1-c/250),l=!1}),l=!0)},a.img=o.a.createRef(),a.logo=o.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"home"},o.a.createElement("img",{ref:this.img,className:"homeImg",src:w.a,alt:""}),o.a.createElement("p",{className:"logo",ref:this.logo},"Business name")),o.a.createElement(x,null))}}]),t}(o.a.Component),S=(a(43),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"offer"},o.a.createElement("p",{className:"shinyTxt"},"Oferta"))}}]),t}(o.a.Component)),I=a(25),A=(a(44),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",email:"",message:""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(I.a)({},t,n))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"contact"},o.a.createElement("h1",{className:"title"},"Kontakt"),o.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),o.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),o.a.createElement("form",{className:"contactForm"},o.a.createElement("label",{className:"name",htmlFor:"user"},o.a.createElement("p",null,"Imi\u0119"),o.a.createElement("input",{placeholder:"Imi\u0119",type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange})),o.a.createElement("label",{className:"email",htmlFor:"email"},o.a.createElement("p",null,"Email"),o.a.createElement("input",{placeholder:"Email",type:"text",id:"email",name:"email",value:this.state.email,onChange:this.handleChange})),o.a.createElement("label",{className:"message",htmlFor:"message"},o.a.createElement("p",null,"Wiadomo\u015b\u0107"),o.a.createElement("textarea",{id:"message",name:"message",value:this.state.message,onChange:this.handleChange})),o.a.createElement("button",null,"Send")))}}]),t}(o.a.Component)),L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{basename:"/react-git-first-project"},o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/",exact:!0,component:q}),o.a.createElement(g.a,{path:"/offer",exact:!0,component:S}),o.a.createElement(g.a,{path:"/contact",exact:!0,component:A}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.498bf135.chunk.js.map