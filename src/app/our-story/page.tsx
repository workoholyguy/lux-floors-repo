import React from 'react';

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-16 items-center w-full max-w-5xl mx-auto p-8">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg mb-8">Learn about our journey, values, and commitment to delivering quality flooring solutions.</p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Our Journey</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
        </section>
        <section className="w-full bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 1</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 2</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 3</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 4</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 5</div>
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-gray-500">Memory 6</div>
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
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
    </div>
  );
} 