import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const IdentityCard = () => {
  const [image, setImage] = useState('/dev.png'); // Default image path

  const handleDownload = () => {
    const card = document.getElementById('identity-card');
    html2canvas(card).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'identity-card.png';
      link.click();
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen ">
      <div id="identity-card" className="w-[25vw] border-2 border-black rounded-lg bg-white shadow-lg p-6">
        <div className="text-center bg-green-600 text-white py-2 rounded-t-lg">
          <h1 className="text-lg font-bold">SAINIK AWASIYA MAHAVIDYALAYA</h1>
          <p className="text-sm">Mangalgadhi, Surkhet</p>
          <p className="text-xs">(Run by Nepali Army Welfare Fund)</p>
        </div>
        <div className="text-center my-4">
          <h2 className="bg-blue-700 text-white py-1 rounded-md">Student Identity Card</h2>
          <div className="w-24 h-30 border-2 border-black mx-auto bg-gray-200 mt-2">
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          </div>
          <p className="text-red-600 mt-2">Prem Bahadur Bishokarma<br />Principal</p>
        </div>
        <div className="text-left text-sm">
          <div className='flex justify-center'>
          <input type="text" placeholder='Name Of Student' className='text-xl capitalize text-center text-black' />
          </div>
          <div className='flex my-4  '>
          <p><strong>Roll No&nbsp;&nbsp;&nbsp;&nbsp;:</strong>&nbsp;<input type="text" placeholder='8563g' className=' uppercase w-[5vw]' /></p>
          <p><strong>Blood Group&nbsp;&nbsp;:</strong>&nbsp;<input type="text" placeholder='a+' className='uppercase w-[5vw]' /></p>
          </div>
          <div className='flex'>
          <p><strong>Grade &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong>&nbsp;<input type="text" placeholder='VI(Six)' className='capitalize w-[5vw]' /> </p>
          <p><strong>Section&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong>&nbsp;<input type="text" placeholder='rapti' className='capitalize w-[5vw]' /></p>
          </div>
          <p><strong>D.O.B:</strong>&nbsp;<input type="text" placeholder='2067-05-13' className='w-[5vw] font-semibold capitalize placeholder:text-black' />B.S. </p>
          <p><strong>Address:</strong>&nbsp;<input type="text" placeholder='Birendranagar-03,Surkhet' className=' font-semibold capitalize placeholder:text-black' /></p>
          <p><strong>Guardian:</strong>&nbsp;<input type="text" placeholder='Father name' className=' font-semibold capitalize placeholder:text-black' /></p>
          <p><strong>Contact:</strong> +977-<input type="text" placeholder='9800000000' className=' font-semibold capitalize placeholder:text-black' /></p>
          <p><strong>Validity:</strong> 2081-12-31 B.S.</p>
        </div>
        <div className="text-center bg-green-600 text-white py-2 rounded-b-lg mt-4">
          <p className="text-sm">+083-525591</p>
          <p className="text-sm"><a href="http://www.sams.edu.np" className="text-white underline">www.sams.edu.np</a></p>
          <p className="text-sm"><a href="mailto:surkhet_samv@yahoo.com" className="text-white underline">surkhet_samv@yahoo.com</a></p>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-4'>
      <input type="file" onChange={handleImageUpload} className="border border-gray-300 rounded-md px-4 py-2 cursor-pointer" />
    </div>
    <div className='flex justify-center mt-4 mb-8'>
      <button
        className="px-4 py-2 text-2xl bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={handleDownload}
      >
        Download Image
      </button>
    </div>
    </>
  );
};

export default IdentityCard;
