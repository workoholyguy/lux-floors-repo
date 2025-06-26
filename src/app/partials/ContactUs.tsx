import React from 'react';
import EstimateForm from './EstimateForm';

const ContactUs = () => (
  <div className="space-y-2 text-gray-800 text-base">
    <p>
      <span className="font-semibold">Give us a call:</span> <a href="tel:7708008001" className="text-blue-600 hover:underline">(770) 800-8001</a>
    </p>
    <p>
      <span className="font-semibold">Email us at:</span> <a href="mailto:info@daltonfloorgallery.com" className="text-blue-600 hover:underline">info@daltonfloorgallery.com</a>
    </p>
    <p>
      <span className="font-semibold">Visit us at:</span> <span className="">1874 Piedmont Ave Atlanta, GA  Suite 390-C </span>
    </p>
    <p className='font-bold'>
      or fill out the form below:
    </p>
    <EstimateForm />
  </div>
);

export default ContactUs; 