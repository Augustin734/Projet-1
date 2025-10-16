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

export async function fetchAllApplications() {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Erreur lors de la récupération des applications:', error);
    throw error;
  }
}

export async function fetchApplicationById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications/${id}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'application ${id}:`, error);
    throw error;
  }
}


export async function createNewApplication(applicationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications`, {
      method: 'POST',
      headers,
      body: JSON.stringify(applicationData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Erreur lors de la création de l\'application:', error);
    throw error;
  }
}


export async function updateApplication(id, applicationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(applicationData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'application ${id}:`, error);
    throw error;
  }
}


export async function deleteApplication(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications/${id}`, {
      method: 'DELETE',
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'application ${id}:`, error);
    throw error;
  }
}