(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{41:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(11),i=s(33),n=s.n(i),l=(s(41),s(17)),d=s(16),o=s(10),j=s.n(o),m=s(13),u=s(7),h=s(2),b=s(9),x=s.n(b),O=a.a.createContext({}),p=s(0);var _=function(e){var t=a.a.useContext(O).cartItems.reduce((function(e,t){return t.price+e}),0);return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo",children:Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("img",{width:36,height:36,src:"images/logo.svg",alt:"logo"})})}),Object(p.jsxs)("ul",{className:"header__content",children:[Object(p.jsxs)("li",{className:"header__content-link",onClick:e.onClickCart,children:[Object(p.jsx)("img",{src:"images/cart.svg",alt:"cart"}),Object(p.jsxs)("span",{className:"header__content-price",children:[t,".000 ",Object(p.jsx)("b",{children:"IDR"})]})]}),Object(p.jsx)("li",{className:"header__content-link",children:Object(p.jsx)(r.b,{to:"/favorites",children:Object(p.jsx)("img",{width:25,height:20,src:"images/favorite.svg",alt:"favorites"})})}),Object(p.jsx)("li",{className:"header__content-link",children:Object(p.jsx)(r.b,{to:"/orders",children:Object(p.jsx)("img",{width:25,height:20,src:"images/user.svg",alt:"user"})})})]})]})},v=function(e){var t=e.title,s=e.image,c=e.description,r=a.a.useContext(O).setCartOpened;return Object(p.jsxs)("div",{className:"drawer",children:[Object(p.jsxs)("h3",{className:"drawer__title",children:["Basket",Object(p.jsx)("img",{onClick:function(){return r(!1)},className:"drawer__item-close",src:"images/close.svg",width:30,height:30,alt:"close"})]}),Object(p.jsxs)("div",{className:"drawer__items--empty",children:[Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)("img",{width:"212",src:s,alt:"shop-cart"}),Object(p.jsx)("p",{children:c})]}),Object(p.jsx)("button",{onClick:function(){return r(!1)},className:"drawer__list-item--buy",children:"Back"})]})]})},f=function(e){return new Promise((function(t,s){return setTimeout(t,e)}))};var g=function(e){var t=e.onClose,s=e.onRemove,c=e.items,r=void 0===c?[]:c,i=a.a.useContext(O),n=i.cartItems,l=i.setCartItems,d=a.a.useState(!1),o=Object(u.a)(d,2),h=o[0],b=o[1],_=a.a.useState(!1),g=Object(u.a)(_,2),N=g[0],k=g[1],y=a.a.useState(null),w=Object(u.a)(y,2),C=w[0],I=w[1],S=n.reduce((function(e,t){return t.price+e}),0),L=function(){var e=Object(m.a)(j.a.mark((function e(){var t,s,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,x.a.post("https://6170981923781c0017289aa8.mockapi.io/orders",{items:n});case 4:t=e.sent,s=t.data,I(s.id),b(!0),l([]),c=0;case 10:if(!(c<n.length)){e.next=19;break}return a=n[c],e.next=14,x.a.delete("https://6170981923781c0017289aa8.mockapi.io/orders/"+a.id);case 14:return e.next=16,f(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("failed to place an order");case 24:k(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"overlay",children:Object(p.jsxs)("div",{className:"drawer",children:[Object(p.jsxs)("h3",{className:"drawer__title",children:["Basket",Object(p.jsx)("img",{onClick:t,className:"drawer__item-close",src:"images/close.svg",width:30,height:30,alt:"close"})]}),r.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"drawer__items",children:r.map((function(e){return Object(p.jsxs)("div",{className:"drawer__item",children:[Object(p.jsx)("img",{width:70,height:70,src:e.imageUrl,alt:"plants"}),Object(p.jsxs)("div",{className:"item__content",children:[Object(p.jsx)("p",{className:"item__content-text",children:e.title}),Object(p.jsxs)("b",{className:"item__content-price",children:[e.price,".00 IDR"]})]}),Object(p.jsx)("img",{onClick:function(){return s(e.id)},className:"drawer__item-close",src:"images/close.svg",width:30,height:30,alt:"close"})]},e.id)}))}),Object(p.jsxs)("div",{className:"drawer__list",children:[Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{className:"drawer__list-item",children:[Object(p.jsx)("span",{className:"drawer__list-item--total",children:"Total:"}),Object(p.jsx)("div",{className:"drawer__list-item--dashed"}),Object(p.jsxs)("b",{children:["IDR ",S]})]})}),Object(p.jsx)("button",{disabled:N,onClick:L,className:"drawer__list-item--buy",children:"Buy"})]})]}):Object(p.jsx)(v,{title:h?"Order complete":"\u0421art is empty",image:h?"images/car.svg":"images/shopping-cart.png",description:h?"Your order #".concat(C," is sent to courier delivery"):"Buy something"})]})})},N=s(36);var k=function(e){var t=e.id,s=e.onFavorite,c=e.imageUrl,r=e.title,i=e.price,n=e.onPlus,l=e.favorited,d=void 0!==l&&l,o=(e.added,e.loading),j=void 0!==o&&o,m=a.a.useContext(O).isItemAdded,h=a.a.useState(d),b=Object(u.a)(h,2),x=b[0],_=b[1],v={id:t,parentId:t,imageUrl:c,title:r,price:i};return Object(p.jsx)("div",{className:"product__item",children:j?Object(p.jsxs)(N.a,{speed:4,width:217,height:282,viewBox:"0 0 217 282",backgroundColor:"#c2f4d8",foregroundColor:"#156a43",children:[Object(p.jsx)("rect",{x:"0",y:"0",rx:"22",ry:"22",width:"190",height:"217"}),Object(p.jsx)("rect",{x:"0",y:"230",rx:"22",ry:"22",width:"110",height:"48"}),Object(p.jsx)("rect",{x:"143",y:"231",rx:"100",ry:"100",width:"48",height:"48"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"product__item-favorite",onClick:function(){s({id:t,imageUrl:c,title:r,price:i}),_(!x)},children:Object(p.jsx)("img",{src:x?"images/liked.svg":"images/unliked.svg",width:25,height:25,alt:"liked"})}),Object(p.jsx)("img",{className:"product__item-img",src:c,width:196}),Object(p.jsxs)("div",{className:"product__item-description",children:[Object(p.jsxs)("div",{className:"product__item-description--block",children:[Object(p.jsx)("h6",{className:"product__item-name",children:r}),Object(p.jsxs)("p",{className:"product__item-price",children:["IDR ",i,".000"]})]}),Object(p.jsx)("button",{className:"product__item-add",onClick:function(){n(v)},children:Object(p.jsx)("img",{src:m(t)?"images/check.svg":"images/add.svg",width:30,height:30})})]})]})})};var y=function(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsxs)("div",{className:"footer__adress",children:[Object(p.jsx)("h3",{className:"footer__adress-title",children:"plantku"}),Object(p.jsx)("div",{className:"footer__adress-name",children:"Plantku House"}),Object(p.jsx)("p",{className:"footer__adress-text",children:"Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282"})]}),Object(p.jsxs)("div",{className:"footer__menu",children:[Object(p.jsx)("h6",{className:"footer__menu-title",children:"Perusahaan"}),Object(p.jsxs)("ul",{className:"footer__list",children:[Object(p.jsx)("li",{className:"footer__list-item",children:Object(p.jsx)("a",{href:"",className:"footer__list-item--link",children:"Tentang Kami"})}),Object(p.jsx)("li",{className:"footer__list-item",children:Object(p.jsx)("a",{href:"",className:"footer__list-item--link",children:"Hubungi Kami"})})]})]}),Object(p.jsxs)("div",{className:"footer__menu",children:[Object(p.jsx)("h6",{className:"footer__menu-title",children:"Produk"}),Object(p.jsxs)("ul",{className:"footer__list",children:[Object(p.jsx)("li",{className:"footer__list-item",children:Object(p.jsx)("a",{href:"#",className:"footer__list-item--link",children:"Tanaman"})}),Object(p.jsx)("li",{className:"footer__list-item",children:Object(p.jsx)("a",{href:"#",className:"footer__list-item--link",children:"Tanaman Lain"})})]})]}),Object(p.jsxs)("div",{className:"footer__input",children:[Object(p.jsx)("h3",{className:"footer__input-title",children:"Berlangganan Email Kami"}),Object(p.jsx)("input",{className:"footer__input-input",type:"text",placeholder:"Masukan Alamat Email"}),Object(p.jsx)("button",{className:"footer__input-btn",children:"Submit"})]})]})};var w=function(e){var t=e.items,s=e.searchValue,c=e.setSearchValue,r=e.onChangeSearchInput,i=e.onAddToCart,n=e.onAddToFavorite,o=e.Footer,j=e.isLoading;return a.a.useContext(O).isItemAdded,Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"benefits",children:[Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsxs)("div",{className:"card__content",children:[Object(p.jsx)("img",{src:"images/car.svg"}),Object(p.jsxs)("h3",{className:"card__title",children:["Fast ",Object(p.jsx)("br",{}),"Delivery"]})]}),Object(p.jsx)("h6",{className:"card__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "})]})}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsxs)("div",{className:"card__content",children:[Object(p.jsx)("img",{src:"images/headphones.svg"}),Object(p.jsxs)("h3",{className:"card__title",children:["Great Customer ",Object(p.jsx)("br",{})," Service"]})]}),Object(p.jsx)("h6",{className:"card__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "})]})}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsxs)("div",{className:"card__content",children:[Object(p.jsx)("img",{src:"images/plant.svg"}),Object(p.jsxs)("h3",{className:"card__title",children:["Original ",Object(p.jsx)("br",{})," Plants"]})]}),Object(p.jsx)("h6",{className:"card__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "})]})}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsxs)("div",{className:"card__content",children:[Object(p.jsx)("img",{src:"images/dollar.svg"}),Object(p.jsxs)("h3",{className:"card__title",children:["Affordable ",Object(p.jsx)("br",{})," Price"]})]}),Object(p.jsx)("h6",{className:"card__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "})]})})]}),Object(p.jsxs)("div",{className:"product",children:[Object(p.jsxs)("div",{className:"product__list",children:[Object(p.jsx)("h3",{className:"product__list-title",children:"Featured Plants"}),Object(p.jsxs)("div",{className:"product__list-search",children:[Object(p.jsx)("img",{src:"images/search.svg",alt:"search"}),s&&Object(p.jsx)("img",{onClick:function(){return c("")},className:"product__list-search--clear",src:"images/close.svg",width:15,height:15,alt:"clear"}),Object(p.jsx)("input",{onChange:r,value:s,className:"product__list-search--placeholder",placeholder:"Search..."})]})]}),Object(p.jsx)("div",{className:"product__tools",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return(j?Object(d.a)(Array(10)):e).map((function(e,t){return Object(p.jsx)(k,Object(l.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return i(e)},loading:j},e),t)}))}()})]}),Object(p.jsxs)("div",{className:"services",children:[Object(p.jsxs)("div",{className:"services__content",children:[Object(p.jsx)("h3",{className:"services__content-title",children:"Buy more plants, it helps you to be relaxed"}),Object(p.jsx)("p",{className:"services__content-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim."}),Object(p.jsx)("div",{className:"services__content-img",children:Object(p.jsx)("img",{src:"images/services-content.png",alt:"services"})})]}),Object(p.jsx)("div",{className:"services__image",children:Object(p.jsx)("img",{src:"images/services-image.png",alt:"services"})})]}),Object(p.jsxs)("div",{className:"favourites",children:[Object(p.jsxs)("div",{className:"favourites__content",children:[Object(p.jsx)("h1",{className:"favourites__content-title",children:"Get your favourites plant on our shop now"}),Object(p.jsx)("a",{className:"favourites__content-btn",href:"#",children:"Visit Shop"})]}),Object(p.jsx)("div",{className:"favourites__image",children:Object(p.jsx)("img",{src:"images/favourites.png",alt:"favourites"})})]}),Object(p.jsx)(o,{})]})};var C=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("div",{className:"product__list",children:Object(p.jsx)("h3",{className:"product__list-title",children:"My Orders"})}),Object(p.jsx)("div",{className:"product__tools"})]}),Object(p.jsx)(y,{})]})};var I=function(){var e=a.a.useContext(O),t=e.favorites,s=e.onAddToFavorite;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("div",{className:"product__list",children:Object(p.jsx)("h3",{className:"product__list-title",children:"Favorites"})}),Object(p.jsx)("div",{className:"product__tools",children:t.map((function(e,t){return Object(p.jsx)(k,{id:e.id,title:e.title,price:e.price,imageUrl:e.imageUrl,favorited:!0,onFavorite:s},t)}))})]}),Object(p.jsx)(y,{})]})};var S=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),s=t[0],c=t[1],r=a.a.useState([]),i=Object(u.a)(r,2),n=i[0],o=i[1],b=a.a.useState([]),v=Object(u.a)(b,2),f=v[0],N=v[1],k=a.a.useState(""),S=Object(u.a)(k,2),L=S[0],F=S[1],A=a.a.useState(!1),P=Object(u.a)(A,2),T=P[0],B=P[1],D=a.a.useState(!0),R=Object(u.a)(D,2),U=R[0],K=R[1];a.a.useEffect((function(){function e(){return(e=Object(m.a)(j.a.mark((function e(){var t,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://6170981923781c0017289aa8.mockapi.io/items");case 3:return t=e.sent,e.next=6,x.a.get("https://6170981923781c0017289aa8.mockapi.io/cart");case 6:return s=e.sent,e.next=9,x.a.get("https://6170981923781c0017289aa8.mockapi.io/favorites");case 9:a=e.sent,K(!1),o(s.data),N(a.data),c(t.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error data");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var M=function(){var e=Object(m.a)(j.a.mark((function e(t){var s,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(s=n.find((function(e){return Number(e.id)===Number(t.id)})))){e.next=8;break}return o((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://6170981923781c0017289aa8.mockapi.io/cart/".concat(s.id));case 6:e.next=14;break;case 8:return o((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,x.a.post("https://6170981923781c0017289aa8.mockapi.io/cart",t);case 11:c=e.sent,a=c.data,o((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(l.a)(Object(l.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("cart error!"),console.error("error");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(m.a)(j.a.mark((function e(t){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!f.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}x.a.delete("https://6170981923781c0017289aa8.mockapi.io/favorites/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,x.a.post("https://6170981923781c0017289aa8.mockapi.io/favorites",t);case 8:s=e.sent,c=s.data,N((function(e){return[].concat(Object(d.a)(e),[c])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("error");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(O.Provider,{value:{items:s,cartItems:n,favorites:f,isItemAdded:function(e){return n.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:V,setCartOpened:B,setCartItems:o},children:Object(p.jsxs)("div",{className:"wrapper",children:[T&&Object(p.jsx)(g,{items:n,onClose:function(){return B(!1)},onRemove:function(e){try{x.a.delete("https://6170981923781c0017289aa8.mockapi.io/cart/".concat(e)),o((function(t){return t.filter((function(t){return Number(t.parentId)!==Number(e)}))}))}catch(t){alert("error delete")}}}),Object(p.jsx)(_,{onClickCart:function(){return B(!0)}}),Object(p.jsx)(h.a,{path:"/",exact:!0,children:Object(p.jsx)(w,{items:s,cartItems:n,searchValue:L,setSearchValue:F,onChangeSearchInput:function(e){F(e.target.value)},onAddToCart:M,onAddToFavorite:V,Footer:y,isLoading:U})}),Object(p.jsx)(h.a,{path:"/orders",exact:!0,children:Object(p.jsx)(C,{})}),Object(p.jsx)(h.a,{path:"/favorites",exact:!0,children:Object(p.jsx)(I,{})})]})})};n.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(r.a,{children:Object(p.jsx)(S,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f55a7c35.chunk.js.map