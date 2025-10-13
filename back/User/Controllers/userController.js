import { 
    getAllUserService, 
    getUserByIdService, 
    createUserByIdService, 
    updateUserByIdService, 
    deleteUserByIdService
} from "../Models/userModel.js";

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
        handleResponse(res, 201, "Users fetched successfully", allusers)
    } catch (error) {
        next(err);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User fetched successfully", user)
    } catch (error) {
        next(err);
    }
}

export const createUser = async (req, res, next) => {
    const {name, email } = req.body;
    try {
        const newUser = await createUserByIdService(name, email);
        handleResponse(res, 200, "User created successfully", newUser)
    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const {name, email} = req.body
    try {
        const updateduser = await updateUserByIdService(req.params.id, name, email);
        if(!updateduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 201, "User updated successfully", updateduser)
    } catch (error) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteduser = await deleteUserByIdService(req.params.id);
        if(!deleteduseruser) return handleResponse(res, 404, "User not found")
        handleResponse(res, 200, "User deleted successfully", deleteduser)
    } catch (error) {
        next(err);
    }
}