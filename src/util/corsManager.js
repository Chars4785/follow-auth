import cors from 'cors';

export default function corsManager( corsOption ){
    return cors(corsOption)
}