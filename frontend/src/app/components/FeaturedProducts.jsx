import Image from "next/image";

const products = [
  { id: 1, name: "Luxury Bed Sheet", price: "₹2,499", image: "/bed linen 4.jpeg" },
  { id: 2, name: "Premium Curtain", price: "₹1,799", image: "/bed linen5.jpeg" },
  { id: 3, name: "Designer Table Cover", price: "₹999", image: "/bed linen2.jpeg" },
  { id: 4, name: "Velvet Cushion", price: "₹599", image: "/bed linen 3.jpeg" },
];

export default function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod) => (
          <div key={prod.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <Image
              src={prod.image}
              alt={prod.name}
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{prod.name}</h3>
              <p className="text-yellow-600 font-bold">{prod.price}</p>
              <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
