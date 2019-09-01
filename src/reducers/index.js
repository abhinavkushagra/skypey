import { combineReducers } from "redux";
import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
    user,
    messages, 
    contacts,
    typing,
    activeUserId
});
