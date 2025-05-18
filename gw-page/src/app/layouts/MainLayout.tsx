import Footer from "../component/footer";
import Header from "../component/header";

// layouts/MainLayout.tsx
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="overflow-y-auto overflow-x-hidden h-screen pt-[120px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
