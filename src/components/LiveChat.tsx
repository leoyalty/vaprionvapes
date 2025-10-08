
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Instagram, Send } from "lucide-react";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialMediaOptions = [
    {
      name: "Email",
      icon: MessageCircle,
      color: "bg-gray-600",
  handle: "support@bomdisposables.shop",
  action: () => window.location.href = "mailto:support@bomdisposables.shop"
    },
    {
      name: "Telegram",
      icon: Send,
      color: "bg-blue-900",
      handle: "@BOMDISPO_420",
      action: () => window.open("https://t.me/BOMDISPO_420", "_blank")
    },
    {
      name: "Potato Chat",
      icon: MessageCircle,
      color: "bg-green-900",
      handle: "@BOMDiSPO_420",
      action: () => window.open("https://ptwdym158.org/BOMDiSPO_420", "_blank")
    }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gray-600 hover:bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-2xl border w-80 animate-scale-in">
          <div className="bg-gray-900 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Contact BOMDISPO</h3>
            <p className="text-sm text-gray-400">Choose your preferred platform</p>
          </div>
          
          <div className="p-4 space-y-3">
            {socialMediaOptions.map((option, index) => (
              <button
                key={option.name}
                onClick={option.action}
                className={`w-full ${option.color} hover:opacity-90 text-white p-3 rounded-lg flex items-center gap-3 transition-all duration-200 transform hover:scale-105`}
              >
                <option.icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{option.name}</div>
                  <div className="text-xs opacity-90">{option.handle}</div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-4 border-t text-center">
            <p className="text-xs text-gray-500">
              We typically respond within 30 minutes during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
