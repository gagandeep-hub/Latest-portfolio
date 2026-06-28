"use client";



interface InfiniteMarqueeProps {
  items: { name: string; icon: string }[];
  reverse?: boolean;
  speed?: number;
}

export function InfiniteMarquee({ items, reverse = false, speed = 30 }: InfiniteMarqueeProps) {
  // Duplicate the items for seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <div className="marquee-container py-3">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2.5 mx-2 glass rounded-xl border border-white/6 hover:border-white/15 hover:bg-white/6 transition-all duration-300 group whitespace-nowrap"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span>
            <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors font-medium" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
