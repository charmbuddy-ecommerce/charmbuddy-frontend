export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-12 h-12 rounded-full border-4 border-[#8798FF]/30 border-t-[#8798FF] animate-spin mb-4" />
      <p className="font-fanlste text-xl text-[#705CB2] tracking-wider animate-pulse">
        Blooming...
      </p>
    </div>
  );
}
