import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(Connection => {
      pool.releaseConnection(Connection);
      console.log('DB in connect')
    });

export default pool;
