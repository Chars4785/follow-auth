import jwt from 'jsonwebtoken';
const TOKEN_TYPE = 'Bearer';
const TOKEN_ALGORITHM = 'HS256';
const { JWT_SECRET_KEY } = process.env;

const signToken = async ({ data, tokenType, expireIn }) => {
    const TOKEN_EXPIRE_IN = Math.floor( Date.now() / 1000 ) + ( 60 * 60 * 24 );
    const REFRESH_TOKEN_EXPIRE_IN = Math.floor( Date.now() / 1000 ) + ( 60 * 60 * 24 * 90 );
    const accessToken = await jwt.sign({ data, exp: TOKEN_EXPIRE_IN }, process.env.JWT_SECRET_KEY, { algorithm: TOKEN_ALGORITHM });
    const refreshToken = await jwt.sign({ data, exp: REFRESH_TOKEN_EXPIRE_IN }, process.env.JWT_SECRET_KEY, { algorithm: TOKEN_ALGORITHM });
    return {
        tokenType: tokenType || TOKEN_TYPE,
        accessToken,
        refreshToken,
        expiresAt: expireIn || TOKEN_EXPIRE_IN,
    };
}

const decodeToken = async (request) => {
    const { authorization } = request.headers;
    if ( !authorization ){
        throw new Error( 'authorization is not found' );
    };
    const token = authorization.replace( 'Bearer ', '' );
    try {
        request.decoded = await jwt.verify( token, JWT_SECRET_KEY );
    } catch ( e ) {
        const decoded = await jwt.decode(token);
        let error;
        if ( decoded && decoded.data ) {
            const { userId } = decoded.data;
            error = new Error( `accessToken[${token}] ${userId}: ${e.message}` );
        } else {
            error = new Error( e.message );
        }
        error.statusCode = 401;
        throw error;
    };
};

const checkToken = async ( req, res, next ) =>{
    // try{
    //     await decodeToken(req)
    // }catch(e){
    //     res.send('error',e)
    // }
    // console.log(req)
    next();
}

export default checkToken;