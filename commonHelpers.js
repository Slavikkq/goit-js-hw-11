(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();$(document).ready(function(){const c=$("#searchForm"),o=$("#searchInput"),i=$("#gallery"),n=$("#loader"),e="41927484-8453b2dd3e18520885b5ece2f",t="https://pixabay.com/api/";c.submit(function(s){s.preventDefault();const l=o.val().trim();l!==""&&(n.show(),i.empty(),axios.get(t,{params:{key:e,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(a){const d=a.data.hits;d.length===0?iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(d.forEach(function(r){const f=$(`
                <div class="card">
                  <a href="${r.webformatURL}" data-lightbox="gallery" data-title="${r.tags}">
                    <img src="${r.largeImageURL}" alt="${r.tags}">
                  </a>
                  <div class="image-info">
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                  </div>
                </div>
              `);i.append(f)}),new SimpleLightbox(".card a",{captionsDelayTime:250,onComplete:()=>{}}).refresh())}).catch(function(a){console.error("Error fetching images:",a),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(function(){n.hide()}))})});
//# sourceMappingURL=commonHelpers.js.map
