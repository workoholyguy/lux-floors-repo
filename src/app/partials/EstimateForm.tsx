"use client";

import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  address: string;
  city: string;
  state: string;
  preferredDate: string;
  preferredTime: string;
  products: string[];
  comments: string;
  keepUpdated: boolean;
};

type Product = {
  id: string;
  label: string;
};

const products: Product[] = [
//   { id: 'area-rugs', label: 'Area rugs' },
//   { id: 'cork', label: 'Cork' },
//   { id: 'glass-tile', label: 'Glass tile' },
  { id: 'luxury-vinyl', label: 'Luxury vinyl' },
//   { id: 'solid-surface', label: 'Solid surface' },
  { id: 'waterproof', label: 'Waterproof' },
//   { id: 'cabinets', label: 'Cabinets' },
//   { id: 'countertops', label: 'Countertops' },
  { id: 'hardwood', label: 'Hardwood' },
//   { id: 'mattress', label: 'Mattress' },
//   { id: 'tile', label: 'Tile' },
  { id: 'carpet', label: 'Carpet' },
//   { id: 'furniture', label: 'Furniture' },
//   { id: 'laminate', label: 'Laminate' },
//   { id: 'natural-stone', label: 'Natural stone' },
//   { id: 'vinyl', label: 'Vinyl' },
];

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export default function EstimateForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zip: '',
    address: '',
    city: '',
    state: '',
    preferredDate: '',
    preferredTime: '',
    products: [],
    comments: '',
    keepUpdated: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      if (name === 'keepUpdated') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          products: checked
            ? [...prev.products, value]
            : prev.products.filter(product => product !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('Thank you! Your request has been sent.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zip: '',
        address: '',
        city: '',
        state: '',
        preferredDate: '',
        preferredTime: '',
        products: [],
        comments: '',
        keepUpdated: false,
      });
    } else {
      setStatus('There was an error. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-2">Request an estimate</h2>
      <p className="text-center text-gray-600 mb-8">
        MEET WITH ONE OF OUR SKILLED PROJECT SPECIALISTS TO GET STARTED
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              // required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <span className="text-red-500">*</span> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone and Zip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Zip
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              // required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Address, City, State */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select
              id="state"
              name="state"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">What products are you interested in?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {products.map(product => (
              <div key={product.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={product.id}
                  name="products"
                  value={product.id}
                  checked={formData.products.includes(product.id)}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor={product.id} className="ml-2 text-sm text-gray-700">
                  {product.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <div className="mt-1">
            <textarea
              id="comments"
              name="comments"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Keep me updated */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="keepUpdated"
            name="keepUpdated"
            checked={formData.keepUpdated}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          />
          <label htmlFor="keepUpdated" className="ml-2 block text-sm text-gray-700">
            Keep me up to date with exclusive offers.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-4 text-center text-gray-500">
        {status}
      </div>
    </div>
  );
}
