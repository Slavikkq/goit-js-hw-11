(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();$(document).ready(function(){const f=$("#searchForm"),r=$("#searchInput"),c=$("#gallery"),s=$("#loader"),e="41927484-8453b2dd3e18520885b5ece2f",o="https://pixabay.com/api/";f.submit(function(d){d.preventDefault();const a=r.val().trim();a!==""&&(s.show(),c.empty(),axios.get(o,{params:{key:e,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(i){const l=i.data.hits;l.length===0?iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(l.forEach(function(t){const u=$(`
                <div class="card">
                  <img src="${t.webformatURL}" data-src="${t.largeImageURL}" alt="${t.tags}">
                  <div class="image-info">
                    <p>Likes: ${t.likes}</p>
                    <p>Views: ${t.views}</p>
                    <p>Comments: ${t.comments}</p>
                    <p>Downloads: ${t.downloads}</p>
                  </div>
                </div>
              `);u.find("img").click(function(){n(t.largeImageURL,t.tags,t.likes,t.views,t.comments,t.downloads)}),c.append(u)}),new SimpleLightbox(".card img",{captionsDelayTime:250}).refresh())}).catch(function(i){console.error("Error fetching images:",i),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(function(){s.hide()}))});function n(d,a,i,l,p,t){iziToast.info({title:a,message:`
          <p>Likes: ${i}</p>
          <p>Views: ${l}</p>
          <p>Comments: ${p}</p>
          <p>Downloads: ${t}</p>
        `,position:"center",timeout:!1,closeOnClick:!0})}});
//# sourceMappingURL=commonHelpers.js.map
