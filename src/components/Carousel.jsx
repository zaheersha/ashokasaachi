import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({
  items,
  renderItem,
  ariaLabel = "carousel",
  onSlideChange, // ✅ new prop
}) {
  const containerRef = useRef(null);

  const scrollByAmount = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const amount = container.clientWidth * 0.75;

    container.scrollBy({
      left: amount * direction,
      behavior: "smooth",
    });

    // ✅ Pause videos when arrow clicked
    if (onSlideChange) {
      onSlideChange();
    }
  };

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        onScroll={() => {
          // ✅ Pause videos when manually scrolling
          if (onSlideChange) {
            onSlideChange();
          }
        }}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        role="region"
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <div
            key={item.id || item.title}
            className="w-[75vw] shrink-0 snap-center sm:w-[300px] sm:snap-start"
          >
            {renderItem(item, index)} {/* ✅ pass index */}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        className="absolute -left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone/40 bg-white text-ink shadow-md transition hover:border-copper hover:text-copper active:scale-95"
        aria-label="Scroll left"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        className="absolute -right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone/40 bg-white text-ink shadow-md transition hover:border-copper hover:text-copper active:scale-95"
        aria-label="Scroll right"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Carousel;