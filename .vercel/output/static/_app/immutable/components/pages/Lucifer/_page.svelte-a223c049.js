import{S as K,i as P,s as Q,k as p,a as R,x as F,q as w,l as d,m as b,h as u,c as S,y as H,r as I,n as c,R as z,b as $,z as J,G as _,K as A,u as U,f as L,t as W,A as X,T as Y}from"../../../chunks/index-b63c487d.js";import{C as Z,c as x,r as tt}from"../../../chunks/clipboard-37298d13.js";import{t as et}from"../../../chunks/ProgressBar.svelte_svelte_type_style_lang-eebdba58.js";function st(i){let e,r,a,n,h;return{c(){e=p("button"),r=p("img"),this.h()},l(s){e=d(s,"BUTTON",{id:!0,class:!0});var o=b(e);r=d(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(u),this.h()},h(){z(r.src,a=x)||c(r,"src",a),c(r,"alt","copy svg"),c(r,"class","svelte-1hsj889"),c(e,"id","copy_btn"),c(e,"class","svelte-1hsj889")},m(s,o){$(s,e,o),_(e,r),n||(h=A(e,"click",function(){Y(i[4])&&i[4].apply(this,arguments)}),n=!0)},p(s,o){i=s},d(s){s&&u(e),n=!1,h()}}}function at(i){let e,r,a,n,h,s,o,q=i[0].content[0].quote+"",j,k,B,C,y=i[0].content[0].author+"",T,G,E,m,v,D,g,N,O;return n=new Z({props:{text:i[0].content[0].quote+" - "+i[0].content[0].author,$$slots:{default:[st,({copy:t})=>({4:t}),({copy:t})=>t?16:0]},$$scope:{ctx:i}}}),n.$on("copy",i[2]),{c(){e=p("div"),r=R(),a=p("div"),F(n.$$.fragment),h=R(),s=p("div"),o=p("strong"),j=w(q),k=p("br"),B=p("br"),C=w(`\r
		— `),T=w(y),G=w(" —"),E=R(),m=p("button"),v=p("img"),this.h()},l(t){e=d(t,"DIV",{id:!0,class:!0}),b(e).forEach(u),r=S(t),a=d(t,"DIV",{id:!0,class:!0});var l=b(a);H(n.$$.fragment,l),h=S(l),s=d(l,"DIV",{class:!0});var f=b(s);o=d(f,"STRONG",{});var V=b(o);j=I(V,q),V.forEach(u),k=d(f,"BR",{}),B=d(f,"BR",{}),C=I(f,`\r
		— `),T=I(f,y),G=I(f," —"),f.forEach(u),l.forEach(u),E=S(t),m=d(t,"BUTTON",{id:!0,class:!0});var M=b(m);v=d(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(u),this.h()},h(){c(e,"id","main"),c(e,"class","svelte-1hsj889"),c(s,"class","inline"),c(a,"id","quote_container"),c(a,"class","svelte-1hsj889"),z(v.src,D=tt)||c(v,"src",D),c(v,"alt","refresh"),c(v,"class","svelte-1hsj889"),c(m,"id","refresh_btn"),c(m,"class","svelte-1hsj889")},m(t,l){$(t,e,l),$(t,r,l),$(t,a,l),J(n,a,null),_(a,h),_(a,s),_(s,o),_(o,j),_(s,k),_(s,B),_(s,C),_(s,T),_(s,G),$(t,E,l),$(t,m,l),_(m,v),g=!0,N||(O=A(m,"click",i[3]),N=!0)},p(t,[l]){const f={};l&1&&(f.text=t[0].content[0].quote+" - "+t[0].content[0].author),l&48&&(f.$$scope={dirty:l,ctx:t}),n.$set(f),(!g||l&1)&&q!==(q=t[0].content[0].quote+"")&&U(j,q),(!g||l&1)&&y!==(y=t[0].content[0].author+"")&&U(T,y)},i(t){g||(L(n.$$.fragment,t),g=!0)},o(t){W(n.$$.fragment,t),g=!1},d(t){t&&u(e),t&&u(r),t&&u(a),X(n),t&&u(E),t&&u(m),N=!1,O()}}}async function rt(){return{content:await(await fetch("https://lucifer-quotes.vercel.app/api/quotes")).json()}}function nt(i,e,r){let{data:a}=e;function n(o){et.trigger(o)}const h=()=>{n({message:"Copied to clipboard 📋",preset:"primary",autohide:!0,timeout:2500})},s=async()=>{r(0,a=await rt())};return i.$$set=o=>{"data"in o&&r(0,a=o.data)},[a,n,h,s]}class ct extends K{constructor(e){super(),P(this,e,nt,at,Q,{data:0})}}export{ct as default};