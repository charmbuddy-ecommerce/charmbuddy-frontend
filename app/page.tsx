import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-[url('/blueberrybg.jpg')] bg-cover bg-center bg-no-repeat">
      <p className="my-5 w-fit px-6 rounded-2xl text-blue-950 font-bold text-3xl bg-gray-100">Be my blue</p>
      <div className="bg-blue-200 w-full h-80 flex flex-col items-center">
        <div className="bg-green-800 max-w-screen-xl w-max">
          <p>Mix it, Match it, Make it YOURS!</p>
        </div>
      </div>
      <ProductCarousel></ProductCarousel>
    </main>
  );
}