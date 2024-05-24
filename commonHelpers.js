import{i as a,S as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(r){const o="https://pixabay.com/api/",i="44033528-44943d254def6182670dcc208",s=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d({webformatURL:r,largeImageURL:o,tags:i,likes:s,views:e,comments:t,downloads:n}){return`<li class="gallery">
      <a href=${o}>
        <img src=${r} alt="${i}" />
        <div class="info">
        <div class="info-rating">
        <h3>Likes</h3>
        <p>${s}</p>
        </div>
        <div class="info-rating">
        <h3>Views</h3>
        <p>${e}</p>
        </div>
        <div class="info-rating">
        <h3>Comments</h3>
        <p>${t}</p>
        </div>
        <div class="info-rating">
        <h3>Downloads</h3>
        <p>${n}</p>
        </div>
        </div>
        </a>
    </li>`}function h(r){return r.map(d).join("")}const c="/goit-js-hw-12/assets/error-7f058cba.svg",m=document.querySelector(".js-form"),g=document.querySelector(".js-gallery-list"),l=document.querySelector(".loader");m.addEventListener("submit",p);function p(r){r.preventDefault();const o=r.currentTarget.elements.search.value.trim();if(o==="")return a.error({message:"Sorry, the input field cannot be empty!",maxWidth:360,position:"topRight",iconUrl:c,backgroundColor:"#ef4040",messageColor:"#fff"});l.classList.remove("visually-hidden"),u(o).then(i=>{i.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:360,position:"topRight",iconUrl:c,backgroundColor:"#ef4040",messageColor:"#fff"}),g.innerHTML=h(i.hits),lightbox=new f(".gallery a"),lightbox.refresh()}).catch(i=>{console.log(i)}).finally(()=>{l.classList.add("visually-hidden"),r.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
