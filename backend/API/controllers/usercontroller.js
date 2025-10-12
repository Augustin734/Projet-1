import { createUserByIdService, getAllUserService, getUserByIdService, updateUserbyidService,deleteUserService } from "../../Models/userModel.js";

const handleResponse =(res, status, message, data = null ) => {
     r,es.status(status).json({
        status,
        message,
        data
     })
}

export const createUser =async (req, res, next) => {
    const {username, name, phone_number, mail, adress, city, salary_claim} = req.body;
    try{
        const newuser = await createUserService(username, name, phone_number, mail, adress, city, salary_claim);
        handleResponse (res,201, "successfully", newuser)
    }catch (err){
        next(err);
    }
};

export const getAllUser =async (req, res, next) => {
    try{
        const users = await getAllUserService();
        handleResponse (res,200, "successfully", users)
    }catch (err){
        next(err);
    }
};

export const getUserById =async (req, res, next) => {
    try{
        const user = await getUuserByIdsrvice(req.params.id);
        if(!user) return handleResponse (404, "User not found");
        handleResponse (res,200, "successfully", users)
    }catch (err){
        next(err);
    }
};

export const updateUser =async (req, res, next) => {
  const {username, name, phone_number, mail, adress, city, salary_claim} = req.body;  
    try{
        const updateUser = await updateUserService(req.params.id, username, name, phone_number, mail, adress, city, salary_claim);
        if(!user) return handleResponse (404, "User not found");
        handleResponse (res,200, "successfully", updateUser)
    }catch (err){
        next(err);
    }
};

export const deleteUser =async (req, res, next) => {
    try{
        const deleteUser = await deleteUserService(req.params.id, username, name, phone_number, mail, adress, city, salary_claim);
        if(!user) return handleResponse (404, "User not found");
        handleResponse (res,200, "successfully", deleteUser)
    }catch (err){
        next(err);
    }
};