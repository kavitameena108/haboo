import Image from "next/image";
import Link from "next/link";

export default function Subcategories() {
  const Subcatlist = [
    {
      id: 1,
      name: "Luxury Bed Sheet",
      href: "/category/bed-linen",
      image: "/bed linen 4.jpeg",
    },
    {
      id: 2,
      name: "Premium Curtain",
      href: "/category/bed-linen",
      image: "/bed linen5.jpeg",
    },
    {
      id: 3,
      name: "Designer Table Cover",
      href: "/category/bed-linen",
      image: "/bed linen2.jpeg",
    },
    {
      id: 4,
      name: "Velvet Cushion",
      href: "/category/bed-linen",
      image: "/bed linen 3.jpeg",
    },
  ];
  return (
    <div className="flex space-x-4 overflow-x-auto px-4 py-4 m-5 mt-12">
      {Subcatlist.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover"
          />
          <div className="mt-2 w-full bg-slate-300 hover:bg-yellow-600  text-black  py-2 rounded-lg">
            {" "}
            <Link
              href={product.href}
              className="text-inherit hover:underline to-blue-950"
            >
              {product.name}{" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
