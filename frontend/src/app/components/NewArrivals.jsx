import Image from "next/image";

const arrivals = [
  { id: 1, name: "Cotton Bed Sheet", price: "₹1,999", image: "/bed linen5.jpeg" },
  { id: 2, name: "Sheer Curtain", price: "₹1,499", image: "/bed linen5.jpeg" },
  { id: 3, name: "Table Runner", price: "₹899", image: "/bed linen5.jpeg" },
  { id: 4, name: "Velvet Cushion Cover", price: "₹499", image: "/bed linen5.jpeg" },
];

export default function NewArrivals() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {arrivals.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <Image src={item.image} alt={item.name} width={500} height={500} className="object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-yellow-600 font-bold">{item.price}</p>
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
