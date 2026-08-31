import React, { useMemo, useRef, useState } from "react";
import { Search, Paperclip, Send, Check, CheckCheck, MessagesSquare } from "lucide-react";
import DrDashboardSidebar from "../components/DrDashboardSidebar";
import AdminDrProfileNavbar from "../components/AdminDrProfileNavbar";

const INITIAL_CONVERSATIONS = [
  {
    id: 1,
    name: "Sarah Legend",
    age: 23,
    gender: "female",
    unread: 1,
    lastLabel: "8:00 PM",
    messages: [
      { id: 1, sender: "me", text: "Hello, how are you feeling today?", time: "8:00 PM", date: "May 20,2024" },
      { id: 2, sender: "them", text: "Hello Doctor, i'm feeling a lot better today, thank you", time: "8:00 PM" },
      { id: 3, sender: "me", text: "that's great to hear ,\nare you taking your medications regularly?", time: "8:00 PM" },
      { id: 4, sender: "them", text: "yes , i take them as you advice.", time: "8:00 PM" },
      { id: 5, sender: "me", text: "yes , i take them as you advice.", time: "8:00 PM", date: "May 20,2024" },
      { id: 6, sender: "them", text: "Hello, how are you feeling today?", time: "8:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Sarah Legend",
    age: 23,
    gender: "female",
    unread: 2,
    lastLabel: "8:00 PM",
    messages: [{ id: 1, sender: "them", text: "Thank you , doctor!", time: "8:00 PM", date: "May 19,2024" }],
  },
  {
    id: 3,
    name: "Sarah Legend",
    age: 23,
    gender: "female",
    unread: 0,
    lastLabel: "Mon",
    messages: [{ id: 1, sender: "them", text: "Thank you , doctor!", time: "9:10 AM", date: "Mon" }],
  },
  {
    id: 4,
    name: "Sarah Legend",
    age: 23,
    gender: "female",
    unread: 0,
    lastLabel: "Mon",
    messages: [{ id: 1, sender: "them", text: "Thank you , doctor!", time: "9:40 AM", date: "Mon" }],
  },
  {
    id: 5,
    name: "Sarah Legend",
    age: 23,
    gender: "female",
    unread: 0,
    lastLabel: "Mon",
    messages: [{ id: 1, sender: "them", text: "Thank you , doctor!", time: "10:05 AM", date: "Mon" }],
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "read", label: "Read" },
  { key: "unread", label: "Unread" },
];

function initialsOf(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ConversationAvatar({ name, size = 44 }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-[#0018A6] text-sm font-semibold text-white"
      style={{ width: size, height: size }}
    >
      {initialsOf(name)}
    </span>
  );
}

function ConversationListItem({ conversation, active, onClick }) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition ${
        active ? "bg-[#E8EBFC]" : "hover:bg-slate-50"
      }`}
    >
      <ConversationAvatar name={conversation.name} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-slate-800">{conversation.name}</p>
          <span className="shrink-0 text-xs text-slate-400">{conversation.lastLabel}</span>
        </div>
        <p className="text-xs font-medium text-[#0018A6]">
          {conversation.age} years , {conversation.gender}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-xs text-slate-400">{lastMessage ? lastMessage.text.split("\n")[0] : ""}</p>
          {conversation.unread > 0 && (
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0018A6] text-[11px] font-semibold text-white">
              {conversation.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

function StartConversationIllustration({ onClick }) {
  return (
    <button onClick={onClick} className="flex w-full flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition hover:bg-slate-50">
      <svg width="120" height="90" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="66" height="46" rx="14" fill="#E8EBFC" />
        <circle cx="30" cy="33" r="3" fill="#0018A6" />
        <circle cx="41" cy="33" r="3" fill="#0018A6" />
        <circle cx="52" cy="33" r="3" fill="#0018A6" />
        <path d="M22 56l-6 12 16-8z" fill="#E8EBFC" />
        <rect x="52" y="30" width="44" height="34" rx="12" fill="#0018A6" />
        <circle cx="68" cy="47" r="2.6" fill="#FFFFFF" />
        <circle cx="78" cy="47" r="2.6" fill="#FFFFFF" />
        <circle cx="88" cy="47" r="2.6" fill="#FFFFFF" />
        <path d="M92 62l6 10-15-6z" fill="#0018A6" />
        <path d="M6 66c8-10 16-4 12 4-8 6-16-1-12-4z" fill="#38B475" />
      </svg>
      <p className="text-sm font-semibold text-slate-700">Start a conversation</p>
      <p className="text-xs text-slate-400">You can message your doctor anytime.</p>
    </button>
  );
}

function DateDivider({ label }) {
  return (
    <div className="my-4 flex justify-center">
      <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-medium text-slate-500">{label}</span>
    </div>
  );
}

function MessageBubble({ message }) {
  const isMine = message.sender === "me";
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm ${
          isMine ? "bg-white text-slate-700" : "bg-white text-slate-700"
        }`}
        style={{ border: "1px solid #F0F1F5" }}
      >
        <p>{message.text}</p>
        <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-slate-400">
          {message.time}
          {isMine && <CheckCheck size={13} className="text-[#0018A6]" />}
        </span>
      </div>
    </div>
  );
}

