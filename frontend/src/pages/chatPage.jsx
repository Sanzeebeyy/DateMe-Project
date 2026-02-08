// import ChatList from "../components/chatComponents/ChatList"
// import ChatWindow from "../components/chatComponents/ChatWindow"
// import MessageInput from "../components/chatComponents/MessageInput"
// import Nav from "../components/mainPageComponents/Nav.jsx";
// import { useState } from "react";

// function Chat() {
//   const [activeChat, setActiveChat] = useState(null)

//   return (
//     <div className="chat-page">
//       <ChatList onSelect={setActiveChat} />
//       {activeChat && <ChatWindow chatId={activeChat} />}
//     </div>
//   )
// }

// export default Chat

import ChatList from "../components/chatComponents/ChatList"
import ChatWindow from "../components/chatComponents/ChatWindow"
import Nav from "../components/mainPageComponents/Nav.jsx";
import { useState } from "react";

function Chat() {
  const [activeChat, setActiveChat] = useState(null)

  return (
    <>
      {/* Nav is completely independent and outside any layout div */}
      <Nav />

      {/* Main Chat Container: 
         - h-[calc(100vh-130px)]: Adjust 130px to match your Nav's height + padding + HR.
         - overflow-hidden: This stops the whole page from scrolling.
      */}
      <div className="flex w-full h-[calc(100vh-130px)] overflow-hidden bg-[#1a1a1a] mt-2">
        
        {/* Sidebar - Internal scrolling only */}
        <aside className="w-84 shrink-0  bg-(--bg-color) flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
             <ChatList onSelect={setActiveChat} activeId={activeChat} />
          </div>
        </aside>

        {/* Chat Window - Internal scrolling only */}
        <main className="flex-1 flex flex-col min-w-0">
          {activeChat ? (
            <ChatWindow chatId={activeChat} />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                <div className="p-6 rounded-full bg-(--bg-color) mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-(--primary-color) opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-(--secondary-color) font-medium">Select a Conversation</h3>
                <p className="text-sm">Start chatting with your matches</p>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export default Chat