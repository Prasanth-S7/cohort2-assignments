import { Client } from 'pg';
import { DB_URL } from './config';
import {createUser} from './db/user'
import { createTables } from './db/setup';

export const client = new Client({
    connectionString: DB_URL
});


console.log("connection established");
