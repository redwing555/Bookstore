const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VtssYAornL7Gl1QtQvyV/books';

export const addBookApi = async (title, author, id) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      category: author,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export const removeBookApi = async (itemId) => {
  const response = await fetch(`${BASE_URL}/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export const fetchBookstoreData = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
