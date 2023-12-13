const asyncHandler = (requestHandler) =>{         //this is promises
    return (req,res,next) => { 
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}








/* const asyncHandler = (fn) => async(req,res,next) => {  // this is the wraper
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success : false,
            message : err.message
        })
    }
} */