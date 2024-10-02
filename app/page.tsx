import Navbar from "@/components/navbar";
import Local from "@/components/local";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-orange-500">
      <Navbar />
      <Local />
    </div>
  );
}
