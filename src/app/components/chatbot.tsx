'use client';
import { useState } from 'react';

export default function Chat() {
const [input, setInput] = useState('');
const [response, setResponse] = useState('');

const sendMessage = async () => {
    if (!input.trim()) return;
    setResponse(''); // clear previous response

    const res = await fetch('/api/chatbot', { method: 'POST', body: JSON.stringify({ prompt: input }) });
    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    setResponse((prev) => prev + chunk);
    }
};

return (
    <div className="p-4 space-y-4 max-w-lg mx-auto h-200">
    <textarea
        className="w-full p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
    />
    <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" onClick={sendMessage}>
        Send
    </button>
    {response && (
        <div className="p-2 bg-gray-100 text-black rounded">
        <strong>AI:</strong> {response}
        </div>
    )}
    </div>
);
}
