"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
}

const categories: Record<string, { name: string; subcategories: string[] }> = {
  meble: { name: "Meble", subcategories: ["Sofy", "Krzesła", "Stoły"] },
  kuchnie: { name: "Kuchnie", subcategories: ["Blaty", "Szafki"] },
  office: { name: "Office", subcategories: ["Biurka", "Krzesła biurowe"] },
  outdoor: { name: "Outdoor", subcategories: ["Ogrody", "Tarasy"] },
  drzwi: { name: "Drzwi", subcategories: ["Wewnętrzne", "Zewnętrzne"] },
  oswietlenie: { name: "Oświetlenie", subcategories: ["Lampy", "Żarówki"] },
  dekoracje: { name: "Dekoracje", subcategories: ["Obrazy", "Dodatki"] },
};

const products: Product[] = [
  { id: 1, name: "Sofa Classic", category: "meble", subcategory: "Sofy", price: 1200 },
  { id: 2, name: "Krzesło Modern", category: "meble", subcategory: "Krzesła", price: 400 },
  { id: 3, name: "Stół Drewniany", category: "meble", subcategory: "Stoły", price: 900 },
  { id: 4, name: "Blat Granit", category: "kuchnie", subcategory: "Blaty", price: 500 },
  { id: 5, name: "Szafka Biała", category: "kuchnie", subcategory: "Szafki", price: 700 },
  { id: 6, name: "Biurko Pro", category: "office", subcategory: "Biurka", price: 800 },
  { id: 7, name: "Krzesło Biurowe", category: "office", subcategory: "Krzesła biurowe", price: 350 },
];

export default function CategoryPage() {
  const params = useParams<{ category: string }>();
  const initialCategory = params?.category ?? "meble";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("nameAsc");

  const handleSort = (a: Product, b: Product) => {
    switch (sort) {
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "nameDesc":
        return b.name.localeCompare(a.name);
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      default:
        return 0;
    }
  };

  const filteredProducts = products
    .filter((p) => {
      if (p.category !== selectedCategory) return false;
      if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
      return true;
    })
    .sort(handleSort);

  return (
    <>
      <Header />
      <div className="pt-[120px] px-4 flex flex-col gap-4">
        <div className="flex justify-end">
          <select
            className="border p-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="nameAsc">Nazwa ↑</option>
            <option value="nameDesc">Nazwa ↓</option>
            <option value="priceAsc">Cena ↑</option>
            <option value="priceDesc">Cena ↓</option>
          </select>
        </div>
        <div className="flex gap-4">
          <div className="w-1/3 max-w-xs">
            {Object.entries(categories).map(([slug, cat]) => (
              <div key={slug} className="mb-2">
                <button
                  onClick={() => {
                    setSelectedCategory(slug);
                    setSelectedSubcategory(null);
                  }}
                  className={`flex justify-between w-full py-1 px-2 text-left border-b ${
                    selectedCategory === slug ? "font-bold" : ""
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.subcategories.length > 0 && <span>+</span>}
                </button>
                {selectedCategory === slug && cat.subcategories.length > 0 && (
                  <ul className="pl-4 mt-1">
                    {cat.subcategories.map((sub) => (
                      <li key={sub} className="py-0.5">
                        <button
                          onClick={() => setSelectedSubcategory(sub)}
                          className={`text-sm ${
                            selectedSubcategory === sub ? "font-semibold" : ""
                          }`}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="w-2/3 grid grid-cols-1 gap-4">
            {filteredProducts.map((p) => (
              <div key={p.id} className="border p-4">
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-gray-500">{p.price} zł</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
