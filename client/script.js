const apiUrl = 'http://localhost:5001/api/get/';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Errore nella richiesta API');
    }

    const data = await response.json();
    console.log('Dati ricevuti:', data);
  } catch (error) {
    console.error('Errore durante la richiesta API:', error.message);
  }
}

// Chiamata alla funzione asincrona
fetchData();
