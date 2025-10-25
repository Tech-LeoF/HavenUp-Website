"use client";
import { useState, useRef, useEffect } from "react";

type MessageType = "text" | "image" | "video" | "audio";

type Message = {
    from: "buyer" | "seller";
    type: MessageType;
    content: string;
    time: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [emojiVisible, setEmojiVisible] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

useEffect(() => {
    scrollToBottom();
}, [messages]);

const addMessage = (
    content: string,
    from: "buyer" | "seller",
    type: MessageType = "text"
) => {
    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    setMessages((prev) => [...prev, { content, from, type, time }]);
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
        recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
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

const emojis = ["😀", "😂", "😍", "😎", "😢", "😡", "👍", "🙏"];


return (
  <div className="bg-[#F5F5DC] min-h-screen flex flex-col sm:flex-row font-poppins text-[clamp(0.9rem,2vw,1.1rem)]">
    {/* Sidebar */}
    <aside className="hidden sm:flex w-1/4 bg-white p-5 border-r border-gray-300 flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-[#073B3A] text-white flex items-center justify-center text-[1.8rem] font-bold mb-3">
        {/* Avatar */}
      </div>
      <h2 className="text-[1.2rem] font-bold text-[#073B3A]">The Seller</h2>
      <p className="text-gray-500">Seller</p>
      <p className="mt-1 text-gray-600">🏠 House located in La Libertad</p>
    </aside>

    {/* Chat Area */}
    <main className="flex-1 p-5 flex flex-col space-y-4">
    <h2 className="text-[1.2rem] font-bold text-[#073B3A]">
        Conversation with The Seller
    </h2>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto space-y-4 bg-[#F5F5DC]/70 rounded-xl p-4 shadow-sm border border-[#629584]/20">
        {messages.map((msg, idx) => (
        <div key={idx} className={`flex ${msg.from === "buyer" ? "justify-start" : "justify-end"}`}>
            <div
            className={`p-4 rounded-xl max-w-md text-white ${
                msg.from === "buyer" ? "bg-[#629584]" : "bg-[#073B3A]"
            }`}
            >
            {msg.type === "text" && (
                <p className="leading-relaxed">{msg.content}</p>
            )}
            {msg.type === "image" && (
                <img src={msg.content} className="rounded-lg max-w-full mt-2" />
            )}
            {msg.type === "video" && (
                <video src={msg.content} controls className="rounded-lg max-w-full mt-2" />
            )}
            {msg.type === "audio" && (
                <audio controls src={msg.content} className="w-full mt-2" />
            )}
            <span
                className={`text-white/80 block mt-1 ${
                    msg.from === "seller" ? "text-right" : ""
                }`}
            >
                {msg.from === "buyer" ? "Buyer" : "The Seller"} • {msg.time}
            </span>
            </div>
        </div>
        ))}
        <div ref={messagesEndRef}></div>
    </div>

    {/* Input */}
    <div className="relative">
        <form
            onSubmit={handleSend}
            className="pt-4 border-t border-gray-300 flex items-center space-x-2"
        >
        {/* Emoji */}
        <button type="button" onClick={() => setEmojiVisible(!emojiVisible)}>
            <span className="text-[1.3rem]">😄</span>
        </button>

        {/* Photo */}
        <label className="cursor-pointer">
            <img
                src="/Imgs/camara.png"
                alt="Camara"
                className="w-6 h-6 sm:w-7 sm:h-7 brightness-90 contrast-90"
            />
            <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
        </label>

        {/* Video */}
        <label className="cursor-pointer">
            <img
                src="/Imgs/video.png"
                alt="Video"
                className="w-6 h-6 sm:w-7 sm:h-7 brightness-90 contrast-90"
            />
            <input type="file" accept="video/*" onChange={handleVideo} className="hidden" />
        </label>

        {/* Audio */}
        <button type="button" onClick={handleAudio}>
            <img
                src={mediaRecorder ? "/Imgs/grabar.png" : "/Imgs/micrófono.png"}
                alt="Audio"
                className="w-6 h-6 sm:w-7 sm:h-7 brightness-90 contrast-90"
            />
        </button>

        {/* Input de texto */}
        <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow p-2 text-black rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#629584] placeholder-gray-400 bg-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        {/* Botón enviar */}
        <button
            type="submit"
            className="bg-[#073B3A] text-white px-5 py-2 rounded-xl hover:bg-[#09524F] transition"
        >
            Send
        </button>
        </form>

        {/* Emoji Picker */}
        {emojiVisible && (
        <div className="absolute bottom-14 left-2 w-44 bg-white border border-gray-300 rounded-lg p-2 flex flex-wrap shadow-md">
            {emojis.map((e, i) => (
            <span
                key={i}
                className="cursor-pointer text-[1.2rem] m-1 hover:scale-110 transition"
                onClick={() => {
                    setInput((prev) => prev + e);
                    setEmojiVisible(false);
                }}
            >
                {e}
            </span>
            ))}
        </div>
        )}
    </div>
    </main>
</div>
);
}