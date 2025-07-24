import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";
import blacklogo from './assets/blacklogo.png';

function Sidebar() {
    const {
        allThreads,
        setAllThreads,
        currThreadId,
        setNewChat,
        setPrompt,
        setReply,
        setCurrThreadId,
        setPrevChats
    } = useContext(MyContext);

    const getAllThreads = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/thread");
            const res = await response.json();
            const filteredData = res.map(thread => ({
                threadId: thread.threadId,
                title: thread.title
            }));
            setAllThreads(filteredData);
        } catch (err) {
            console.error("Error fetching threads:", err);
        }
    };

    useEffect(() => {
        getAllThreads();
    }, [currThreadId]);

    const createNewChat = () => {
        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
    };

    const changeThread = async (newThreadId) => {
        setCurrThreadId(newThreadId);
        try {
            const response = await fetch(`http://localhost:3000/api/thread/${newThreadId}`);
            const res = await response.json();
            setPrevChats(res);
            setNewChat(false);
            setReply(null);
        } catch (err) {
            console.error("Error loading thread:", err);
        }
    };

    const deleteThread = async (threadId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/thread/${threadId}`, {
                method: "DELETE"
            });
            await response.json();
            setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

            if (threadId === currThreadId) {
                createNewChat();
            }
        } catch (err) {
            console.error("Error deleting thread:", err);
        }
    };

    return (
        <aside className="sidebar">
            <button className="new-chat-btn" onClick={createNewChat}>
                

                <img src={blacklogo} alt="VanshGPT Logo" className="logo" />
                {/* <img src="/assets/blacklogo.png" alt="VanshGPT Logo" className="logo" /> */}
                <span className="new-chat-label">New VanshGPT Chat</span>
                <i className="fa-solid fa-plus"></i>
            </button>

            <ul className="chat-history">
                {allThreads?.length ? (
                    allThreads.map((thread, idx) => (
                        <li
                            key={idx}
                            onClick={() => changeThread(thread.threadId)}
                            className={`chat-item ${thread.threadId === currThreadId ? "active" : ""}`}
                        >
                            <span className="chat-title">{thread.title}</span>
                            <i
                                className="fa-solid fa-trash delete-icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteThread(thread.threadId);
                                }}
                                title="Delete chat"
                            ></i>
                        </li>
                    ))
                ) : (
                    <li className="no-chats">No chats yet. Start one!</li>
                )}
            </ul>

            <div className="footer">
            <span className="sparkle">✨</span>
            <span className="footer-text"> Made with <strong>logic</strong> & <strong>rage</strong> – </span>
            <span className="brand">VanshGPT</span>
            </div>

        </aside>
    );
}

export default Sidebar;
