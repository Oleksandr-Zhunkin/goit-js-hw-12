export function getPhotos(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '44033528-44943d254def6182670dcc208';
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