function ChatPanel({ conversation, onSend }) {
  const [draft, setDraft] = useState("");

  const handleSend = () => {
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft("");
  };

  if (!conversation) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-2 text-slate-400">
        <MessagesSquare size={40} />
        <p className="text-sm">Select a conversation to start messaging.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="flex items-center gap-3 border-b border-[#F0F1F5] bg-white px-6 py-4">
        <ConversationAvatar name={conversation.name} size={40} />
        <div>
          <p className="text-sm font-semibold text-slate-800">{conversation.name}</p>
          <p className="text-xs font-medium text-[#0018A6]">
            {conversation.age} years , {conversation.gender}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        {conversation.messages.map((message, index) => {
          const showDivider = message.date && (index === 0 || conversation.messages[index - 1].date !== message.date);
          return (
            <React.Fragment key={message.id}>
              {showDivider && <DateDivider label={message.date} />}
              <div className="mb-4">
                <MessageBubble message={message} />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex items-center gap-3 border-t border-[#F0F1F5] bg-white px-6 py-4">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-[#F0F1F5] bg-white px-4 py-3">
          <Paperclip size={16} className="text-slate-400" />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a messsage.."
            className="flex-1 border-none text-sm text-slate-600 outline-none"
          />
        </div>
        <button
          onClick={handleSend}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0018A6] text-white transition hover:opacity-90"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

function MessagesWorkspaceContent() {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeId, setActiveId] = useState(INITIAL_CONVERSATIONS[0].id);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const nextConversationId = useRef(INITIAL_CONVERSATIONS.length + 1);

  const filteredConversations = useMemo(() => {
    let list = conversations;
    if (filter === "read") list = list.filter((c) => c.unread === 0);
    if (filter === "unread") list = list.filter((c) => c.unread > 0);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [conversations, filter, search]);

  const activeConversation = conversations.find((c) => c.id === activeId) || null;

  const selectConversation = (id) => {
    setActiveId(id);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const handleSend = (text) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastLabel: "Now",
              messages: [
                ...c.messages,
                { id: c.messages.length + 1, sender: "me", text, time: "Now" },
              ],
            }
          : c
      )
    );
  };

  const handleStartConversation = () => {
    const name = window.prompt("Enter the patient's name to start a new conversation");
    if (!name || !name.trim()) return;
    const newConversation = {
      id: nextConversationId.current++,
      name: name.trim(),
      age: "-",
      gender: "-",
      unread: 0,
      lastLabel: "Now",
      messages: [],
    };
    setConversations((prev) => [newConversation, ...prev]);
    setActiveId(newConversation.id);
  };

  return (
    <div className="flex h-full w-full">
      <div
        className="flex h-full w-[380px] shrink-0 flex-col gap-4 overflow-hidden border border-[#E5E7EB] p-4 box-border"
      >
        <label className="flex h-12 items-center gap-3 rounded-full border border-[#F0F1F5] px-5">
          <Search size={16} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages."
            className="flex-1 border-none text-sm text-slate-600 outline-none"
          />
        </label>

        <div className="flex items-center gap-4">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-[#0018A6] text-white"
                    : "border border-[#F0F1F5] bg-white text-slate-500 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {filteredConversations.map((conversation) => (
              <ConversationListItem
                key={conversation.id}
                conversation={conversation}
                active={conversation.id === activeId}
                onClick={() => selectConversation(conversation.id)}
              />
            ))}
            {filteredConversations.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-slate-400">No conversations found.</p>
            )}
          </div>

          <StartConversationIllustration onClick={handleStartConversation} />
        </div>
      </div>

      <div className="flex-1 bg-[#E5F1FF59]">
        <ChatPanel conversation={activeConversation} onSend={handleSend} />
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] overflow-hidden">
      <DrDashboardSidebar />

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <AdminDrProfileNavbar />

        <main className="flex-1 min-w-0 overflow-hidden bg-[#F7F8FC]">
          <MessagesWorkspaceContent />
        </main>
      </div>
    </div>
  );
}

export default Messages;