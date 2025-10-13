import { createUserByIdService, getAllUserService, getUserByIdService, updateUserbyidService,deleteUserService } from "../../Models/userModel.js";

const handleResponse =(res, status, message, data = null ) => {
     r,es.status(status).json({
        status,
        message,
        data
     })
}

export const createUser =async (req, res, next) => {
    const {firstname, name, phone_number, mail, adress, city, salary_claim} = req.body;
    try{
        const newuser = await createUserService(firstname, name, phone_number, mail, adress, city, salary_claim);
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
  const {firstname, name, phone_number, mail, adress, city, salary_claim} = req.body;  
    try{
        const updateUser = await updateUserService(req.params.id, firstnamename, name, phone_number, mail, adress, city, salary_claim);
        if(!updateUser) return handleResponse (404, "User not found");
        handleResponse (res,200, "successfully", updateUser)
    }catch (err){
        next(err);
    }
};

export const deleteUser =async (req, res, next) => {
    try{
        const deleteUser = await deleteUserService(req.params.id, firstnamename, name, phone_number, mail, adress, city, salary_claim);
        if(!deleteUser) return handleResponse (404, "User not found");
        handleResponse (res,200, "successfully", deleteUser)
    }catch (err){
        next(err);
    }
};