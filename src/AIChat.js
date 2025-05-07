import React, { useState } from "react";

const AIChat = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("https://your-project-name.vercel.app/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div>
      <h1>Ask AI</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Ask</button>
      <p><strong>AI:</strong> {reply}</p>
    </div>
  );
};

export default AIChat;
