import { 
    getAllUserService, 
    getUserByIdService, 
    createUserService, 
    updateUserByIdService, 
    deleteUserByIdService
} from "../Models/peopleModel.js";

// Standardized repsonse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data
    });
};

// Every CRUD controlled response

export const getAllUser = async (req, res, next) => {
    try {
        const allUsers = await getAllUserService();
        handleResponse(res, 200, "Users fetched successfully", allUsers)
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const User = await getUserByIdService(req.params.id);
        if(!User) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User fetched successfully", User)
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const {prénom, nom, phone_number, mail, password, adresse, ville} = req.body;
    try {
        const newUser = await createUserService({prénom, nom, phone_number, mail, password, adresse, ville});
        handleResponse(res, 201, "User created successfully", newUser)
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    const {prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password} = req.body
    try {
        const updatedUser = await updateUserByIdService(req.params.id,{ prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password});
        if(!updatedUser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User updated successfully", updatedUser)
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserByIdService(req.params.id);
        if(!deletedUser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User deleted successfully", deletedUser)
    } catch (error) {
        next(error);
    }
}