"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PhotographyPage() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch("/api/photography");
        const data = await response.json();
        let imgs: string[] = data.images || [];
        // move KeblerPass_MountainPano to front if present
        const idx = imgs.findIndex(f =>
          f.toLowerCase().includes("keblerpass_mountainpano")
        );
        if (idx > 0) {
          const [moved] = imgs.splice(idx, 1);
          imgs.unshift(moved);
        }
        setImages(imgs);
      } catch (error) {
        console.error("Failed to load images:", error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex, images.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white" style={{
        backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight text-black">Photography</h1>
          <p className="text-sm opacity-70 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="min-h-screen bg-white" style={{
        backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight text-black mb-4">Photography</h1>
          <p className="text-sm opacity-70 text-black">0 photos</p>
          <div className="mt-8 border p-6">
            <p className="text-sm opacity-80">
              No images yet. Add files to{" "}
              <code className="font-mono">public/photography</code> and redeploy.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-white" style={{
      backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-12">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight text-black">Photography</h1>
          <p className="text-sm opacity-70 text-black">{images.length} photos</p>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-max">
          {images.map((file, index) => {
            const src = `/photography/${file}`;
            const isWide = file.toLowerCase().includes("keblerpass_mountainpano");
            return (
              <div
                key={file}
                className="cursor-pointer overflow-hidden"
                style={{
                  ...(isWide && { gridColumn: '1 / -1' }),
                  height: isWide ? 'auto' : '250px'
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={src}
                  alt={file}
                  width={1200}
                  height={800}
                  style={{ 
                    width: "100%", 
                    height: "100%",
                    objectFit: 'contain'
                  }}
                  className="transition-transform duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 hover:bg-gray-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-6 p-2 hover:bg-gray-800 transition-colors hidden sm:block"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/photography/${images[selectedIndex!]}`}
              alt={images[selectedIndex!]}
              width={1600}
              height={1200}
              className="max-w-full max-h-[90vh] w-auto h-auto"
              sizes="100vw"
              priority
            />
          </div>

          <button
            className="absolute right-6 p-2 hover:bg-gray-800 transition-colors hidden sm:block"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedIndex! + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}