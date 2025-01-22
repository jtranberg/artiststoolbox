import '../styles/page.css';
export const metadata = {
  title: "CoverCraft - Text to Lyrics",
  description: "An amazing tool for artists.",
};

export default function About() {
  return (
    <div className="page min-h-screen flex items-center justify-center bg-gradient-to-t from-purple-700 to-orange-500 text-white p-8">
      <h1 className="text-4xl font-bold">Text To Lyrics</h1>
      <p className="mt-4 text-lg">This feature is under development. Stay tuned!</p>
    </div>
  );
}
