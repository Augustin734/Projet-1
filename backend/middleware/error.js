const some_error = (err, req, res, next) => {
    console.log(err.stack());
    res.send(500).json({
        status:500,
        message : "Oups a problem appeared ",
        error : err.message ,
        
    });
};

export default error;