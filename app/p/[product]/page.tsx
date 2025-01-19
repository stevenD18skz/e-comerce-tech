import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import ProductDetails from "./product-details";

// Mock product data - in a real app this would come from an API/database
const products = [
  {
    id: "ilana-sofa",
    name: "Ilana",
    price: 430.99,
    reviews: 441,
    rating: 4.5,
    description:
      "A sectional sofa or an L-shaped sofa can make a great addition to your living room based on your needs.",
    colors: ["#E5B168", "#9CA3AF", "#4A5B7D", "#606C38", "#1B263B"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "5 - 7 weeks",
      cost: 50,
    },
  },
  {
    id: "s",
    name: "Serenity Sofa",
    price: 599.99,
    reviews: 325,
    rating: 4.7,
    description:
      "A modern sofa that combines comfort with elegant design, perfect for contemporary living spaces.",
    colors: ["#D4A373", "#457B9D", "#1D3557", "#2F3E46", "#BC6C25"],
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 75,
    },
  },
];

export function generateStaticParams() {
  return products.map((product) => ({
    product: product.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const product = products.find((p) => p.id === params.product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-200">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-500 w-full">
        <ProductDetails product={product} />

        {/* Featured Products */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-medium text-neutral-900">
                Productos destacados
              </h2>
              <p className="mt-1 text-neutral-600">
                Diseños exclusivos seleccionados para ti
              </p>
            </div>
            <button className="text-neutral-900 flex items-center space-x-2 group">
              <span>Ver todos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sofá Modular Oslo",
                price: "1,299",
                rating: 4.8,
                image:
                  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
              },
              {
                name: "Sillón Copenhagen",
                price: "599",
                rating: 4.9,
                image:
                  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800",
              },
              {
                name: "Mesa de Centro Aria",
                price: "299",
                rating: 4.7,
                image:
                  "https://cdn.sklum.com/es/wk/3836095/mesa-de-centro-rectangular-en-mdf-90x50-cm-aria.jpg?cf-resize=gallery",
              },
              {
                name: "Lámpara Nórdica",
                price: "149",
                rating: 4.9,
                image:
                  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
              },
            ].map((product) => (
              <div key={product.name} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    className="absolute bottom-4 right-4 p-3 bg-white rounded-full
                                   shadow-lg opacity-0 group-hover:opacity-100 transition-opacity
                                   hover:bg-neutral-50 active:scale-95"
                  >
                    <ShoppingBag className="h-5 w-5 text-neutral-900" />
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-neutral-600">
                      {product.rating}
                    </span>
                  </div>
                  <h3 className="mt-1 font-medium text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-neutral-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
