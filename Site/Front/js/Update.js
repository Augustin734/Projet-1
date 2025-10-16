export async function updateApplication(id, applicationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/Applications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erreur ${response.status}: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'application ${id}:`, error);
    throw error;
  }
}