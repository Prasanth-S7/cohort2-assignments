import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const createUserText:string = `INSERT INTO users (username,password,name)  VALUES ($1,$2,$3) RETURNING username,password,name;`;
    const userDetails =[username,password,name];
    const result = await client.query(createUserText,userDetails);
    return result.rows[0]
}


/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    console.log(userId)
    const getUserText = `SELECT id,username,password,name FROM users WHERE id = ${userId};`;
    const result = await client.query(getUserText);
    console.log(result.rows[0]);
    return result.rows[0];
}
