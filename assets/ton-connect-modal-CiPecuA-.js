import{r as i,j as e,h as T,i as j,k as w,a as b,s as y,T as S}from"./index-BSC-KhE4.js";const v="_button_z7kuz_1",I="_button__icon_right_z7kuz_21",A="_button__icon_left_z7kuz_25",N="_button__text_conteiner_z7kuz_30",E="_button__text_conteiner__text_z7kuz_35",M="_button__text_conteiner__subtext_z7kuz_43",F="_shake_z7kuz_57",r={button:v,button__icon_right:I,button__icon_left:A,button__text_conteiner:N,button__text_conteiner__text:E,button__text_conteiner__subtext:M,shake:F},R=o=>{const{text:n,subText:s,fontSize:t="16px",height:a="",fontFamily:_,fontWeight:h,boxShadow:f,imageLeft:u,imageRight:l,backgroundColor:x,width:m="100%",textTransform:p="uppercase",borderRadius:g,stylesForTexts:c,onClick:k}=o,[z,d]=i.useState(!1);return i.useEffect(()=>{const C=setInterval(()=>{d(!0),setTimeout(()=>{d(!1)},500)},1e4);return()=>clearInterval(C)},[]),e.jsxs("button",{onClick:k||void 0,style:{fontSize:t,height:a,backgroundColor:x,fontFamily:_,fontWeight:h,width:m,textTransform:p,borderRadius:g,boxShadow:f,backgroundImage:x?"none":"linear-gradient(to bottom, #f2632e, #e93324)"},className:r.button,children:[u&&e.jsx("img",{className:`${r.button__icon_left} ${z?r.shake:""}`,src:u}),e.jsxs("div",{className:r.button__text_conteiner,children:[e.jsx("span",{style:(c==null?void 0:c.main)||{},className:r.button__text_conteiner__text,children:n}),e.jsx("span",{style:(c==null?void 0:c.sub)||{},className:r.button__text_conteiner__subtext,children:s})]}),l&&e.jsx("img",{className:r.button__icon_right,src:l})]})},W=()=>{const{open:o}=T(),n=j(),s=i.useContext(w);if(!s)throw new Error("useTonConnect must be used within a TonConnectUIProvider");const{disconnect:t}=s;return{disconnect:t,userFriendlyAddress:n,open:o}};function P(o){const n=o.slice(0,4),s=o.slice(-4);return n+".."+s}const B=()=>{const{isMobile:o}=b(),{userFriendlyAddress:n,open:s}=W(),{userData:t}=b(),a=()=>{for(const _ in localStorage)_.startsWith("ton-connect")&&localStorage.removeItem(_);window.location.href="/"};return i.useEffect(()=>{t&&t.userTonAddress!==n&&n&&(t!=null&&t.userId)&&y(t==null?void 0:t.userId,{userTonAddress:n})},[t,n]),e.jsx(e.Fragment,{children:n?e.jsxs("div",{children:[e.jsx(S,{children:P(n)}),e.jsx("p",{style:{fontFamily:"Montserrat, sans-serif",color:"white",fontSize:"16px",marginTop:"5px"},onClick:a,children:"Disconnect"})]}):e.jsx(R,{onClick:s,fontFamily:"Montserrat, sans-serif",height:"42px",fontSize:o?"16px":"40px",stylesForTexts:{main:{whiteSpace:"pre-wrap"},sub:{}},backgroundColor:"#0080bb",text:"Connect wallet",fontWeight:"normal",width:"fit-content",textTransform:"none",borderRadius:"24px"})})};export{R as B,B as T};
