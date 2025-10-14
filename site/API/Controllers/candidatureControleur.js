import { 
    getAllCandidatureService, 
    getCandidatureByIdService, 
    createCandidatureByIdService, 
    updateCandidatureByIdService, 
    deleteCandidatureByIdService
} from "../Models/candidatureModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getAllCandidature = async (req, res, next) => {
    try {
        const allCandidature = await getAllCandidatureService();
        handleResponse(res, 200, "Candidatures fetched successfully", allCandidature)
    } catch (error) {
        next(err);
    }
}

export const getCandidature = async (req, res, next) => {
    try {
        const candidature = await getCandidatureByIdService(req.params.id);
        if(!candidature) return handleResponse(res, 404, "Candidature not found")
        handleResponse(res, 200, "Candidature fetched successfully", candidature)
    } catch (error) {
        next(err);
    }
}

export const createCandidature = async (req, res, next) => {
    const {nom, lettre_motivation, status_candidature, date_de_postulation} = req.body;
    try {
        const newCandidature = await createCandidatureByIdService(nom, lettre_motivation, status_candidature, date_de_postulation);
        handleResponse(res, 200, "Candidature created successfully", newCandidature)
    } catch (err) {
        next(err);
    }
}

export const updateCandidature = async (req, res, next) => {
    const {nom, lettre_motivation, status_candidature, date_de_postulation} = req.body
    try {
        const updatedcandidature = await updateCandidatureByIdService(req.params.id, nom, lettre_motivation, status_candidature, date_de_postulation);
        if(!updatedcandidature) return handleResponse(res, 404, "Candidature not found")
        handleResponse(res, 200, "Candidature updated successfully", updatedcandidature)
    } catch (error) {
        next(err);
    }
}

export const deleteCandidature = async (req, res, next) => {
    try {
        const deletedCandidature = await deleteCandidatureByIdService(req.params.id);
        if(!deletedCandidature) return handleResponse(res, 404, "Candidature not found")
        handleResponse(res, 200, "Candidature deleted successfully", deletedCandidature)
    } catch (error) {
        next(err);
    }
}