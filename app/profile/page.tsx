'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Edit2, Trash2, CheckCircle2, Package, MapPin, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('Zafira Ryani Putri');
  const [userEmail, setUserEmail] = useState('zafira@example.com');
  const [userUsername, setUserUsername] = useState('zafirarp');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.name) setUserName(parsed.name);
        if (parsed.email) setUserEmail(parsed.email);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Anda telah logout.');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1285px] mx-auto px-6 py-12 relative z-10">
        {/* Top Profile & Address Grid matching Figma #304:934 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* PROFILE CARD (Figma #304:922) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-fanlste text-3xl text-black">
                Profile
              </h2>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs font-satoshi font-bold text-red-500 hover:text-red-700 transition"
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>

            <div className="p-6 md:p-8 rounded-[24px] bg-white border border-black/15 shadow-sm flex flex-col sm:flex-row items-center gap-6 min-h-[236px]">
              {/* Avatar matching Figma #149:205 */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 border-2 border-[#8798FF]">
                <Image
                  src="/images/avatar.png"
                  alt={userName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* User Meta */}
              <div className="flex-1 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <h3 className="font-fanlste text-3xl md:text-4xl text-black mb-1">
                    {userName}
                  </h3>
                  <p className="font-satoshi text-base text-gray-500 mb-1">
                    @{userUsername}
                  </p>
                  <p className="font-satoshi text-sm text-gray-400">
                    {userEmail}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => alert('Fitur edit profil segera hadir!')}
                    className="text-[#705CB2] font-satoshi font-semibold text-base hover:underline flex items-center gap-1"
                  >
                    <span>&gt; Configure Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS CARD (Figma #304:933) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-fanlste text-3xl text-black">
                Shipping Address
              </h2>
              <div className="flex items-center gap-3 text-black/70">
                <button
                  onClick={() => alert('Edit alamat')}
                  className="p-1 hover:text-[#705CB2] transition"
                  title="Edit Address"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => alert('Hapus alamat')}
                  className="p-1 hover:text-red-500 transition"
                  title="Delete Address"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-[24px] bg-white border border-black/15 shadow-sm flex flex-col justify-between min-h-[236px]">
              <div>
                <div className="flex items-center gap-2 text-[#705CB2] font-satoshi font-bold text-sm mb-2">
                  <MapPin size={16} />
                  <span>Primary Address</span>
                </div>
                <h4 className="font-satoshi font-bold text-lg text-black mb-1">
                  Home (Rumah)
                </h4>
                <p className="font-satoshi text-sm text-gray-600 leading-relaxed">
                  Jl. Sumbing No. 2, RT 04 / RW 02, Kec. Sukajadi, Kota Bandung, Jawa Barat, 40162
                </p>
                <p className="font-satoshi text-xs text-gray-400 mt-2">
                  Telp: +62 812-3456-7890 (Zafira)
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                <span>Default delivery destination</span>
                <span className="text-green-600 font-bold">Active</span>
              </div>
            </div>
          </div>

        </div>

        {/* ORDERS SECTION (Figma #304:951) */}
        <div className="space-y-6">
          <div className="px-6 py-3 rounded-2xl bg-[#705CB2] text-white shadow-sm flex items-center justify-between">
            <h2 className="font-satoshi font-bold text-2xl md:text-3xl tracking-widest uppercase">
              Recent Orders
            </h2>
            <Package size={26} />
          </div>

          <div className="p-6 md:p-8 rounded-[24px] bg-white border border-black/15 shadow-sm overflow-x-auto">
            {/* Orders Table */}
            <table className="w-full text-left font-satoshi border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#EBEBFF] to-transparent text-black text-sm uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 rounded-l-xl">Order ID</th>
                  <th className="py-4 px-4">Shipping Address</th>
                  <th className="py-4 px-4">Date & Time</th>
                  <th className="py-4 px-4">Courier</th>
                  <th className="py-4 px-4">Total</th>
                  <th className="py-4 px-4 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-black/85">
                {/* Row matching Figma */}
                <tr className="hover:bg-gray-50/70 transition">
                  <td className="py-5 px-4 font-bold text-[#705CB2]">#A6769</td>
                  <td className="py-5 px-4 max-w-[200px] truncate">Jl. Sumbing No. 2, Bandung...</td>
                  <td className="py-5 px-4 text-gray-500">01-01-2026 14:30</td>
                  <td className="py-5 px-4">AnterAja Regular</td>
                  <td className="py-5 px-4 font-fanlste text-lg font-bold text-black">$9.67</td>
                  <td className="py-5 px-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[11px] font-bold tracking-widest shadow-xs">
                      <CheckCircle2 size={13} />
                      <span>RECEIVED</span>
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/70 transition">
                  <td className="py-5 px-4 font-bold text-[#705CB2]">#B9281</td>
                  <td className="py-5 px-4 max-w-[200px] truncate">Jl. Sumbing No. 2, Bandung...</td>
                  <td className="py-5 px-4 text-gray-500">28-12-2025 10:15</td>
                  <td className="py-5 px-4">JNE Regular</td>
                  <td className="py-5 px-4 font-fanlste text-lg font-bold text-black">$45.00</td>
                  <td className="py-5 px-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[11px] font-bold tracking-widest shadow-xs">
                      <CheckCircle2 size={13} />
                      <span>RECEIVED</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

