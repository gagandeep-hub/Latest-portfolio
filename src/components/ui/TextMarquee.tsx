"use client";

interface TextMarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
  separator?: string;
}

export function TextMarquee({
  items,
  reverse = false,
  speed = 40,
  separator = "/",
}: TextMarqueeProps) {
  // Quadruple for seamless infinite loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="txt-mq-wrap">
      <div
        className={`txt-mq-track${reverse ? " txt-mq-track--rev" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((item, i) => (
          <span key={`${item}-${i}`} className="txt-mq-item">
            {item}
            <span className="txt-mq-sep" aria-hidden="true">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
