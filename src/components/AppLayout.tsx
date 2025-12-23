import Sidebar from './layout/Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <Sidebar />
        <main className="py-24 space-y-32">{children}</main>
      </div>
    </div>
  );
}
