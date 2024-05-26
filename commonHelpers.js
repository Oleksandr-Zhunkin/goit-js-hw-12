import{a as p,S,i as u}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();p.defaults.baseURL="https://pixabay.com/api/";let j=1;const y=15;async function v(e,t){const r={params:{key:"44033528-44943d254def6182670dcc208",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:y}};return(await p.get("",r)).data}function E({webformatURL:e,largeImageURL:t,tags:r,likes:n,views:o,comments:s,downloads:a}){return`<li class="gallery">
      <a href=${t}>
        <img src=${e} alt="${r}" />
        <div class="info">
        <div class="info-rating">
        <h3>Likes</h3>
        <p>${n}</p>
        </div>
        <div class="info-rating">
        <h3>Views</h3>
        <p>${o}</p>
        </div>
        <div class="info-rating">
        <h3>Comments</h3>
        <p>${s}</p>
        </div>
        <div class="info-rating">
        <h3>Downloads</h3>
        <p>${a}</p>
        </div>
        </div>
        </a>
    </li>`}function L(e){return e.map(E).join("")}const O="/goit-js-hw-12/assets/error-7f058cba.svg",q="/goit-js-hw-12/assets/caution-8cea4238.svg",W="/goit-js-hw-12/assets/imgok-55aec323.svg",$="/goit-js-hw-12/assets/hello-934e4862.svg",H=document.querySelector(".js-form"),h=document.querySelector(".js-gallery-list"),c=document.querySelector(".loader"),g=document.querySelector(".js-load-more"),w=document.querySelector(".js-text-load"),b=new S(".gallery a");let i=j,l=null,d=1;H.addEventListener("submit",T);g.addEventListener("click",M);document.addEventListener("DOMContentLoaded",B);async function T(e){if(e.preventDefault(),l=e.currentTarget.elements.search.value.trim(),l==="")return f(),m("Sorry, the input field cannot be empty!");x();try{const t=await v(l,i);t.hits.length===0&&(f(),m("Sorry, there are no images matching your search query. Please try again!")),t.totalHits!==0&&R(`We found ${t.totalHits} images for your request!`),h.innerHTML=L(t.hits),d=Math.ceil(t.totalHits/y),i<d&&C(),b.refresh()}catch(t){console.log(t)}finally{P(),e.target.reset()}}async function M(e){i+=1,c.classList.remove("visually-hidden"),f(),x();try{const t=await v(l,i);h.insertAdjacentHTML("beforeend",L(t.hits)),b.refresh(),i===d&&k("We're sorry, but you've reached the end of search results.")}catch(t){console.log(t)}finally{P(),i!==d&&C(),c.classList.add("visually-hidden"),U()}}function C(){g.classList.remove("visually-hidden")}function f(){g.classList.add("visually-hidden")}function x(){c.classList.remove("visually-hidden"),w.classList.remove("visually-hidden")}function P(){w.classList.add("visually-hidden"),c.classList.add("visually-hidden")}function m(e){u.error({title:"Error",message:e,maxWidth:360,position:"topRight",iconUrl:O,backgroundColor:"#ef4040",messageColor:"#fff"})}function R(e){u.success({title:"OK",message:e,maxWidth:360,position:"topRight",iconUrl:W,backgroundColor:"#59a10d",messageColor:"#fff"})}function k(e){u.warning({message:e,maxWidth:360,position:"topRight",iconUrl:q,backgroundColor:"#ffa000",messageColor:"#fff"})}function B(){u.info({message:"Welcome to our website",maxWidth:360,position:"topRight",iconUrl:$,backgroundColor:"#09f",messageColor:"#fff"})}function U(){const e=h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
