import Image from "next/image";
import Link from "next/link";

export default function BedLinenPage() {
  const Subcatlist = [
    { id: 1, name: "Single", href: "/category/bed", image: "/single-bedsheet.webp" },
    { id: 2, name: "Double", href: "/category/bed-linen", image: "/double-bedsheet.webp" },
    { id: 3, name: "King Size", href: "/category/bed-linen", image: "/king-size.jpg" },
    { id: 4, name: "Super King Size", href: "/category/bed-linen", image: "/super-king.webp" },
    { id: 5, name: "Mega King Size", href: "/category/bed-linen", image: "/mega-king.webp" },
    { id: 6, name: "AC Blankets & Dohars", href: "/category/bed-linen", image: "/dohar-pink.webp" },
    { id: 7, name: "Comforters", href: "/category/bed-linen", image: "/Comforters.jpg" },
    { id: 8, name: "Cushion Covers", href: "/category/bed-linen", image: "/cushion.jpg" },
    { id: 9, name: "Bedding Sets", href: "/category/bed-linen", image: "/bedding_set.webp" },
    { id: 10, name: "Kids Linen", href: "/category/bed-linen", image: "/kid-linen.jpg" }
  ];

  return (
    <div className="w-full">
      <div
  className="grid gap-4 h-[1500px] w-full px-8"
  style={{
    gridTemplateAreas: `
      "a b b"
      "a c d"
      "a e f"
      "g g g"
      "h i i"
      "h j j"
    `,
    gridTemplateColumns: "1fr 1fr 1fr", // 3 columns
    gridTemplateRows: "repeat(6, 1fr)"  // 6 rows
  }}
>
  {[
    { area: "a", idx: 0, extra: "row-span-3" },
    { area: "b", idx: 1 },
    { area: "c", idx: 2 },
    { area: "d", idx: 3, extra: "row-span-2" },
    { area: "e", idx: 4 },
    { area: "f", idx: 5 },
    { area: "g", idx: 6 },
    { area: "h", idx: 7, extra: "row-span-2" },
    { area: "i", idx: 8 },
    { area: "j", idx: 9 }
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
