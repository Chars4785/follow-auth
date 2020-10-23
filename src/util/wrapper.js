
export default function wrapper(asyncFun){
    return (async( req,res,next )=>{
        try{
            return await asyncFun(req, res, next);
        }catch(error){
            return next(error);
        }
    })
}