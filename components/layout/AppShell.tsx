import { ReactNode } from "react";
import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Footer from "@/components/shared/Footer";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    // overflow-x-hidden penting agar tidak ada scroll ke samping
    <div className="bloo-bg min-h-screen w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px]">
        
        {/* --- VERSI MOBILE (Aman, tidak pakai absolute) --- */}
        <div className="px-[16px] pt-[20px] xl:hidden flex flex-col min-h-screen">
          <HeaderTemplate />
          <main className="py-[24px] flex-grow">{children}</main>
          
          {/* Trik Footer Mobile: Paksa melebar w-screen */}
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <Footer />
          </div>
        </div>

        {/* --- VERSI DESKTOP (Kanvas Raksasa Argy) --- */}
        <div className="relative hidden min-h-[5152px] w-max-[1440px] xl:block">
          <div className="absolute left-[53px] top-[30px] w-[1333px] z-50">
            <HeaderTemplate />
          </div>

          {/* Semua komponen terbang Argy masuk di sini */}
          {children}

          {/* Trik Footer Desktop: Dipaku di bawah, tapi ditarik ke tengah dan dipaksa w-screen */}
          <div className="absolute top-[4702px] w-screen left-[50%] -translate-x-1/2">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
}