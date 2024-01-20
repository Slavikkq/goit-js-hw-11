$(document).ready(function () {
  const searchForm = $('#searchForm');
  const searchInput = $('#searchInput');
  const gallery = $('#gallery');
  const loader = $('#loader');

  const apiKey = '41927484-8453b2dd3e18520885b5ece2f';
  const apiUrl = 'https://pixabay.com/api/';

  searchForm.submit(function (event) {
    event.preventDefault();
    const query = searchInput.val().trim();

    if (query !== '') {
      loader.show();
      gallery.empty();

      axios
        .get(apiUrl, {
          params: {
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
          },
        })
        .then(function (response) {
          const images = response.data.hits;

          if (images.length === 0) {
            iziToast.error({
              title: 'Error',
              message:
                'Sorry, there are no images matching your search query. Please try again!',
            });
          } else {
            images.forEach(function (image) {
              const card = $(`
                <div class="card">
                  <a href="${image.webformatURL}" data-lightbox="gallery" data-title="${image.tags}">
                    <img src="${image.largeImageURL}" alt="${image.tags}">
                  </a>
                  <div class="image-info">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                  </div>
                </div>
              `);

              gallery.append(card);
            });

            const lightbox = new SimpleLightbox('.card a', {
              captionsDelayTime: 250,
              onComplete: () => {},
            });

            lightbox.refresh();
          }
        })
        .catch(function (error) {
          console.error('Error fetching images:', error);
          iziToast.error({
            title: 'Error',
            message:
              'An error occurred while fetching images. Please try again later.',
          });
        })
        .finally(function () {
          loader.hide();
        });
    }
  });
});

function openLightbox(imageUrl, tags, likes, views, comments, downloads) {
  iziToast.info({
    title: tags,
    message: `
      <p>Likes: ${likes}</p>
      <p>Views: ${views}</p>
      <p>Comments: ${comments}</p>
      <p>Downloads: ${downloads}</p>
    `,
    position: 'center',
    timeout: false,
    closeOnClick: true,
  });
}
