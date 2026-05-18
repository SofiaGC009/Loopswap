const ExchangeModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 md:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Marketplace
            </p>

            <h2 className="text-4xl font-bold text-[#2D2D2D]">
              Solicitar intercambio
            </h2>
          </div>

          <button onClick={() => setIsOpen(false)} className="text-3xl">
            ✕
          </button>
        </div>

        {/* Info */}
        <div className="mb-8 rounded-3xl bg-[#F7F7FB] p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Valor
          </p>

          <h3 className="text-5xl font-bold text-[#2D2D2D]">25 Loops</h3>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Mensaje
          </label>

          <textarea
            rows="5"
            placeholder="Escribe un mensaje opcional..."
            className="w-full resize-none rounded-[2rem] border border-gray-200 bg-[#F7F7FB] px-6 py-5 text-lg outline-none transition focus:border-[#6D4AFF]"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 rounded-2xl border border-gray-300 bg-white px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button className="flex-1 rounded-2xl bg-[#6D4AFF] px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]">
            Confirmar intercambio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeModal;
