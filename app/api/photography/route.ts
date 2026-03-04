import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "photography");
    
    // Check if directory exists
    try {
      await fs.access(dir);
    } catch {
      return Response.json({ images: [] });
    }
    
    const files = await fs.readdir(dir);

    const images = files
      .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
      .sort()
      .reverse(); // newest first (based on filename)

    return Response.json({ images });
  } catch (error) {
    console.error("Failed to read photography directory:", error);
    return Response.json({ images: [] });
  }
}
