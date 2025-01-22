import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CoverCraft - Your Artist's Toolbox",
  description: "An amazing tool for artists.",
};
export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-t from-purple-700 to-orange-500 text-white font-sans relative">
      <Image
        src="/toolbox.png"
        alt="Artist Toolbox"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
      />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center p-8 relative z-10">
        <h2 className="title">Unleash Your Creativity</h2>
        <p className="greeting">
          Welcome to the Artist Toolbox! This platform is your creative companion, offering a suite of tools to inspire and enhance your projects:
        </p>
        <ul className="list">
          <li>Text-to-Image Generator: Transform your ideas into stunning visuals.</li>
          <li>Text-to-Lyrics Generator: Bring words to life with custom lyrics.</li>
          <li>Upscaler: Enhance image resolution for better quality.</li>
          <li>About Information: Learn more about this creative toolbox and its mission.</li>
        </ul>
        <div className="flex gap-4">
          
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-gray-600 text-center relative z-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} CoverCraft. All rights reserved.</p>
      </footer>
    </div>
  );
}
