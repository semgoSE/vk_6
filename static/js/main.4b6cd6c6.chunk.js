(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(173)},173:function(e,t,a){"use strict";a.r(t);a(136),a(161);var s=a(1),n=a.n(s),o=a(14),c=a.n(o),d=a(11),r=a.n(d),i=a(62),l=a(63),p=a(65),u=a(64),f=a(66),h=a(39),b=(a(172),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:{},count:0,api:null},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0;r.a.subscribe(function(a){switch(a.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:a.detail.data}),r.a.send("VKWebAppGetAuthToken",{app_id:7286662,scope:"friends"});break;case"VKWebAppAccessTokenReceived":e.setState({api:a.detail.data.access_token}),r.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"1test",params:{user_id:e.state.fetchedUser.id,v:"5.103",access_token:"ad954c8fad954c8fad954c8fd0adfa6309aad95ad954c8ff3b6151cf42da6220c2f88d8"}});break;case"VKWebAppCallAPIMethodResult":switch(a.detail.data.request_id){case"1test":e.setState({count:a.detail.data.response.count});var s=Math.floor(a.detail.data.response.count/25);console.log(s);for(var n=0;n<s;n++){for(var o=[],c=[],d=0;d<25;d++)o.push(a.detail.data.response.items[25*n+d]);d=0,r.a.send("VKWebAppCallAPIMethod",{method:"execute.test_p",params:{array:o,v:"5.103",access_token:e.state.api}})}for(var i=0;i<a.detail.data.response.count-25*s;i++)c.push(a.detail.data.response.items[25*s+i]);r.a.send("VKWebAppCallAPIMethod",{method:"execute.test_p",params:{array:c,v:"5.103",access_token:e.state.api}});break;case"2test":e.setState({count:a.detail.data.response.count+e.state.count});for(var l=0;l<a.detail.data.response.items.length;l++);break;case"3test":e.setState({count:a.detail.data.response.count+e.state.count});break;default:var p=[];t+=1;for(var u=0;u<a.detail.data.response.length;u++)for(var f=0;f<a.detail.data.response[u].length;f++)p.push(a.detail.data.response[u][f]);console.log(t),console.log(p)}break;default:console.log(a.detail)}}),r.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return n.a.createElement(h.b,{activePanel:this.state.activePanel},n.a.createElement(h.a,{id:"home"},this.state.count))}}]),t}(n.a.Component));r.a.send("VKWebAppInit",{}),c.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4b6cd6c6.chunk.js.map