import { 
    getalluserService, 
    getuserbyidService, 
    createuserbyidService, 
    updateuserbyidService, 
    deleteuserbyidService
} from "../Models/userModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getalluser = async (req, res, next) => {
    try {
        const allusers = await getalluserService();
        handleResponse(res, 201, "Users fetched successfully", allusers)
    } catch (error) {
        next(err);
    }
}

export const getuser = async (req, res, next) => {
    try {
        const user = await getuserbyidService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User fetched successfully", user)
    } catch (error) {
        next(err);
    }
}

export const createUser = async (req, res, next) => {
    const {name, email } = req.body;
    try {
        const newUser = await createuserbyidService(prénom, nom, phone_number, mail, adresse, ville, prétention_salariale);
        handleResponse(res, 200, "User created successfully", newUser)
    } catch (err) {
        next(err);
    }
}

export const updateuser = async (req, res, next) => {
    const {name, email} = req.body
    try {
        const updateduser = await updateuserbyidService(req.params.id, prénom, nom, phone_number, mail, adresse, ville, prétention_salariale);
        if(!updateduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 201, "User updated successfully", updateduser)
    } catch (error) {
        next(err);
    }
}

export const deleteuser = async (req, res, next) => {
    try {
        const deleteduser = await deleteuserbyidService(req.params.id);
        if(!deleteduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User deleted successfully", deleteduser)
    } catch (error) {
        next(err);
    }
}