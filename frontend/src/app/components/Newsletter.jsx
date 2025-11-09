export default function Newsletter() {
  return (
    <section className="bg-yellow-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Get updates on new products and exclusive offers.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 w-64"
          />
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
