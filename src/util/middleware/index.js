import jwt from 'jsonwebtoken';
const TOKEN_TYPE = 'Bearer';
const TOKEN_ALGORITHM = 'HS256';
const { JWT_SECRET_KEY } = process.env;

async function checkToken( req, res, next ){
    const { authorization } = req.headers;
    if ( !authorization ){
        throw new Error( 'authorization is not found' );
    };
    const token = authorization.replace( 'Bearer ', '' );
    try {
        req.decoded = await jwt.verify( token, JWT_SECRET_KEY );
        next();
    } catch ( e ) {
        const decoded = await jwt.decode(token);
        let error;
        if ( decoded && decoded.data ) {
            const { userId } = decoded.data;
            error = new Error( `Token error accessToken userId: ${userId}: ${e.message}` );
        } else {
            error = new Error( e.message );
        }
        error.statusCode = 401;
        next(error);
    };
}

function allowRoles(req, res, next){
    next();
}

export default {
    allowRoles,
    checkToken,
}