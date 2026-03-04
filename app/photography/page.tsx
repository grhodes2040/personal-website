import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static"; // updates when you deploy

export const metadata = {
  title: "Photography",
};

export default async function PhotographyPage() {
  const dir = path.join(process.cwd(), "public", "photography");

  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    files = [];
  }

  const images = files
    .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .sort()
    .reverse(); // newest first (based on filename)

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold">Photography</h1>
        <p className="text-sm opacity-70">{images.length} photos</p>
      </div>

      {images.length === 0 ? (
        <div className="mt-8 rounded-2xl border p-6">
          <p className="text-sm opacity-80">
            No images yet. Add files to{" "}
            <code className="font-mono">public/photography</code> and redeploy.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((file) => {
            const src = `/photography/${file}`;
            return (
              <Link
                key={file}
                href={src}
                target="_blank"
                className="group relative aspect-square overflow-hidden rounded-xl"
                aria-label={`Open ${file} fullsize`}
              >
                <Image
                  src={src}
                  alt={file}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="text-xs text-white">View fullsize</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}