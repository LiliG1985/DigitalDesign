const GRADIENTS = {
  pink: "from-pink to-yellow",
  blue: "from-blue to-mint",
  yellow: "from-yellow to-pink",
  mint: "from-mint to-blue",
};

export default function WorkTile({ label, tag, gradient = "pink", tall = false }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <div className="flex gap-1.5 px-3 py-2">
        <i className="h-1.5 w-1.5 rounded-full bg-paper/30" />
        <i className="h-1.5 w-1.5 rounded-full bg-paper/30" />
        <i className="h-1.5 w-1.5 rounded-full bg-paper/30" />
      </div>
      <div
        className={`flex items-end bg-gradient-to-br p-4 ${GRADIENTS[gradient]} ${
          tall ? "h-40" : "h-24"
        }`}
      >
        <div>
          {tag && (
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60">
              {tag}
            </span>
          )}
          <span className="font-display text-sm font-bold text-ink">{label}</span>
        </div>
      </div>
    </div>
  );
}
