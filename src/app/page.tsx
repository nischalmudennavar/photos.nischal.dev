"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollRef.current || !containerRef.current) return;

      const scrollContainer = scrollRef.current;
      const images = scrollContainer.querySelectorAll("img");
      const totalWidth = scrollContainer.scrollWidth / 3; // Divide by 3 because we have 3 sets

      // Horizontal scroll animation tied to vertical scroll
      gsap.to(scrollContainer, {
        scrollLeft: totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            // Loop the scroll position for infinite effect
            const progress = self.progress;
            scrollContainer.scrollLeft = (progress * totalWidth) % totalWidth;
          },
        },
      });
    },
    { scope: containerRef }
  );

  const images = [
    {
      src: "https://images.pexels.com/photos/33814183/pexels-photo-33814183.jpeg",
      alt: "Palm tree",
    },
    {
      src: "https://images.pexels.com/photos/5871125/pexels-photo-5871125.jpeg",
      alt: "Landscape",
    },
    {
      src: "https://images.pexels.com/photos/16152930/pexels-photo-16152930.jpeg",
      alt: "Nature scene",
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col col-span-12 min-h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col gap-12">
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-end gap-2 h-1/4 relative">
          <p className="mb-4 text-lg font-secondary text-foreground/60">
            photos by
          </p>
          <h1 className="font-primary text-[96px] font-medium leading-tight">
            Nischal Mudennavar
          </h1>
          <p className="mb-4 text-lg font-secondary text-foreground/80 absolute -bottom-12 right-0">
            count
          </p>
        </div>

        {/* Image Slider */}
        <div
          ref={scrollRef}
          className="h-3/4 w-full flex gap-20 mb-4 overflow-x-scroll whitespace-nowrap hide-scrollbar"
        >
          {/* Triple the images for infinite loop */}
          {[...images, ...images, ...images].map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-full w-auto shrink-0"
              width={900}
              height={600}
              quality={100}
              unoptimized
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// https://reactbits.dev/backgrounds/grid-distortion