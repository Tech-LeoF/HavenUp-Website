'use client';
import { useState } from 'react';

export default function Chat() {
const [input, setInput] = useState('');
const [response, setResponse] = useState('');

const sendMessage = async () => {
    if (!input.trim()) return;
    setResponse('Thinking...');

    const res = await fetch('/api/chatbot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input }),
    });

    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    setResponse('');

    while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    const chunk = decoder.decode(value);
    setResponse((prev) => prev + chunk);
    }
};

return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="w-full h-200 bg-white text-black">
      {/* Header */}
    <div className="flex justify-evenly">
        <div className="flex flex-col">
        <p className="text-4xl">HavenUp! Advisor</p>
        <p className="text-sm">Get personalized real estate advice from our AI assistant.</p>
        </div>
        <div>
        <div className="w-30 h-20 bg-[#073B3A] flex justify-center items-center rounded-lg relative">
            <div className="absolute -bottom-5 border-[#073B3A] border-l-20 border-r-20 border-t-40 border-l-transparent border-r-transparent"></div>
            <p className="text-center text-white">Do you need help?</p>
        </div>
        <div>
            <img className="w-90 h-50" src="/Imgs/Havensito.png" alt="Mascot" />
        </div>
        </div>
    </div>

      {/* Input Row */}
    <div className="flex flex-row justify-center space-x-4 mt-6">
        <img className="h-12 cursor-pointer" src="/Imgs/user .png" alt="User" />
        <textarea
        className="rounded-lg border-2 border-black text-black h-12 w-150 placeholder:pl-2 py-3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        />
        <button
        className="px-4 py-2 bg-[#FFD166] text-black rounded-lg cursor-pointer h-12"
        onClick={sendMessage}
        >
        Send
        </button>
    </div>

      {/* Response Box */}
    <div className="flex justify-center mt-6">
        <div className="w-150 h-100 bg-gray-100 border-2 flex justify-start items-start rounded-lg p-4 overflow-y-auto">
        {response && (
            <div className="text-black max-w-lg whitespace-pre-wrap">
            <strong>AI:</strong> {response}
            </div>
        )}
        </div>
    </div>
    </div>
);
}
