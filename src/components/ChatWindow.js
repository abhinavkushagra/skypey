import React from "react";
import store from "../store";
import Header from "../components/Header";
import _ from "lodash";
import Chats from "../containers/Chats";
import "./ChatWindow.css";
import MessageInput from "../containers/MessageInput"



const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages= {_.values(activeMsgs)} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;