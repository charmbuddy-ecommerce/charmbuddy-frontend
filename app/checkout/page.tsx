'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ShieldCheck, X, CreditCard, Building2, QrCode } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  // Form states
  const [firstName, setFirstName] = useState('Zafira');
  const [lastName, setLastName] = useState('Putri');
  const [email, setEmail] = useState('zafira@example.com');
  const [phone, setPhone] = useState('081234567890');
  const [address, setAddress] = useState('Jl. Sumbing No. 2, Bandung, Jawa Barat');
  const [description, setDescription] = useState('Tolong sertakan kartu ucapan birthday ya kak!');
  const [shippingMethod, setShippingMethod] = useState<'JNE' | 'JNT'>('JNE');

  // Discount
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(34);

  // Payment Modal State (Figma Checkout - 2 #103:83)
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<'bank' | 'qris' | 'ewallet'>('bank');
  const [isProcessing, setIsProcessing] = useState(false);

  // Pricing calculations matching Figma
  const subtotal = 234;
  const delivery = shippingMethod === 'JNE' ? 20 : 18;
  const taxes = 5;
  const total = subtotal - discountAmount + delivery + taxes;

  const handleApplyDiscount = () => {
    if (discountCode.trim().toUpperCase() === 'CHARM34') {
      setDiscountAmount(34);
      alert('Discount -$34 applied!');
    } else {
      alert('Gunakan kode promo CHARM34');
    }
  };

  const handlePay = () => {
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      alert('Pembayaran Berhasil! Pesanan kamu sedang diproses.');
      router.push('/profile');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1333px] mx-auto px-6 py-12 relative z-10">
        <h1 className="font-fanlste text-4xl sm:text-5xl text-black mb-8">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT COLUMN: CUSTOMER & SHIPPING INFO (Figma #91:321) */}
          <div className="flex-1 w-full space-y-8">
            
            {/* Customer Details Box */}
            <div className="p-6 md:p-8 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm">
              <h2 className="font-fanlste text-2xl md:text-3xl text-black pb-3 border-b border-black/15 mb-6">
                Check Out Your Items
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                    Phone Number*
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-black/20 bg-gray-50 text-xs font-bold text-gray-700">
                      IND +62
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-r-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                  Address*
                </label>
                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                  required
                />
              </div>

              <div>
                <label className="block font-satoshi font-medium text-sm text-black mb-1.5">
                  Description / Order Notes
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Notes for packaging or special charm wishes..."
                  className="w-full px-4 py-2.5 rounded-xl border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                />
              </div>
            </div>

            {/* Shipping Method matching Figma #91:320 */}
            <div className="p-6 md:p-8 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm">
              <h2 className="font-fanlste text-2xl text-black pb-3 border-b border-black/15 mb-6">
                Shipping Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* JNE Option */}
                <div
                  onClick={() => setShippingMethod('JNE')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    shippingMethod === 'JNE'
                      ? 'border-[#705CB2] bg-white ring-2 ring-[#705CB2]/30 shadow-sm'
                      : 'border-black/20 bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      shippingMethod === 'JNE' ? 'border-[#705CB2]' : 'border-gray-400'
                    }`}>
                      {shippingMethod === 'JNE' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#705CB2]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-satoshi font-bold text-base text-black">JNE Regular</h3>
                      <p className="font-satoshi text-xs text-gray-500">Estimasi 2-3 Hari</p>
                    </div>
                  </div>
                  <span className="font-fanlste text-lg font-bold text-black">$20</span>
                </div>

                {/* JNT Option */}
                <div
                  onClick={() => setShippingMethod('JNT')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    shippingMethod === 'JNT'
                      ? 'border-[#705CB2] bg-white ring-2 ring-[#705CB2]/30 shadow-sm'
                      : 'border-black/20 bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      shippingMethod === 'JNT' ? 'border-[#705CB2]' : 'border-gray-400'
                    }`}>
                      {shippingMethod === 'JNT' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#705CB2]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-satoshi font-bold text-base text-black">JNT Express</h3>
                      <p className="font-satoshi text-xs text-gray-500">Estimasi 1-2 Hari</p>
                    </div>
                  </div>
                  <span className="font-fanlste text-lg font-bold text-black">$18</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY (Figma #117:290) */}
          <div className="w-full lg:w-[450px] p-6 md:p-8 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm shrink-0">
            <h2 className="font-fanlste text-2xl text-black pb-3 border-b border-black/15 mb-6">
              Your Cart
            </h2>

            {/* Cart Items Preview */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <Image
                    src="/images/hero-charm.png"
                    alt="Melted Rose"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-fanlste text-sm text-black">Melted Rose Necklace</h3>
                  <p className="font-satoshi text-xs text-gray-500">Qty: 1x</p>
                </div>
                <span className="font-fanlste text-base font-bold text-black">$35</span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <Image
                    src="/images/match-1.png"
                    alt="Blueberry Pearl"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-fanlste text-sm text-black">Blueberry Pearl Charm</h3>
                  <p className="font-satoshi text-xs text-gray-500">Qty: 2x</p>
                </div>
                <span className="font-fanlste text-base font-bold text-black">$56</span>
              </div>
            </div>

            {/* Discount Code Input matching Figma #91:361 */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Discount Code"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/20 font-satoshi text-xs tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                />
                <button
                  onClick={handleApplyDiscount}
                  className="px-5 py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 font-satoshi text-xs font-black tracking-widest transition cursor-pointer"
                >
                  APPLY
                </button>
              </div>
            </div>

            {/* Calculations matching Figma #91:380 */}
            <div className="space-y-3 pt-4 border-t border-black/10 text-sm font-satoshi">
              <div className="flex justify-between text-black">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">${subtotal}</span>
              </div>
              <div className="flex justify-between text-black/60">
                <span>Items</span>
                <span>2 items</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount</span>
                <span>-${discountAmount}</span>
              </div>
              <div className="flex justify-between text-black/60">
                <span>Delivery Services ({shippingMethod})</span>
                <span>+${delivery}</span>
              </div>
              <div className="flex justify-between text-black/60">
                <span>Taxes</span>
                <span>+${taxes}</span>
              </div>
            </div>

            {/* Pay Button matching Figma #91:382 */}
            <button
              onClick={handlePay}
              className="w-full mt-8 py-4 px-6 rounded-2xl bg-black/90 hover:bg-black text-white flex items-center justify-between font-satoshi font-black text-lg tracking-widest shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Pay Now</span>
              <span className="font-fanlste text-2xl">${total}</span>
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 font-satoshi">
              <ShieldCheck size={16} className="text-green-600" />
              <span>Safe & Encrypted 256-bit Checkout</span>
            </div>
          </div>

        </div>
      </main>

      {/* PAYMENT MODAL (Figma Checkout - 2 #103:83) */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-[30px] p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black transition"
            >
              <X size={20} />
            </button>

            <h3 className="font-fanlste text-3xl text-black text-center mb-2">
              Select Payment
            </h3>
            <p className="font-satoshi text-xs text-center text-gray-500 mb-6">
              Total payment: <strong className="text-black font-fanlste text-base">${total}</strong>
            </p>

            <div className="space-y-3 mb-8">
              <label
                onClick={() => setSelectedPayment('bank')}
                className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition ${
                  selectedPayment === 'bank' ? 'border-[#8798FF] bg-[#8798FF]/10 ring-2 ring-[#8798FF]' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Building2 className="text-[#705CB2]" size={22} />
                <div className="flex-1">
                  <h4 className="font-satoshi font-bold text-sm text-black">Transfer Bank (Virtual Account)</h4>
                  <p className="text-xs text-gray-500">BCA, Mandiri, BNI, BRI</p>
                </div>
              </label>

              <label
                onClick={() => setSelectedPayment('qris')}
                className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition ${
                  selectedPayment === 'qris' ? 'border-[#8798FF] bg-[#8798FF]/10 ring-2 ring-[#8798FF]' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <QrCode className="text-[#705CB2]" size={22} />
                <div className="flex-1">
                  <h4 className="font-satoshi font-bold text-sm text-black">QRIS Instant</h4>
                  <p className="text-xs text-gray-500">Scan via GoPay, OVO, ShopeePay, BCA</p>
                </div>
              </label>

              <label
                onClick={() => setSelectedPayment('ewallet')}
                className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition ${
                  selectedPayment === 'ewallet' ? 'border-[#8798FF] bg-[#8798FF]/10 ring-2 ring-[#8798FF]' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="text-[#705CB2]" size={22} />
                <div className="flex-1">
                  <h4 className="font-satoshi font-bold text-sm text-black">Credit / Debit Card</h4>
                  <p className="text-xs text-gray-500">Visa, Mastercard, JCB</p>
                </div>
              </label>
            </div>

            <button
              onClick={handleConfirmPayment}
              disabled={isProcessing}
              className="w-full py-3.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-bold text-base transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? 'Processing Payment...' : `Confirm & Pay $${total}`}
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

