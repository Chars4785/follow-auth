const jwt = require('jsonwebtoken')
const TOKEN_TYPE = 'Bearer';
const TOKEN_ALGORITHM = 'HS256';
const JWT_SECRET_KEY = '1cLz6hwJBniYMbftNwO9uuaIvzXWBtRUUJxltpkg'
const signToken = async ({ data, tokenType, expireIn }) => {
    const TOKEN_EXPIRE_IN = Math.floor( Date.now() / 1000 ) + ( 60 * 60 * 24 );
    const REFRESH_TOKEN_EXPIRE_IN = Math.floor( Date.now() / 1000 ) + ( 60 * 60 * 24 * 365 * 100 );
    const accessToken = await jwt.sign({ data, exp: TOKEN_EXPIRE_IN }, JWT_SECRET_KEY, { algorithm: TOKEN_ALGORITHM });
    const refreshToken = await jwt.sign({ data, exp: REFRESH_TOKEN_EXPIRE_IN }, JWT_SECRET_KEY, { algorithm: TOKEN_ALGORITHM });
    return {
        tokenType: tokenType || TOKEN_TYPE,
        accessToken,
        refreshToken,
        // expiresAt: expireIn || TOKEN_EXPIRE_IN,
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
        // console.log(request)
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


signToken({ data:{
    userId:'chars',
    password:'follow'
} }).then((c)=>{
    // console.log(c)

})
let request =
{ 
    headers:{
    authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6ImNoYXJzIiwicGFzc3dvcmQiOiJmb2xsb3cifSwiZXhwIjo0NzU5ODI1ODE4LCJpYXQiOjE2MDYyMjU4MTh9._D7R0_7fLXxJ2R0rWlBvVo5DHTnF_F2jN_vcKAVxFfg'
}
}
decodeToken(request).then((c)=>{
    // console.log(c)
})

console.log("re",request);