import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Everyday AI Pathways. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [showUserForm, setShowUserForm] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = [
    "Thank you for your message! I'll connect you with our team shortly.",
    "That's a great question! Our AI specialists will get back to you soon.",
    "I understand your interest. Let me have our team reach out to you.",
    "Thanks for reaching out! We'll provide you with detailed information shortly.",
  ];

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false);
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `Nice to meet you, ${userInfo.name}! How can I assist you with AI solutions today?`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, welcomeMessage]);
    }
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");

      // Simulate bot response after a short delay
      setTimeout(() => {
        const randomResponse =
          predefinedResponses[
            Math.floor(Math.random() * predefinedResponses.length)
          ];
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);

        // After 3 messages, offer to send conversation via email/WhatsApp
        if (messages.filter((m) => m.sender === "user").length >= 2) {
          setTimeout(() => {
            const actionMessage: Message = {
              id: (Date.now() + 2).toString(),
              text: "Would you like me to send this conversation to our team? Click below to send via WhatsApp or Email.",
              sender: "bot",
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, actionMessage]);
          }, 1000);
        }
      }, 1000);
    }
  };

  const sendConversationViaWhatsApp = () => {
    const conversation = messages
      .map(
        (m) =>
          `${m.sender === "user" ? userInfo.name || "User" : "AI Assistant"}: ${
            m.text
          }`
      )
      .join("\n");

    const fullMessage = `Chat Conversation from ${userInfo.name} (${userInfo.email}):\n\n${conversation}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/917314851888?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendConversationViaEmail = () => {
    const conversation = messages
      .map(
        (m) =>
          `${m.sender === "user" ? userInfo.name || "User" : "AI Assistant"}: ${
            m.text
          }`
      )
      .join("\n");

    const subject = encodeURIComponent(`Chat Inquiry from ${userInfo.name}`);
    const body = encodeURIComponent(`Name: ${userInfo.name}
Email: ${userInfo.email}

Conversation:
${conversation}`);
    const mailtoUrl = `mailto:info@everydayaipathways.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open live chat"
        >
          <MessageCircle size={20} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col border">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-600 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Info Form */}
          {showUserForm && (
            <div className="p-4 border-b">
              <form onSubmit={handleUserInfoSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="w-full p-2 border rounded text-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    className="w-full p-2 border rounded text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm"
                >
                  Start Chat
                </button>
              </form>
            </div>
          )}

          {/* Messages */}
          {!showUserForm && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "bot" && (
                          <Bot size={16} className="mt-1 flex-shrink-0" />
                        )}
                        {message.sender === "user" && (
                          <User size={16} className="mt-1 flex-shrink-0" />
                        )}
                        <div className="text-sm">{message.text}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Action Buttons */}
                {messages.filter((m) => m.sender === "user").length >= 2 && (
                  <div className="flex flex-col space-y-2 mt-4">
                    <button
                      onClick={sendConversationViaWhatsApp}
                      className="bg-green-500 text-white p-2 rounded text-sm hover:bg-green-600"
                    >
                      Send via WhatsApp
                    </button>
                    <button
                      onClick={sendConversationViaEmail}
                      className="bg-gray-500 text-white p-2 rounded text-sm hover:bg-gray-600"
                    >
                      Send via Email
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded text-sm"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveChat;
