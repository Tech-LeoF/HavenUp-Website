"use client";
import { useState } from "react";

type Message = {
from: "buyer" | "seller";
text: string;
time: string;
};

type Seller = "Leo" | "Debora" | "Daniela";

export default function Page() {
const [activeSeller, setActiveSeller] = useState<Seller>("Leo");

const [messages, setMessages] = useState<Record<Seller, Message[]>>({
    Leo: [
    {
        from: "buyer",
        text: "Good afternoon, I’d like to ask about a house located in La Libertad. Is it still available?",
        time: "2:15 PM",
    },
    {
        from: "seller",
        text: "Hello! Yes, the house is still available. Would you like to schedule a visit?",
        time: "2:17 PM",
    },
    {
        from: "buyer",
        text: "Yes, that would be great. I’m available this Saturday morning.",
        time: "2:19 PM",
    },
    {
        from: "seller",
        text: "Perfect! I’ll send you the location and details shortly.",
        time: "2:21 PM",
    },
    ],
    Debora: [
    {
        from: "buyer",
        text: "Hello Debora, I saw your listing in San Salvador. Is it still available?",
        time: "3:02 PM",
    },
    {
        from: "seller",
        text: "Hi! Yes, it is. Would you like to schedule a visit?",
        time: "3:04 PM",
    },
    ],
    Daniela: [
    {
        from: "buyer",
        text: "Hi Daniela, I’m interested in the home in Santa Ana. Can you share more details?",
        time: "4:10 PM",
    },
    {
        from: "seller",
        text: "Of course! It’s a 3-bedroom home with a garden. I’ll send you the full specs.",
        time: "4:12 PM",
    },
    ],
});

const [input, setInput] = useState("");

const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
    from: "buyer",
    text: input.trim(),
    time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    }),
};

    setMessages((prev) => ({
    ...prev,
    [activeSeller]: [...prev[activeSeller], newMessage],
    }));

    setInput("");
};

    return (
    <div className="flex min-h-screen bg-[#F5F5DC] font-poppins">
      {/* 🧑‍💼 Sidebar */}
        <aside className="w-1/3 bg-white p-6 border-r border-gray-300">
        <h2 className="text-2xl font-semibold mb-6 text-[#073B3A]">Sellers</h2>

        {(["Leo", "Debora", "Daniela"] as Seller[]).map((seller) => (
        <div
            key={seller}
            onClick={() => setActiveSeller(seller)}
            className={`mb-4 p-4 rounded-lg cursor-pointer ${
                activeSeller === seller ? "bg-[#E6F0EE]" : "hover:bg-[#E6F0EE]"
            }`}
        >
            <h3 className="text-xl font-medium text-[#073B3A]">{seller}</h3>
            <p className="text-sm text-gray-500">
                {seller === "Leo"
                ? "Property in La Libertad"
                : seller === "Debora"
                ? "House in San Salvador"
                : "Home in Santa Ana"}
            </p>
        </div>
        ))}
    </aside>

    {/* 💌 Chat Area */}
    <main className="w-2/3 p-6 flex flex-col space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-[#073B3A]">
            Conversation with {activeSeller}
        </h2>

        <div className="space-y-4 flex-1 overflow-y-auto">
            {messages[activeSeller].map((msg: Message, idx: number) => (
            <div
                key={idx}
                className={`flex ${
                msg.from === "buyer" ? "justify-start" : "justify-end"
            }`}
            >
            <div
                className={`p-4 rounded-lg max-w-md ${
                    msg.from === "buyer"
                    ? "bg-[#629584] text-white"
                    : "bg-[#073B3A] text-white"
                }`}
            >
                <p>{msg.text}</p>
                <span
                className={`text-xs text-white/80 block mt-1 ${
                    msg.from === "seller" ? "text-right" : ""
                }`}
                >
                {msg.from === "buyer" ? "Buyer" : activeSeller} • {msg.time}
                </span>
            </div>
            </div>
        ))}
    </div>

        {/* 📩 Input */}
        <form
            onSubmit={handleSend}
            className="mt-auto pt-4 border-t border-gray-300 flex items-center space-x-4"
        >   
        <input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-6 text-xl rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#629584] placeholder-gray-400"
        />
        <button
            type="submit"
            className="bg-[#073B3A] text-white px-7 py-4 rounded-2xl hover:bg-[#09524F] transition text-xl"
        >
            Send
        </button>
        </form>
    </main>
    </div>
);
}
