'use client';
import { useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";
import { BsArrowRight, BsTrash, BsPlus } from 'react-icons/bs';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

type Conversation = {
  id: number;
  title: string;
  messages: Message[];
};

export default function Chat() {
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConv, setActiveConv] = useState<Conversation | null>(null);
  const { user } = useUser();

  // Load saved convos
  useEffect(() => {
    const saved = localStorage.getItem('conversations');
    if (saved) setConversations(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  const getInitial = (name?: string | null) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const newConversation = () => {
    const conv: Conversation = {
      id: Date.now(),
      title: "New Conversation",
      messages: [],
    };
    setConversations(prev => [conv, ...prev]);
    setActiveConv(conv);
  };

  const cleanAIResponse = (text: string) => {
    return text
      .replace(/\\/g, '')  
      .replace(/\*/g, '')     
      .replace(/#+\s/g, '')  
      .replace(/\n{3,}/g, '\n\n') 
      .trimStart();
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeConv) return;

    let convTitle = activeConv.title === "New Conversation" ? input.slice(0, 25) : activeConv.title;

    const userMsg: Message = { role: 'user', content: input };
    let updatedConv: Conversation = {
      ...activeConv,
      title: convTitle,
      messages: [...activeConv.messages, userMsg, { role: 'ai', content: "" }]
    };

    setConversations(prev =>
      prev.map(c => (c.id === activeConv.id ? updatedConv : c))
    );
    setActiveConv(updatedConv);
    setInput('');

    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunk = decoder.decode(value);

      updatedConv = {
        ...updatedConv,
        messages: updatedConv.messages.map((m, i) =>
          i === updatedConv.messages.length - 1
            ? { ...m, content: cleanAIResponse(m.content + chunk) }
            : m
        )
      };

      setConversations(prev =>
        prev.map(c => (c.id === activeConv.id ? updatedConv : c))
      );
      setActiveConv(updatedConv);
    }
  };

  const deleteConversation = (id: number) => {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (activeConv?.id === id) setActiveConv(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white font-[Poppins] flex">
      
      <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Conversations</h2>
          <button
            onClick={newConversation}
            className="p-2 bg-[#FFD166] text-black rounded-lg hover:bg-[#e6b755] transition"
          >
            <BsPlus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto">
          {conversations.length > 0 ? (
            conversations.map(conv => (
              <div
                key={conv.id}
                className={`flex items-center justify-between p-3 rounded-lg transition ${
                  activeConv?.id === conv.id
                    ? 'bg-[#FFD166] text-black font-semibold'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <span
                  onClick={() => setActiveConv(conv)}
                  className="flex-1 cursor-pointer truncate"
                >
                  {conv.title || "Conversation"}
                </span>
                <button
                  onClick={() => deleteConversation(conv.id)}
                  className="ml-2 text-red-400 hover:text-red-600 transition"
                >
                  <BsTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No conversations yet.</p>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-6">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Your AI Real Estate Assistant</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I'm here to help you with all your real estate questions. Just ask!
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded-2xl p-6 h-96 overflow-y-auto shadow-lg space-y-4">
            {activeConv ? (
              activeConv.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] whitespace-pre-wrap p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-[#FFD166] text-black text-right'
                        : 'bg-gray-700 text-white text-left'
                    }`}
                  >
                    {msg.content || (msg.role === 'ai' ? "Thinking..." : "")}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-20">
                Start a new conversation or select one from the sidebar...
              </p>
            )}
          </div>
        </div>

        {activeConv && (
          <div className="flex justify-center items-start space-x-4">
            {user ? (
              user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-600 text-white font-semibold rounded-full flex items-center justify-center hover:shadow-lg transition">
                  {getInitial(user.fullName || user.username || "")}
                </div>
              )
            ) : (
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:shadow-lg transition">
                ?
              </div>
            )}

            <textarea
              className="flex-1 h-14 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-2xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFD166] transition"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me about property values, neighborhood amenities..."
            />

            <button
              className="w-14 h-14 bg-[#FFD166] hover:bg-[#FFD166CC] rounded-2xl flex items-center justify-center transition shadow-md"
              onClick={sendMessage}
            >
              <BsArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
