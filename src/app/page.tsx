import NavBar from "@/components/NavBar";
import Banners from "@/components/Banners";
import Shortcuts from "@/components/Shortcuts";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center bg-white">
        <div className="w-full md:w-11/12 xl:w-4/6">
          <NavBar />
        </div>
        <Banners />
        <div className="flex flex-col mx-4 xl:gap-10 xl:w-4/6 md:w-11/12">
          <div className="my-4 xl:my-20">
            <Shortcuts />
          </div>
          <Collections />
        </div>
      </div>
    </main>
  );
}
