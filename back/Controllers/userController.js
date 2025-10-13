import { 
    getAllUserService, 
    getUserByIdService, 
    createUserByIdService, 
    updateUserByIdService, 
    deleteUserByIdService
} from "../User/Models/userModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getAllUser = async (req, res, next) => {
    try {
        const allusers = await getAllUserService();
        handleResponse(res, 200, "Users fetched successfully", allusers)
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User fetched successfully", user)
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const {prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password} = req.body;
    try {
        const newUser = await createUserByIdService(name, email);
        handleResponse(res, 201, "User created successfully", newUser)
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    const {prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password} = req.body
    try {
        const updateduser = await updateUserByIdService(req.params.id, name, email);
        if(!updateduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 201, "User updated successfully", updateduser)
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteduser = await deleteUserByIdService(req.params.id);
        if(!deleteduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User deleted successfully", deleteduser)
    } catch (error) {
        next(error);
    }
}