import { useState } from 'react'

function MessageInput({ socket }) {
    const [text, setText] = useState("")

    const sendMessage = () => {
        if (!text.trim()) return;

        socket.send(JSON.stringify({ message: text }))
        setText("")
    }

    return (
        <div className="flex items-center gap-2 bg-[#1a1a1a] p-2 rounded-xl border border-(--secondary-color)/5 shadow-inner">
            <input
                className="flex-1 bg-transparent  focus:ring-0 text-sm text-(--secondary-color) placeholder-gray-500 px-2 py-1 outline-none"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder='Say Something...'
            />
            
            <button 
                onClick={sendMessage}
                disabled={!text.trim()}
                className={`
                    px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200
                    ${text.trim() 
                        ? 'bg-(--primary-color) text-(--secondary-color) hover:bg-(--primary-color) active:scale-95 shadow-md' 
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'}
                `}
            >
                {/* SVG for a "Send" Arrow Icon */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span>Send</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rotate-90">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default MessageInput