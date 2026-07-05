import { useCallback, useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import reviewSandeep from "@/assets/review-sandeep.png.asset.json";
import reviewSushil from "@/assets/review-sushil.png.asset.json";
import reviewSubodh from "@/assets/review-subodh.png.asset.json";

type Review = { src: string; alt: string; name: string };

// Order: [left, center/front, right]
const REVIEWS: Review[] = [
  {
    src: reviewSandeep.url,
    alt: "Google review from Sandeep Kumar (5 stars) for Rajeshwar Marriage Hall",
    name: "Sandeep Kumar",
  },
  {
    src: reviewSushil.url,
    alt: "Google review from Sushil Kumar (5 stars) for Rajeshwar Marriage Hall",
    name: "Sushil Kumar",
  },
  {
    src: reviewSubodh.url,
    alt: "Google review from Subodh Kumar (5 stars) for Rajeshwar Marriage Hall",
    name: "Subodh Kumar",
  },
];

export default function ReviewsDeck() {
  // order[0] = left, order[1] = front, order[2] = right
  const [order, setOrder] = useState<number[]>([0, 1, 2]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);

  const [mobileRef, mobileApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [lbRef, lbApi] = useEmblaCarousel({ loop: true, align: "center" });

  const [mobileFront, setMobileFront] = useState(1); // start at Sushil (index 1)

  useEffect(() => {
    if (!mobileApi) return;
    mobileApi.scrollTo(1, true);
    const onSelect = () => setMobileFront(mobileApi.selectedScrollSnap());
    mobileApi.on("select", onSelect);
    onSelect();
    return () => {
      mobileApi.off("select", onSelect);
    };
  }, [mobileApi]);

  useEffect(() => {
    if (lightboxOpen && lbApi) {
      lbApi.scrollTo(lightboxStart, true);
    }
  }, [lightboxOpen, lbApi, lightboxStart]);

  const bringToFront = useCallback(
    (position: "left" | "right") => {
      setOrder(([l, c, r]) => {
        if (position === "left") return [c, l, r];
        return [l, r, c];
      });
    },
    []
  );

  const openLightbox = (index: number) => {
    setLightboxStart(index);
    setLightboxOpen(true);
  };

  const frontIndex = order[1];

  return (
    <div className="reviews-deck-wrap">
      {/* Desktop / tablet fanned deck */}
      <div className="reviews-deck reviews-deck-desktop" aria-label="Customer Google reviews">
        {order.map((reviewIdx, pos) => {
          const review = REVIEWS[reviewIdx];
          const role = pos === 0 ? "left" : pos === 1 ? "front" : "right";
          return (
            <button
              key={reviewIdx}
              type="button"
              className={`review-card review-card-${role}`}
              onClick={() => {
                if (role === "left") bringToFront("left");
                else if (role === "right") bringToFront("right");
              }}
              aria-label={role === "front" ? `${review.name} review (front)` : `Bring ${review.name} review to front`}
              tabIndex={0}
            >
              <img src={review.src} alt={review.alt} loading="lazy" draggable={false} />
              {role === "front" && (
                <span
                  className="review-zoom"
                  role="button"
                  aria-label="Enlarge review"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(reviewIdx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      openLightbox(reviewIdx);
                    }
                  }}
                >
                  <Search size={16} strokeWidth={2.25} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile embla deck */}
      <div className="reviews-deck-mobile">
        <div className="reviews-embla" ref={mobileRef}>
          <div className="reviews-embla-container">
            {REVIEWS.map((review, i) => {
              const isFront = i === mobileFront;
              return (
                <div className="reviews-embla-slide" key={i}>
                  <div
                    className={`review-card review-card-mobile ${isFront ? "is-front" : "is-side"}`}
                  >
                    <img src={review.src} alt={review.alt} loading="lazy" draggable={false} />
                    {isFront && (
                      <button
                        type="button"
                        className="review-zoom"
                        aria-label="Enlarge review"
                        onClick={() => openLightbox(i)}
                      >
                        <Search size={16} strokeWidth={2.25} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="reviews-swipe-hint">Swipe to see more</p>
      </div>

      {/* Lightbox */}
      <Dialog.Root open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="reviews-lightbox-overlay" />
          <Dialog.Content className="reviews-lightbox-content" aria-describedby={undefined}>
            <Dialog.Title className="sr-only-visually">Customer Google reviews</Dialog.Title>
            <div className="reviews-lightbox-embla" ref={lbRef}>
              <div className="reviews-lightbox-container">
                {REVIEWS.map((review, i) => (
                  <div className="reviews-lightbox-slide" key={i}>
                    <img src={review.src} alt={review.alt} />
                  </div>
                ))}
              </div>
            </div>
            <Dialog.Close asChild>
              <button type="button" className="reviews-lightbox-close" aria-label="Close">
                <X size={22} strokeWidth={2.25} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
