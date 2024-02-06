"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const __1 = require("..");
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function createUser(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const createUserText = `INSERT INTO users (username,password,name)  VALUES ($1,$2,$3) RETURNING username,password,name;`;
        const userDetails = [username, password, name];
        const result = yield __1.client.query(createUserText, userDetails);
        return result.rows[0];
    });
}
exports.createUser = createUser;
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(userId);
        const getUserText = `SELECT id,username,password,name FROM users WHERE id = ${userId};`;
        const result = yield __1.client.query(getUserText);
        console.log(result.rows[0]);
        return result.rows[0];
    });
}
exports.getUser = getUser;
