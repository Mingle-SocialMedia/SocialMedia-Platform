import './chat.css';
import { useState } from 'react';

// Dummy user data
const dummyUsers = [
  { _id: '1', Username: 'Mugeish', Phone_no: '123-456-7890', image: 'https://via.placeholder.com/40' },
  { _id: '2', Username: 'John Doe', Phone_no: '098-765-4321', image: 'https://via.placeholder.com/40' },
];

const Chat = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { Msg: newMessage, fromMe: true }]);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <>
            <div className="chat-container">
                <div className="left-chat">
                    <div className="nav">
                        <nav>
                            <h1>Mingle Chat</h1>
                        </nav>
                    </div>
                    <div className="list">
                        <ul>
                            {dummyUsers.map(user => (
                                <li
                                    key={user._id}
                                    className={`cont ${selectedUser && selectedUser._id === user._id ? 'active' : ''}`}
                                    onClick={() => handleSelectUser(user)}
                                >
                                    <div className="profIm">
                                        <img src={user.image} alt="User" />
                                    </div>
                                    <div className="name">
                                        <h3>{user.Username}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right-chat">
                    {selectedUser ? (
                        <div className="container">
                            <div className="navR">
                                <div className="prop">
                                    <div className="profIm">
                                        <img src={selectedUser.image} alt="User" />
                                    </div>
                                    <div className="name">
                                        <h2>{selectedUser.Username}</h2>
                                        <p>{selectedUser.Phone_no}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-box">
                                <ul>
                                    {messages.map((message, index) => (
                                        <li key={index} className={message.fromMe ? "you" : "other"}>
                                            {message.Msg}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    className="input-field"
                                    id="messageInput"
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <button className="btn-edit" onClick={sendMessage}>
                                    Send
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="no-chat">Select a user to start chatting.</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Chat;
