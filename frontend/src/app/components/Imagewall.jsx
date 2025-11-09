import Image from "next/image";
import Link from "next/link";

export default function Imagewall() {
  const Subcatlist = [
    { id: 1, name: "Luxury Bed Sheet", href: "/category/bed", image: "/bed linen 4.jpeg" },
    { id: 2, name: "Premium Curtain", href: "/category/bed-linen", image: "/bed linen5.jpeg" },
    { id: 3, name: "Designer Table Cover", href: "/category/bed-linen", image: "/bed linen2.jpeg" },
    { id: 4, name: "Velvet Cushion", href: "/category/bed-linen", image: "/bed linen 3.jpeg" },
    { id: 5, name: "Velvet Cushion", href: "/category/bed-linen", image: "/bed linen 3.jpeg" }
  ];

  return (
    <div className="w-full">
      <div
        className="grid gap-4 h-[600px] w-full grid-cols-3 grid-rows-3 px-8"
        style={{
          gridTemplateAreas: `
            "a b b"
            "a c d"
            "a e d"
          `
        }}
      >
        {[
          { area: "a", idx: 0, extra: "row-span-3" },
          { area: "b", idx: 1 },
          { area: "c", idx: 2 },
          { area: "d", idx: 3, extra: "row-span-2" },
          { area: "e", idx: 4 }
        ].map(({ area, idx, extra }) => (
          <div
            key={Subcatlist[idx].id}
            style={{ gridArea: area }}
            className={`
              bg-white shadow-md rounded-lg overflow-hidden 
              hover:shadow-lg transition relative group 
              ${extra ? extra : ""}
              flex items-center justify-center
            `}
          >
            <Link href={Subcatlist[idx].href} className="w-full h-full block relative">
              <Image
                src={Subcatlist[idx].image}
                alt={Subcatlist[idx].name}
                fill
                className="
                  object-cover w-full h-full transition-transform duration-300
                  group-hover:scale-110
                "
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div
                className="
                  absolute inset-0 
                  flex items-center justify-center
                  group-hover:bg-black group-hover:bg-opacity-50
                  transition
                  pointer-events-none
                "
              >
                <span
                  className="
                    text-white text-xl font-bold opacity-0 
                    group-hover:opacity-100 transition 
                    text-center
                  "
                >
                  {Subcatlist[idx].name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
