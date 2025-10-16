
const API_BASE_URL = 'http://localhost:3000'; 


const headers = {
  'Content-Type': 'application/json',
};


async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
}


export async function fetchAllAdvertisements() {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Erreur lors de la récupération des annonces:', error);
    throw error;
  }
}


export async function fetchAdvertisementsByCity(city) {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements/${city}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la récupération des annonces pour ${city}:`, error);
    throw error;
  }
}


export async function fetchAdvertisementsByBusinessSector(businessSector) {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements/${businessSector}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la récupération des annonces pour le secteur ${businessSector}:`, error);
    throw error;
  }
}


export async function createNewAdvertisement(advertisementData) {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements`, {
      method: 'POST',
      headers,
      body: JSON.stringify(advertisementData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Erreur lors de la création de l\'annonce:', error);
    throw error;
  }
}


export async function updateAdvertisement(id, advertisementData) {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(advertisementData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'annonce ${id}:`, error);
    throw error;
  }
}


export async function deleteAdvertisement(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/Advertisements/${id}`, {
      method: 'DELETE',
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'annonce ${id}:`, error);
    throw error;
  }
}