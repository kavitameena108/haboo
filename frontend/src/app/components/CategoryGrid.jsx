import Image from "next/image";
import Link from "next/link";
const categories = [
  {
    id: 1,
    name: "Bed Linen",
    image: "/badsheet4.jpeg",
    href: "/category/bed-linen",
  },
  {
    id: 2,
    name: "Flooring",
    image: "/badsheet4.jpeg",
    href: "/category/curtains",
  },
  {
    id: 3,
    name: "Table Decor",
    image: "/badsheet6.jpeg",
    href: "/category/table-decor",
  },
  {
    id: 4,
    name: "Gifting",
    image: "/badsheet7.jpeg",
    href: "/category/cushions",
  },
  {
    id: 5,
    name: "Zero Waste",
    image: "/badsheet4.jpeg",
    href: "/category/bed-linen",
  },
  {
    id: 6,
    name: "SALE",
    image: "/badsheet4.jpeg",
    href: "/category/curtains",
  },
  {
    id: 7,
    name: "Rewards",
    image: "/badsheet7.jpeg",
    href: "/category/cushions",
  },
  {
    id: 8,
    name: "Bed Linen",
    image: "/badsheet4.jpeg",
    href: "/category/bed-linen",
  },
  {
    id: 9,
    name: "Curtains",
    image: "/badsheet4.jpeg",
    href: "/category/curtains",
  },
  {
    id: 10,
    name: "Table Decor",
    image: "/badsheet6.jpeg",
    href: "/category/table-decor",
  },
  {
    id: 11,
    name: "Cushions",
    image: "/badsheet7.jpeg",
    href: "/category/cushions",
  },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-full mx-auto px-4 py-4 ">
      {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Shop by Category
      </h2> */}

      <div className="flex justify-center overflow-x-auto px-6 gap-8 mt-8">
        {categories.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer flex-shrink-0 flex flex-col items-center w-20"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden ">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-2 text-center text-md font-semibold truncate w-full">
              {" "}
              <Link
                href={product.href}
                className="text-inherit hover:underline to-blue-950"
              >
                {product.name}{" "}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
