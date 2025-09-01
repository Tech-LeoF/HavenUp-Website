"use client";
import { useState, useRef } from "react";

type MessageType = "text" | "image" | "video" | "audio";

type Message = {
    from: "buyer" | "seller";
    type: MessageType;
    content: string;
    time: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]); // <-- vacío al inicio
    const [input, setInput] = useState("");
    const [emojiVisible, setEmojiVisible] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

const addMessage = (content: string, from: "buyer" | "seller", type: MessageType = "text") => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages(prev => [...prev, { content, from, type, time }]);
    setTimeout(scrollToBottom, 100);
};

const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addMessage(input, "buyer", "text");
    setInput("");
};

const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const url = URL.createObjectURL(file);
        addMessage(url, "buyer", "image");
    }
};

const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const url = URL.createObjectURL(file);
        addMessage(url, "buyer", "video");
    }
};

const handleAudio = async () => {
    if (!mediaRecorder) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
        recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        addMessage(url, "buyer", "audio");
        audioChunksRef.current = [];
        setMediaRecorder(null);
    };
        recorder.start();
        setMediaRecorder(recorder);
    } else {
        mediaRecorder.stop();
    }
};

const emojis = ["😀","😂","😍","😎","😢","😡","👍","🙏"];

return (
    <div className="bg-[#F5F5DC] min-h-screen flex font-poppins">
      {/* Sidebar */}
    <aside className="w-1/4 bg-white p-6 border-r border-gray-300 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#073B3A] text-white flex items-center justify-center text-3xl font-bold mb-4">L</div>
        <h2 className="text-2xl font-bold text-[#073B3A]">Leonardo</h2>
        <p className="text-gray-500">Seller</p>
        <p className="mt-2 text-sm text-gray-600">🏠 House located in La Libertad</p>
    </aside>

      {/* Chat Area */}
        <main className="flex-1 p-6 flex flex-col space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-[#073B3A]">Conversation with Leonardo</h2>

        {/* Messages */}
        <div className="space-y-4 flex-1 overflow-y-auto">
        {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === "buyer" ? "justify-start" : "justify-end"}`}>
            <div className={`p-4 rounded-lg max-w-md text-white ${msg.from==="buyer" ? "bg-[#629584]" : "bg-[#073B3A]"}`}>
                {msg.type === "text" && <p>{msg.content}</p>}
                {msg.type === "image" && <img src={msg.content} className="rounded-lg max-w-full" />}
                {msg.type === "video" && <video src={msg.content} controls className="rounded-lg max-w-full" />}
                {msg.type === "audio" && <audio controls src={msg.content} className="w-full mt-2" />}
                <span className={`text-xs text-white/80 block mt-1 ${msg.from==="seller" ? "text-right" : ""}`}>
                {msg.from === "buyer" ? "Buyer" : "Leonardo"} • {msg.time}
                </span>
            </div>
            </div>
        ))}
        <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="relative">
        <form onSubmit={handleSend} className="mt-auto pt-4 border-t border-gray-300 flex items-center space-x-2">

            {/* Emoji */}
            <button type="button" onClick={()=>setEmojiVisible(!emojiVisible)} className="text-2xl">😄</button>

            {/* Photo */}
            <label className="text-2xl cursor-pointer">📷<input type="file" accept="image/*" onChange={handlePhoto} className="hidden" /></label>

            {/* Video */}
            <label className="text-2xl cursor-pointer">🎥<input type="file" accept="video/*" onChange={handleVideo} className="hidden" /></label>

            {/* Audio */}
            <button type="button" onClick={handleAudio} className="text-2xl">{mediaRecorder ? "⏹️" : "🎙️"}</button>

            <input type="text" placeholder="Type your message here..." className="flex-grow p-3 text-lg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#629584] placeholder-gray-400" value={input} onChange={e=>setInput(e.target.value)} />

            <button type="submit" className="bg-[#073B3A] text-white px-6 py-3 rounded-2xl hover:bg-[#09524F] transition">Send</button>
        </form>

          {/* Emoji Picker */}
            {emojiVisible && (
            <div className="absolute bottom-16 left-2 w-48 bg-white border border-gray-300 rounded-lg p-2 flex flex-wrap">
                {emojis.map((e,i) => (
                <span key={i} className="cursor-pointer text-2xl m-1" onClick={()=>{setInput(prev=>prev+e); setEmojiVisible(false);}}>{e}</span>
            ))}
            </div>
        )}
        </div>
    </main>
    </div>
);
}
