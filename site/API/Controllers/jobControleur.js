import { 
    getAllJobService, 
    getJobBySecteurActivitéService,
    getJobByVilleService,
    createJobService, 
    updateJobByIdService, 
    deleteJobByIdService
} from "../Models/jobModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getAllJob = async (req, res, next) => {
    try {
        const allJob = await getAllJobService();
        handleResponse(res, 200, "Users fetched successfully", allJob)
    } catch (error) {
        next(error);
    }
}

export const getJobBySecteur = async (req, res, next) => {
    try {
        const Job = await getJobBySecteurActivitéService(req.params.secteur_activité);
        if(!Job) return handleResponse(res, 404, "Job not found")
        handleResponse(res, 200, "Job fetched successfully", Job)
    } catch (error) {
        next(error);
    }
}

export const getJobByVille = async (req, res, next) => {
    try {
        const Job = await getJobByVilleService(req.params.ville);
        if(!Job) return handleResponse(res, 404, "Job not found")
        handleResponse(res, 200, "Job fetched successfully", Job)
    } catch (error) {
        next(error);
    }
}

export const createJob = async (req, res, next) => {
    const {nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif, id} = req.body;
    try {
        const newJob = await createJobService({nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif, id});
        handleResponse(res, 201, "Job created successfully", newJob)
    } catch (error) {
        next(error);
    }
}

export const updateJob = async (req, res, next) => {
    const {nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif, id} = req.body
    try {
        const updatedJob = await updateJobByIdService(req.params.id,{ nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif, id});
        if(!updatedJob) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "Job updated successfully", updatedJob)
    } catch (error) {
        next(error);
    }
}

export const deleteJob = async (req, res, next) => {
    try {
        const deletedJob = await deleteJobByIdService(req.params.id);
        if(!deletedJob) return handleResponse(res, 404, "Job not found")
        handleResponse(res, 200, "Job deleted successfully", deletedJob)
    } catch (error) {
        next(error);
    }
}