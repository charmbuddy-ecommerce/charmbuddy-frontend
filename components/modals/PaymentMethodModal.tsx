import type { MouseEvent } from "react";

type PaymentMethodModalProps = {
  open?: boolean;
  onDone?: () => void;
  onBrowse?: () => void;
  onOverlayClick?: () => void;
};

function PaymentRow() {
  return (
    <div className="flex h-[65px] w-[353px] items-center justify-between">
      <img alt="Transfer Bank" className="h-[65px] w-[111px] rounded-[5px] object-cover" src="/payment-method/thumbnail.png" />
      <p className="w-[132px] font-[var(--font-satoshi)] text-[16px] font-bold leading-[normal] tracking-[2.4px] text-black">Transfer Bank</p>
      <div className="flex h-[20px] w-[20px] items-center justify-between rounded-[15px] border border-black p-[6px]">
        <img alt="Selected" className="h-[10px] w-[10px]" src="/payment-method/radio-dot.svg" />
      </div>
    </div>
  );
}

function InstructionLeft() {
  return (
    <ol className="w-full list-decimal whitespace-pre-wrap pl-[30px] font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-black md:w-[353px]">
      <li>
        Silakan transfer ke rekening <span className="font-black">[Bank]</span> <span className="font-black">[Nomor Rekening]</span> a.n <span className="font-black">[Nama]</span>.
      </li>
      <li>Upload bukti pembayaranmu di sini.</li>
    </ol>
  );
}

function InstructionRight() {
  return (
    <ol className="w-full list-decimal whitespace-pre-wrap pl-[30px] font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-black md:w-[349px]" start={3}>
      <li>
        Pastikan bukti ter-upload, lalu klik &quot;<span className="font-black">Done</span>&quot; agar pesanan segera diproses.
      </li>
    </ol>
  );
}

function UploadBox({ onBrowse }: { onBrowse?: () => void }) {
  return (
    <div className="flex h-[250px] w-[250px] items-center justify-between bg-[#d9d9d9] px-[91px] py-[22px]">
      <div className="flex w-[121px] flex-col items-start gap-[34px]">
        <div className="flex h-[61px] w-full flex-col items-center gap-[10px]">
          <img alt="Camera" className="h-[24px] w-[24px]" src="/payment-method/camera.svg" />
          <p className="w-full text-center font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-[rgba(0,0,0,0.5)]">Drop Here</p>
        </div>
        <button className="flex h-[43px] w-full items-center justify-center rounded-[50px] bg-black px-[16px] py-[8px]" onClick={onBrowse} type="button">
          <p className="font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-white">Browse</p>
        </button>
      </div>
    </div>
  );
}

export default function PaymentMethodModal({ open = true, onDone, onBrowse, onOverlayClick }: PaymentMethodModalProps) {
  if (!open) {
    return null;
  }

  const handleOverlayClick = () => {
    onOverlayClick?.();
  };

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#525252]" onClick={handleOverlayClick}>
      <div className="flex min-h-screen items-center justify-center p-[16px]">
        <div
          className="relative w-[min(900px,92vw)] rounded-[20px] bg-white"
          onClick={stopPropagation}
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 178, 254, 0.5) 0%, rgba(149, 178, 254, 0.5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <div className="flex flex-col gap-[20px] px-[20px] py-[23px] md:px-[40px] xl:hidden">
            <div className="flex w-full flex-col items-center gap-[10px]">
              <p className="w-full text-center font-[var(--font-fanlste)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">Payment Method</p>
              <img alt="" className="h-[1.565px] w-full" src="/payment-method/divider-line.svg" />
            </div>

            <PaymentRow />
            <InstructionLeft />
            <UploadBox onBrowse={onBrowse} />
            <InstructionRight />

            <button className="flex h-[43px] w-[121px] items-center justify-center rounded-[50px] bg-black px-[16px] py-[8px]" onClick={onDone} type="button">
              <p className="font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-white">Done</p>
            </button>
          </div>

          <div className="relative hidden h-[650px] w-[900px] xl:block">
            <div className="absolute left-[212px] top-[23px] flex h-[40.565px] w-[432px] flex-col items-center gap-[10px]">
              <p className="w-full text-center font-[var(--font-fanlste)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">Payment Method</p>
              <img alt="" className="h-[1.565px] w-full" src="/payment-method/divider-line.svg" />
            </div>

            <div className="absolute left-[75px] top-[97.5px]">
              <PaymentRow />
            </div>

            <div className="absolute left-[75px] top-[196px] h-[428px] w-[774px]">
              <div className="absolute left-0 top-0 w-[353px]">
                <InstructionLeft />
              </div>
              <div className="absolute left-[425px] top-0 w-[349px]">
                <InstructionRight />
              </div>
              <button className="absolute left-[425px] top-[135px] flex h-[43px] w-[121px] items-center justify-center rounded-[50px] bg-black px-[16px] py-[8px]" onClick={onDone} type="button">
                <p className="font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-white">Done</p>
              </button>
              <div className="absolute left-0 top-[178px]">
                <UploadBox onBrowse={onBrowse} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
