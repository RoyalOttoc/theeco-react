(this["webpackJsonptheeco-react"]=this["webpackJsonptheeco-react"]||[]).push([[0],{150:function(e,n,a){},168:function(e,n,a){e.exports=a(202)},173:function(e,n,a){},187:function(e,n,a){},190:function(e,n,a){},191:function(e,n,a){},192:function(e,n,a){},196:function(e,n,a){},197:function(e,n,a){},198:function(e,n,a){},201:function(e,n,a){},202:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(45),l=a.n(c),o=(a(173),a(222)),i=a(228),u=a(229),s=a(68),m=a(221),f=a(157),d=a(23),h=a(131),E=a.n(h);a(184),a(185),a(186);E.a.initializeApp({apiKey:"AIzaSyDw1_vkCNz697ZdsJwJXIykERgnyqVw4UA",authDomain:"theeco-react.firebaseapp.com",databaseURL:"https://theeco-react.firebaseio.com",projectId:"theeco-react",storageBucket:"theeco-react.appspot.com",messagingSenderId:"467260015885",appId:"1:467260015885:web:b7c30997f9d38b37855c44",measurementId:"G-HP2BZSHBZ8"}),E.a.analytics();var p=E.a,v=(a(187),Object(d.b)((function(e){return{user:e.user.currentUser}}))((function(e){var n=function(){p.auth().signOut().then((function(){return console.log("user signed out")}))};return e.user?r.a.createElement(i.a,null,r.a.createElement(i.a.Column,null,r.a.createElement(i.a.Row,{className:"userinfo_grid_row"},r.a.createElement(u.a,{inverted:!0,as:"h2"},r.a.createElement(s.a,{name:"envira gallery"}),r.a.createElement(u.a.Content,null,"The Eco")),r.a.createElement(u.a,{className:"userinfo_displayname",inverted:!0,as:"h4"},r.a.createElement(m.a,{trigger:r.a.createElement("span",null,r.a.createElement(f.a,{src:e.user.photoURL,avatar:!0}),e.user.displayName),options:[{key:"signout",text:r.a.createElement("span",{onClick:n},"Sign Out")}]}))))):null}))),g=a(30),b=a(43),C=a(10),O=function(e){return{type:"SET_CHANNEL",payload:{currentChannel:e}}},j=a(96),y=function(e){var n=p.database().ref("messages"),a=p.database().ref("users"),c=Object(t.useState)({}),l=Object(C.a)(c,2),o=l[0],i=l[1],u=Object(t.useState)({}),s=Object(C.a)(u,2),m=s[0],f=s[1];Object(t.useEffect)((function(){e.user&&(a.child(e.user.uid).child("lastVisited").on("value",(function(e){i(e.val())})),n.on("value",(function(e){var n=e.val(),a=Object.keys(n),t={};a.forEach((function(e){Object.keys(n[e]).reduce((function(a,r){t[e]=Object(b.a)(t[e]||[]),t[e].push(n[e][r].timestamp)}))})),f(t)})))}),[e.user]);return r.a.createElement(r.a.Fragment,null," ",e.displayName,function(n){if(o&&m&&e.channel&&e.channel.id!==n){var a=o[n],t=m[n];if(t){var c=t.filter((function(e){return!a||a<e})).length;return 0===c?null:r.a.createElement(j.a,{color:"red"},c)}}return null}(e.notificationChannelId)," ")},S=(a(190),a(225)),w=a(223),N=a(232),k=a(203),I=Object(d.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}),(function(e){return{selectChannel:function(n){return e(O(n))}}}))((function(e){var n=Object(t.useState)(!1),a=Object(C.a)(n,2),c=a[0],l=a[1],i=Object(t.useState)({name:"",description:""}),u=Object(C.a)(i,2),m=u[0],f=u[1],d=Object(t.useState)(!1),h=Object(C.a)(d,2),E=h[0],v=h[1],O=Object(t.useState)([]),j=Object(C.a)(O,2),I=j[0],U=j[1],A=p.database().ref("channels"),T=p.database().ref("users");Object(t.useEffect)((function(){return A.on("child_added",(function(e){U((function(n){var a=Object(b.a)(n);return a.push(e.val()),a}))})),function(){return A.off()}}),[]),Object(t.useEffect)((function(){I.length>0&&e.selectChannel(I[0])}),[e.channel?null:I]);var P=function(){l(!1)},R=function(n){x(e.user,e.channel),x(e.user,n),e.selectChannel(n)},x=function(e,n){var a=T.child(e.uid).child("lastVisited").child(n.id);a.set(p.database.ServerValue.TIMESTAMP),a.onDisconnect().set(p.database.ServerValue.TIMESTAMP)},L=function(){if(m&&m.name&&m.description){var n=A.push().key,a={id:n,name:m.name,description:m.description,created_by:{name:e.user.displayName,avatar:e.user.photoURL}};v(!0),A.child(n).update(a).then((function(){f({name:"",description:""}),v(!1),P()})).catch((function(e){console.log(e)}))}},M=function(e){var n=e.target;f((function(e){var a=Object(g.a)({},e);return a[n.name]=n.value,a}))};return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(o.a.Menu,{style:{marginTop:"35px"}},r.a.createElement(o.a.Item,{style:{fontSize:"17px"}},r.a.createElement("span",null,r.a.createElement(s.a,{name:"exchange"})," Channels"),"(",I.length,")"),function(){if(I.length>0)return I.map((function(n){return r.a.createElement(o.a.Item,{key:n.id,name:n.name,onClick:function(){return R(n)},active:e.channel&&n.id===e.channel.id&&!e.channel.isFavourite},r.a.createElement(y,{user:e.user,channel:e.channel,notificationChannelId:n.id,displayName:"# "+n.name}))}))}(),r.a.createElement(o.a.Item,null,r.a.createElement("span",{className:"clickable",onClick:function(){l(!0)}},r.a.createElement(s.a,{name:"add"})," ADD"))),r.a.createElement(S.a,{open:c,onClose:P},r.a.createElement(S.a.Header,null,"Create Channel"),r.a.createElement(S.a.Content,null,r.a.createElement(w.a,{onSubmit:L},r.a.createElement(N.a,{stacked:!0},r.a.createElement(w.a.Input,{name:"name",value:m.name,onChange:M,type:"text",placeholder:"Enter Channel Name"}),r.a.createElement(w.a.Input,{name:"description",value:m.description,onChange:M,type:"text",placeholder:"Enter Channel Description"})))),r.a.createElement(S.a.Actions,null,r.a.createElement(k.a,{loading:E,onClick:L},r.a.createElement(s.a,{name:"checkmark"})," Save"),r.a.createElement(k.a,{onClick:P},r.a.createElement(s.a,{name:"remove"})," Cancel"))))})),U=Object(d.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}),(function(e){return{selectChannel:function(n){return e(O(n))}}}))((function(e){var n=Object(t.useState)([]),a=Object(C.a)(n,2),c=a[0],l=a[1],i=Object(t.useState)([]),u=Object(C.a)(i,2),m=u[0],f=u[1],d=p.database().ref("users"),h=p.database().ref(".info/connected"),E=p.database().ref("status");Object(t.useEffect)((function(){return d.on("child_added",(function(e){l((function(n){var a=Object(b.a)(n),t=e.val();return t.name=t.displayName,t.id=e.key,t.isPrivateChat=!0,a.push(t),a}))})),h.on("value",(function(n){if(e.user&&n.val()){var a=E.child(e.user.uid);a.set(!0),a.onDisconnect().remove()}})),function(){d.off(),h.off()}}),[e.user]),Object(t.useEffect)((function(){return E.on("child_added",(function(e){f((function(n){var a=Object(b.a)(n);return a.push(e.key),a}))})),E.on("child_removed",(function(e){f((function(n){var a=Object(b.a)(n),t=a.indexOf(e.key);return a.splice(t,1),a}))})),function(){return E.off()}}),[c]);var v=function(n){var a=Object(g.a)({},n);a.id=j(n.id),O(e.user,e.channel),O(e.user,a),e.selectChannel(a)},O=function(e,n){var a=d.child(e.uid).child("lastVisited").child(n.id);a.set(p.database.ServerValue.TIMESTAMP),a.onDisconnect().set(p.database.ServerValue.TIMESTAMP)},j=function(n){return e.user.uid<n?e.user.uid+n:n+e.user.uid};return r.a.createElement(o.a.Menu,{style:{marginTop:"35px"}},r.a.createElement(o.a.Item,{style:{fontSize:"17px"}},r.a.createElement("span",null,r.a.createElement(s.a,{name:"mail"})," Chat"),"(",c.length-1,")"),function(){if(c.length>0)return c.filter((function(n){return n.id!==e.user.uid})).map((function(n){return r.a.createElement(o.a.Item,{key:n.id,name:n.name,onClick:function(){return v(n)},active:e.channel&&j(n.id)===e.channel.id},r.a.createElement(s.a,{name:"circle",color:"".concat(-1!==m.indexOf(n.id)?"green":"red")}),r.a.createElement(y,{user:e.user,channel:e.channel,notificationChannelId:j(n.id),displayName:"@ "+n.name}))}))}())})),A=Object(d.b)((function(e){return{channel:e.channel.currentChannel,favouriteChannels:e.favouriteChannel.favouriteChannel}}),(function(e){return{selectChannel:function(n){return e(O(n))}}}))((function(e){return r.a.createElement(o.a.Menu,null,r.a.createElement(o.a.Item,{style:{fontSize:"17px"}},r.a.createElement("span",null,r.a.createElement(s.a,{name:"star"})," Starred"),"(",Object.keys(e.favouriteChannels).length,")"),function(){if(Object.keys(e.favouriteChannels).length>0)return Object.keys(e.favouriteChannels).map((function(n){return r.a.createElement(o.a.Item,{key:n,name:e.favouriteChannels[n],onClick:function(){return e.selectChannel({id:n,name:e.favouriteChannels[n],isFavourite:!0})},active:e.channel&&n===e.channel.id&&e.channel.isFavourite},"# "+e.favouriteChannels[n])}))}())})),T=(a(191),function(){return r.a.createElement(o.a,{vertical:!0,fixed:"left",borderless:!0,size:"large",className:"side_bar"},r.a.createElement(v,null),r.a.createElement(A,null),r.a.createElement(I,null),r.a.createElement(U,null))}),P=a(218),R=function(e){return r.a.createElement(N.a,{clearing:!0},r.a.createElement(u.a,{floated:"left",fluid:"true",as:"h2"},r.a.createElement("span",null,(e.isPrivateChat?"@ ":"# ")+e.channelName,!e.isPrivateChat&&r.a.createElement(s.a,{onClick:e.starChange,name:e.starred?"star":"star outline",color:e.starred?"yellow":"black"})),r.a.createElement(u.a.Subheader,null," ",e.uniqueUsers," User",1===e.uniqueUsers?"":"s")),r.a.createElement(u.a,{floated:"right"},r.a.createElement(P.a,{name:"search",icon:"search",placeholder:"Search Messages",size:"mini",onChange:e.searchTermChange})))},x=a(224),L=a(220),M=a(156);a(192);L.a.locale(M);var _=new L.a,V=function(e){return r.a.createElement(x.a,null,r.a.createElement(x.a.Avatar,{src:e.message.user.avatar}),r.a.createElement(x.a.Content,{className:e.ownMessage?"ownMessage":null},r.a.createElement(x.a.Author,{as:"a"},e.message.user.name),r.a.createElement(x.a.Metadata,null,_.format(e.message.timestamp)),e.message.image?r.a.createElement(f.a,{onLoad:e.imageLoaded,src:e.message.image}):r.a.createElement(x.a.Text,null,e.message.content)))},F=a(138),D=a.n(F),H=function(e){var n=Object(t.useState)(null),a=Object(C.a)(n,2),c=a[0],l=a[1],o=["image/png","image/jpeg"];return r.a.createElement(S.a,{basic:!0,open:e.open,onClose:e.onClose},r.a.createElement(S.a.Header,null,"Select a image"),r.a.createElement(S.a.Content,null,r.a.createElement(P.a,{type:"file",name:"file",onChange:function(e){var n=e.target.files[0];n&&l(n)},fluid:!0,label:"File Type (png , jpeg)"})),r.a.createElement(S.a.Actions,null,r.a.createElement(k.a,{color:"green",onClick:function(){c&&o.includes(D.a.lookup(c.name))&&(e.uploadImage(c,D.a.lookup(c.name)),e.onClose(),l(null))}},r.a.createElement(s.a,{name:"checkmark"}),"Add"),r.a.createElement(k.a,{color:"red",onClick:e.onClose},r.a.createElement(s.a,{name:"remove"}),"Cancel")))},z=a(227),B=Object(d.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}))((function(e){var n=p.database().ref("messages"),a=p.storage().ref(),c=Object(t.useState)(""),l=Object(C.a)(c,2),o=l[0],i=l[1],u=Object(t.useState)(!1),s=Object(C.a)(u,2),m=s[0],f=s[1],d=function(a){(o||a)&&n.child(e.channel.id).push().set(function(n){return{user:{avatar:e.user.photoURL,name:e.user.displayName,id:e.user.uid},content:o,image:n||"",timestamp:p.database.ServerValue.TIMESTAMP}}(a)).then((function(){return i("")})).catch((function(e){return console.log(e)}))};return r.a.createElement(N.a,null,r.a.createElement(P.a,{onChange:function(e){var n=e.target;i(n.value)},fluid:!0,name:"message",value:o,label:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{icon:"send",onClick:function(){d()}}),r.a.createElement(k.a,{icon:"upload",onClick:function(){return f(!0)}})),labelPosition:"right"}),r.a.createElement(H,{uploadImage:function(e,n){var t="chat/images/".concat(Object(z.a)(),".jpg");a.child(t).put(e,{contentType:n}).then((function(e){e.ref.getDownloadURL().then((function(e){d(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},open:m,onClose:function(){return f(!1)}}))})),W=(a(196),Object(d.b)((function(e){return{channel:e.channel.currentChannel,user:e.user.currentUser,favouriteChannels:e.favouriteChannel.favouriteChannel}}),(function(e){return{setfavouriteChannel:function(n){return e(function(e){return{type:"SET_FAVOURITECHANNEL",payload:{favouriteChannel:e}}}(n))},removefavouriteChannel:function(n){return e(function(e){return{type:"REMOVE_FAVOURITECHANNEL",payload:{favouriteChannel:e}}}(n))}}}))((function(e){var n,a,c=p.database().ref("messages"),l=p.database().ref("users"),o=Object(t.useState)([]),i=Object(C.a)(o,2),u=i[0],s=i[1],m=Object(t.useState)(""),f=Object(C.a)(m,2),d=f[0],h=f[1],E=Object(t.useRef)();Object(t.useEffect)((function(){if(e.channel)return s([]),c.child(e.channel.id).on("child_added",(function(e){s((function(n){var a=Object(b.a)(n);return a.push(e.val()),a}))})),function(){return c.child(e.channel.id).off()}}),[e.channel]),Object(t.useEffect)((function(){if(e.user)return l.child(e.user.uid).child("favourite").on("child_added",(function(n){e.setfavouriteChannel(n.val())})),l.child(e.user.uid).child("favourite").on("child_removed",(function(n){e.removefavouriteChannel(n.val())})),function(){return l.child(e.user.uid).child("favourite").off()}}),[e.user]),Object(t.useEffect)((function(){E.scrollIntoView({behavior:"smooth"})}),[u]);var v=function(){E.scrollIntoView({behavior:"smooth"})},g=function(){var e=new RegExp(d,"gi");return u.reduce((function(n,a){return(a.content&&a.content.match(e)||a.user.name.match(e))&&n.push(a),n}),[])},O=function(){var n;return Object.keys(e.favouriteChannels).includes(null===(n=e.channel)||void 0===n?void 0:n.id)};return r.a.createElement("div",{className:"messages"},r.a.createElement(R,{starChange:function(){var n=l.child(e.user.uid).child("favourite").child(e.channel.id);O()?n.remove():n.set({channelId:e.channel.id,channelName:e.channel.name})},starred:O(),isPrivateChat:null===(n=e.channel)||void 0===n?void 0:n.isPrivateChat,searchTermChange:function(e){var n=e.target;h(n.value)},channelName:null===(a=e.channel)||void 0===a?void 0:a.name,uniqueUsers:u.reduce((function(e,n){return e.includes(n.user.name)||e.push(n.user.name),e}),[]).length}),r.a.createElement(N.a,{className:"messagecontent"},r.a.createElement(x.a.Group,null,function(){var n=d?g():u;if(n.length>0)return n.map((function(n){return r.a.createElement(V,{imageLoaded:v,ownMessage:n.user.id===e.user.uid,key:n.timestamp,message:n})}))}(),r.a.createElement("div",{ref:function(e){return E=e}}))),r.a.createElement(B,null))}))),q=(a(197),function(e){return r.a.createElement("div",{className:"adsBox"},r.a.createElement("div",{className:"banner first"},"Banner Ad"),r.a.createElement("div",{className:"banner second"}),r.a.createElement("div",{className:"banner third"}))}),J=(a(198),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Copyright \xa9 by The Eco, All Rights Reserved ABN 45 144 359 889"),r.a.createElement("span",null,"Contact Us : 02 9389 5005"),r.a.createElement("span",{className:"info"},"||This Website is for a class assignment and not for commercial purposes||"))});var Z=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("div",{style:{paddingLeft:"300px"}},r.a.createElement(W,null),r.a.createElement(q,null),r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(13),K=a(82),X=a(72),$=a(226),Q=(a(150),function(){var e=p.database().ref("users"),n=Object(t.useState)({userName:"",email:"",password:"",confirmpassword:""}),a=Object(C.a)(n,2),c=a[0],l=a[1],o=Object(t.useState)([]),m=Object(C.a)(o,2),f=m[0],d=m[1],h=Object(t.useState)(!1),E=Object(C.a)(h,2),v=E[0],b=E[1],O=Object(t.useState)(!1),j=Object(C.a)(O,2),y=j[0],S=j[1],I=function(e){var n=e.target;l((function(e){var a=Object(g.a)({},e);return a[n.name]=n.value,a}))},U=function(){return!c.userName.length||!c.password.length||!c.confirmpassword.length||!c.email.length},A=function(){return c.password.length<6?(d((function(e){return e.concat({message:"Password length should be greater than 6"})})),!1):c.password===c.confirmpassword||(d((function(e){return e.concat({message:"Password and Confirm Password does not match"})})),!1)},T=function(e){e&&(b(!0),e.user.updateProfile({displayName:c.userName,photoURL:"http://gravatar.com/avatar/".concat(e.user.uid,"?d=identicon")}).then((function(){b(!1),P(e)})).catch((function(e){b(!1),d((function(n){return n.concat(e)}))})))},P=function(n){b(!0),e.child(n.user.uid).set({displayName:n.user.displayName,photoURL:n.user.photoURL}).then((function(){b(!1),S(!0)})).catch((function(e){b(!1),d((function(n){return n.concat(e)}))}))};return r.a.createElement(i.a,{verticalAlign:"middle",textAlign:"center",className:"grid-form"},r.a.createElement(i.a.Column,{style:{maxWidth:"500px"}},r.a.createElement(u.a,{icon:!0,as:"h2"},r.a.createElement(s.a,{name:"envira gallery"}),"Register"),r.a.createElement(w.a,{onSubmit:function(e){d((function(){return[]})),S(!1),(U()?(d((function(e){return e.concat({message:"Please fill in all fields"})})),0):A())&&(b(!0),p.auth().createUserWithEmailAndPassword(c.email,c.password).then((function(e){b(!1),T(e)})).catch((function(e){b(!1),d((function(n){return n.concat(e)}))})))}},r.a.createElement(N.a,{stacked:!0},r.a.createElement(w.a.Input,{name:"userName",value:c.userName,icon:"user",iconPosition:"left",onChange:I,type:"text",placeholder:"User Name"}),r.a.createElement(w.a.Input,{name:"email",value:c.email,icon:"mail",iconPosition:"left",onChange:I,type:"email",placeholder:"User Email"}),r.a.createElement(w.a.Input,{name:"password",value:c.password,icon:"lock",iconPosition:"left",onChange:I,type:"password",placeholder:"User Password"}),r.a.createElement(w.a.Input,{name:"confirmpassword",value:c.confirmpassword,icon:"lock",iconPosition:"left",onChange:I,type:"password",placeholder:"Confirm Password"})),r.a.createElement(k.a,{disabled:v,loading:v},"Submit")),f.length>0&&r.a.createElement($.a,{error:!0},r.a.createElement("h3",null,"Errors"),f.map((function(e,n){return r.a.createElement("p",{key:n},e.message)}))),y&&r.a.createElement($.a,{success:!0},r.a.createElement("h3",null,"Successfully Registered")),r.a.createElement($.a,null,"Already an User? ",r.a.createElement(K.b,{to:"/login"},"Login "))))}),Y=function(){var e=Object(t.useState)({email:"",password:""}),n=Object(C.a)(e,2),a=n[0],c=n[1],l=Object(t.useState)(!1),o=Object(C.a)(l,2),m=o[0],f=o[1],d=Object(t.useState)([]),h=Object(C.a)(d,2),E=h[0],v=h[1],b=function(e){var n=e.target;c((function(e){var a=Object(g.a)({},e);return a[n.name]=n.value,a}))},O=function(){return!a.password.length||!a.email.length};return r.a.createElement(i.a,{verticalAlign:"middle",textAlign:"center",className:"grid-form"},r.a.createElement(i.a.Column,{style:{maxWidth:"500px"}},r.a.createElement(u.a,{icon:!0,as:"h2"},r.a.createElement(s.a,{name:"envira gallery"}),"Welcome to The Eco",r.a.createElement("br",null),"Login"),r.a.createElement(w.a,{onSubmit:function(e){v((function(){return[]})),O()&&(v((function(e){return e.concat({message:"Please fill in all fields"})})),1)||(f(!0),p.auth().signInWithEmailAndPassword(a.email,a.password).then((function(e){f(!1),console.log(e)})).catch((function(e){f(!1),v((function(n){return n.concat(e)}))})))}},r.a.createElement(N.a,{stacked:!0},r.a.createElement(w.a.Input,{name:"email",value:a.email,icon:"mail",iconPosition:"left",onChange:b,type:"email",placeholder:"User Email"}),r.a.createElement(w.a.Input,{name:"password",value:a.password,icon:"lock",iconPosition:"left",onChange:b,type:"password",placeholder:"User Password"})),r.a.createElement(k.a,{disabled:m,loading:m},"Login")),E.length>0&&r.a.createElement($.a,{error:!0},r.a.createElement("h3",null,"Errors"),E.map((function(e,n){return r.a.createElement("p",{key:n},e.message)}))),r.a.createElement($.a,null,"Not an User? ",r.a.createElement(K.b,{to:"/register"},"Register "))))},ee={currentUser:null},ne={currentChannel:null,loading:!0},ae={favouriteChannel:{}},te=Object(X.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;if("SET_USER"===n.type){var a=n.payload;return e=Object(g.a)({},a)}return e},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,n=arguments.length>1?arguments[1]:void 0;if("SET_CHANNEL"===n.type){var a=n.payload;return(e=Object(g.a)({},a)).loading=!1,e}return e},favouriteChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;if("SET_FAVOURITECHANNEL"===n.type){var a=n.payload.favouriteChannel,t=Object(g.a)({},e.favouriteChannel);return t[a.channelId]=a.channelName,{favouriteChannel:t}}if("REMOVE_FAVOURITECHANNEL"===n.type){var r=n.payload.favouriteChannel,c=Object(g.a)({},e.favouriteChannel);return delete c[r.channelId],{favouriteChannel:c}}return e}}),re=(a(200),a(201),a(230)),ce=a(219),le=function(e){return r.a.createElement(re.a,{active:e.loading},r.a.createElement(ce.a,{size:"huge",content:"Loading..."}))},oe=Object(X.c)(te),ie=Object(G.f)(Object(d.b)((function(e){return{currentUser:e.user.currentUser,loading:e.channel.loading}}),(function(e){return{setUser:function(n){e(function(e){return{type:"SET_USER",payload:{currentUser:e}}}(n))}}}))((function(e){return Object(t.useEffect)((function(){p.auth().onAuthStateChanged((function(n){n?(e.setUser(n),e.history.push("/")):(e.setUser(null),e.history.push("/login"))}))}),[]),console.log("Debug",e.currentUser),r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{loading:e.loading&&"/"===e.location.pathname}),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/login",component:Y}),r.a.createElement(G.a,{path:"/register",component:Q}),r.a.createElement(G.a,{path:"/",component:Z})))})));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:oe},r.a.createElement(K.a,null,r.a.createElement(ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.7a174f6d.chunk.js.map