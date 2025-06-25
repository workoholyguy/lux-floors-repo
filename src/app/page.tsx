export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-16 items-center w-full max-w-5xl mx-auto p-8">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to LuxFloors</h1>
          <p className="text-lg mb-8">Your trusted partner for premium flooring solutions.</p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
        </section>
        <section className="w-full bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 1</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 2</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 3</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 4</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 5</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Image 6</div>
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</li>
            <li>Donec ullamcorper nulla non metus auctor fringilla.</li>
            <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li>
          </ul>
        </section>
        <section className="w-full bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.</p>
        </section>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-6 border-t mt-8">
        <span>&copy; {new Date().getFullYear()} LuxFloors. All rights reserved.</span>
      </footer>
    </div>
  );
}
