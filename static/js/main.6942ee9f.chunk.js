(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(173)},173:function(e,t,a){"use strict";a.r(t);a(136),a(161);var s=a(1),n=a.n(s),o=a(14),d=a.n(o),c=a(11),r=a.n(c),i=a(62),l=a(63),p=a(65),u=a(64),f=a(66),h=a(39),b=(a(172),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:{},count:0,api:null},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),r.a.send("VKWebAppGetAuthToken",{app_id:7286662,scope:"friends"});break;case"VKWebAppAccessTokenReceived":e.setState({api:t.detail.data.access_token}),r.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"1test",params:{user_id:e.state.fetchedUser.id,v:"5.103",access_token:"ad954c8fad954c8fad954c8fd0adfa6309aad95ad954c8ff3b6151cf42da6220c2f88d8"}});break;case"VKWebAppCallAPIMethodResult":switch(t.detail.data.request_id){case"1test":e.setState({count:t.detail.data.response.count});var a=Math.floor(t.detail.data.response.count/25);console.log(a);for(var s=0;s<a;s++){for(var n=[],o=[],d=0;d<25;d++)n.push(t.detail.data.response.items[25*s+d]);d=0,r.a.send("VKWebAppCallAPIMethod",{method:"execute.test_p",request_id:"7test",params:{array:n,v:"5.103",access_token:e.state.api}})}for(var c=0;c<t.detail.data.response.count-25*a;c++)o.push(t.detail.data.response.items[25*a+c]);r.a.send("VKWebAppCallAPIMethod",{method:"execute.test_p",request_id:"7test",params:{array:o,v:"5.103",access_token:e.state.api}});break;case"2test":e.setState({count:t.detail.data.response.count+e.state.count});for(var i=0;i<t.detail.data.response.items.length;i++);break;case"3test":e.setState({count:t.detail.data.response.count+e.state.count});break;case"7test":console.log(t.detail.data.response);for(var l=0;l<t.detail.data.response.length;l++){console.log(t.detail.data.response[l]);for(var p=0;p<t.detail.data.response[l].length;p++);}break;default:console.log(t.detail.data)}break;default:console.log(t.detail)}}),r.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return n.a.createElement(h.b,{activePanel:this.state.activePanel},n.a.createElement(h.a,{id:"home"},this.state.count))}}]),t}(n.a.Component));r.a.send("VKWebAppInit",{}),d.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.6942ee9f.chunk.js.map