(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(173)},173:function(e,t,a){"use strict";a.r(t);a(136),a(161);var c=a(1),n=a.n(c),s=a(13),o=a.n(s),d=a(15),i=a.n(d),r=a(62),l=a(63),b=a(65),u=a(64),p=a(66),f=a(39),h=(a(172),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(b.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:{},count:0,api:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),i.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"1test",params:{user_id:t.detail.data.id,v:"5.103",access_token:"0c8b8a7c0c8b8a7c0c8b8a7c6a0ce4a5fa00c8b0c8b8a7c52af213ff35b212b9cc1b948"}});break;case"VKWebAppCallAPIMethodResult":switch(t.detail.data.request_id){case"1test":e.setState({count:t.detail.data.response.count});for(var a=0;a<t.detail.data.response.count;a++){var c=t.detail.data.response.items[a];i.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"2test",params:{user_id:c,v:"5.103",access_token:"0c8b8a7c0c8b8a7c0c8b8a7c6a0ce4a5fa00c8b0c8b8a7c52af213ff35b212b9cc1b948"}})}break;default:console.log(t.detail.data)}break;default:console.log(t.detail)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return n.a.createElement(f.b,{activePanel:this.state.activePanel},n.a.createElement(f.a,{id:"home"},this.state.count))}}]),t}(n.a.Component));i.a.send("VKWebAppInit",{}),o.a.render(n.a.createElement(h,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.37870e17.chunk.js.map