const GLOWS = {
  pink: "from-pink via-yellow to-blue",
  blue: "from-blue via-violet to-pink",
  yellow: "from-yellow via-pink to-violet",
  violet: "from-violet via-blue to-yellow",
};

export default function WorkTile({ label, tag, gradient = "pink", tall = false, image = null }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card">
      <div className="flex gap-1.5 px-3 py-2.5">
        <i className="h-1.5 w-1.5 rounded-full bg-paper/15" />
        <i className="h-1.5 w-1.5 rounded-full bg-paper/15" />
        <i className="h-1.5 w-1.5 rounded-full bg-paper/15" />
      </div>

      {image ? (
        <div>
          <div className={`relative overflow-hidden bg-ink ${tall ? "h-56" : "h-40"}`}>
            <img
              src={image}
              alt={`${label} website preview`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="border-t border-line px-4 py-3">
            {tag && (
              <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                {tag}
              </span>
            )}
            <span className="font-body text-sm font-bold text-paper">{label}</span>
          </div>
        </div>
      ) : (
        <div className={`relative flex items-end overflow-hidden bg-ink p-4 ${tall ? "h-40" : "h-24"}`}>
          <div
            className={`glow-blob absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-50 ${GLOWS[gradient]}`}
          />
          <div className="relative">
            {tag && (
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                {tag}
              </span>
            )}
            <span className="font-body text-sm font-bold text-paper">{label}</span>
          </div>
        </div>
      )}
    </div>
  );
}
