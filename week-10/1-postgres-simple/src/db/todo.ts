import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const createTodoText:string =`INSERT INTO todos(user_id, title, description)  VALUES ($1,$2,$3) RETURNING title,description,done,id;`;
    const todoValues = [userId,title,description];
    const result = await client.query(createTodoText,todoValues);
    return result.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateTodoText = `
        UPDATE todos
        SET done = true
        WHERE id = $1
        RETURNING title, description, done, id;
    `;
    const result = await client.query(updateTodoText, [todoId]);
    return result.rows[0];
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getTodosText = `
        SELECT title, description, done, id,user_id
        FROM todos
        WHERE user_id = $1;
    `;
    const result = await client.query(getTodosText, [userId]);
    return result.rows;
}
