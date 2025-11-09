export default function Testimonials() {
  const reviews = [
    { name: "Priya S.", text: "The bed sheets are super soft and elegant." },
    { name: "Rohit M.", text: "Loved the curtain quality, totally worth it!" },
    { name: "Aisha K.", text: "Great designs and fast delivery." },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded-lg text-center">
              <p className="italic">"{review.text}"</p>
              <h4 className="mt-4 font-bold">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
