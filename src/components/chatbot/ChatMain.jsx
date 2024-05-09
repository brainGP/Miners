import React, { useState, useRef, useEffect } from "react";

const predefinedData = {
  hello: "Hello! How can I help you today?",
  "what is your name": "I am MinerBot, your virtual assistant.",
  "how are you": "I am just a bunch of code, but I am functioning as expected!",
  default: "Sorry, I don't understand that question.",
};

const ChatMain = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { who: "MinerBot", messages: "How can I help you?" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addMessage({ who: "user", messages: inputValue });
      setInputValue("");
      setLoading(true);

      try {
        const response = await fetch(`http://127.0.0.1:8000/chatbot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ q: inputValue }),
        });
        const data = await response.json();
        addMessage({ who: "MinerBot", messages: data.response });
      } catch (error) {
        console.error("Error fetching data:", error);
        addMessage({ who: "MinerBot", messages: predefinedData["default"] });
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="p-6 h-full flex flex-col w-full bg-[#121212] rounded-lg shadow-lg border border-[#30304D]">
      <div
        ref={chatContainerRef}
        className="flex flex-col-reverse space-y-2 overflow-y-auto h-full p-4 bg-[#1E1E1E] rounded-lg"
      >
        {messages
          .slice(0)
          .reverse()
          .map((message, index) => (
            <div key={index} className="flex items-start mb-4">
              <div className="flex gap-2 items-center">
                <span
                  className={`rounded-full px-3 py-2 text-white ${
                    message.who === "user" ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  <h1 className="font-semibold capitalize">{message.who}</h1>
                </span>
                <p className="bg-[#2E2E2E] text-white rounded-lg px-4 py-2 break-words shadow-md">
                  {message.messages}
                </p>
              </div>
            </div>
          ))}
        {loading && (
          <div className="flex items-start mb-4">
            <div className="flex gap-2 items-center">
              <span className="rounded-full px-3 py-2 text-white bg-green-600">
                <h1 className="font-semibold capitalize">MinerBot</h1>
              </span>
              <div className="bg-[#2E2E2E] text-white rounded-lg px-4 py-2 break-words shadow-md">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-ping delay-150"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-ping delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form
        className="mt-auto flex gap-4 items-center border-t border-[#30304D] pt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-full border border-[#30304D] bg-[#2E2E2E] text-white placeholder-gray-400 focus:outline-none"
          placeholder="Message MinerBot..."
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatMain;
