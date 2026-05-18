const conversations = [
  {
    id: 1,
    name: "Ana García",
    message: "¿Todavía tienes la calculadora?",
    online: true,
  },

  {
    id: 2,
    name: "Luis Hernández",
    message: "Te mandé los apuntes 👀",
    online: false,
  },

  {
    id: 3,
    name: "Mariana López",
    message: "¿Aceptas intercambio?",
    online: true,
  },
];

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hola! ¿Todavía tienes disponible la TI-84?",
  },

  {
    id: 2,
    sender: "me",
    text: "Síii, todavía está disponible ✨",
  },

  {
    id: 3,
    sender: "other",
    text: "¿Cuántos loops pides?",
  },

  {
    id: 4,
    sender: "me",
    text: "25 loops o intercambio equivalente 👀",
  },
];

const Chat = () => {
  return (
    <section className="h-[80vh] overflow-hidden rounded-[2rem] bg-white shadow-xl">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="hidden w-96 border-r border-gray-200 lg:flex lg:flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Mensajes
            </p>

            <h1 className="text-4xl font-bold text-[#2D2D2D]">Chats</h1>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto p-4">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                className="mb-3 flex w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:bg-[#F7F7FB]"
              >
                {/* Avatar */}
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D4AFF] font-bold text-white">
                    {conversation.name[0]}
                  </div>

                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#6BCB77]" />
                  )}
                </div>

                {/* Info */}
                <div>
                  <h2 className="font-bold text-[#2D2D2D]">
                    {conversation.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {conversation.message}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Conversation */}
        <main className="flex flex-1 flex-col">
          {/* Top */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D4AFF] font-bold text-white">
                  A
                </div>

                <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#6BCB77]" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2D2D2D]">
                  Ana García
                </h2>

                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>

            <button className="rounded-2xl bg-[#F3F0FF] px-5 py-3 font-medium text-[#6D4AFF] transition hover:scale-105">
              Ver publicación
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto bg-[#F7F7FB] p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md rounded-3xl px-6 py-4 text-lg shadow-sm ${
                    message.sender === "me"
                      ? "bg-[#6D4AFF] text-white"
                      : "bg-white text-[#2D2D2D]"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white p-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="flex-1 rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-4 outline-none transition focus:border-[#6D4AFF]"
              />

              <button className="rounded-2xl bg-[#6D4AFF] px-8 py-4 font-semibold text-white transition hover:scale-105">
                Enviar
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Chat;
