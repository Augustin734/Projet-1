import { 
    getAllEmployeurService, 
    getEmployeurByIdService, 
    createEmployeurService, 
    updateEmployeurByIdService, 
    deleteEmployeurByIdService
} from "../Models/employeurModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getAllEmployeur = async (req, res, next) => {
    try {
        const allEmployeur = await getAllEmployeurService();
        handleResponse(res, 200, "Employeurs fetched successfully", allEmployeur)
    } catch (error) {
        next(error);
    }
}

export const getEmployeur = async (req, res, next) => {
    try {
        const Employeur = await getEmployeurByIdService(req.params.id);
        if(!Employeur) return handleResponse(res, 404, "Employeur not found")
        handleResponse(res, 200, "Employeur fetched successfully", Employeur)
    } catch (error) {
        next(error);
    }
}

export const createEmployeur = async (req, res, next) => {
    const {nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password} = req.body;
    try {
        const newEmployeur = await createEmployeur({nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password});
        handleResponse(res, 201, "Employeur created successfully", newEmployeur)
    } catch (error) {
        next(error);
    }
}

export const updateEmployeur = async (req, res, next) => {
    const {nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password} = req.body
    try {
        const updatedEmployeur = await updateEmployeurByIdService(req.params.id, nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password);
        if(!updatedEmployeur) return handleResponse(res, 404, "Employeur not found")
        handleResponse(res, 200, "Employeur updated successfully", updatedEmployeur)
    } catch (error) {
        next(error);
    }
}

export const deleteEmployeur = async (req, res, next) => {
    try {
        const deletedEmployeur = await deleteEmployeurByIdService(req.params.id);
        if(!deletedEmployeur) return handleResponse(res, 404, "Employeur not found")
        handleResponse(res, 200, "Employeur deleted successfully", deletedEmployeur)
    } catch (error) {
        next(error);
    }
}