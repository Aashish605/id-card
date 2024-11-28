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
      <div className="flex mt-28 items-center justify-center h-fit relative">
        <div id="identity-card" className="relative w-[30vw] border-2 border-black bg-white shadow-lg p-2">
          <img src="/logo.png" alt="" className='absolute w-[5vw] h-[12vh] top-[3.5rem] left-[1rem]' />
          <img src="/estd.png" alt="" className='absolute w-[5vw] h-[13vh] top-[3rem] right-[1rem]' />
          <div className="text-center bg-green-900 text-white pt-2 rounded-tr-lg">
            <h1 className="text-2xl text-yellow-400 mx-4 font-bold">SAINIK AWASIYA MAHAVIDYALAYA</h1>
            <p className="text-lg">Mangalgadhi, Surkhet</p>
            <p className="text-sm text-orange-400 pb-4">(Run by Nepali Army Welfare Fund)</p>
          </div>
          <div className="text-center mb-4">
            <h2 className="bg-blue-950 text-2xl h-14 rounded-b-[70%] text-white py-1">Student Identity Card</h2>
            <div className="w-[15vh] h-[15vh] border-2 border-green-900 mx-auto overflow-hidden bg-gray-200">
              <img src={image} alt="Uploaded" className="h-[15vh] object-cover overflow-hidden" />
            </div>
            <p className=''>
              <input type="text" className='text-red-900 text-center bg-transparent font-semibold text-xl' placeholder='Teacher' />
            </p>
          </div>
          <div className="text-left text-sm">
            <div className='flex justify-center'>
              <input type="text" placeholder='Name of Student' className='text-2xl bg-transparent font-bold text-center text-black' />
            </div>
            <div className='flex'>
              <p className='flex'>
                <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Roll No</span>:&nbsp;  </span>
                <input type="text" placeholder='8563g' className='text-xl bg-transparent relative top-[7px] font-semibold w-[6vw]' />
              </p>
              <p className='flex items-center'>
                <span className='text-xl font-semibold flex justify-between w-[9vw]'><span>Blood Group</span>:&nbsp;  </span>
                <input type="text" placeholder='a+' className='text-xl bg-transparent relative top-[7px] font-semibold uppercase w-[5vw]' />
              </p>
            </div>
            <div className='flex'>
              <p className='flex'>
                <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Grade</span>:&nbsp;  </span>
                <input type="text" placeholder='VI(Six)' className='bg-transparent relative top-[7px] w-[6vw] text-xl font-semibold' />
              </p>
              <p className='flex'>
                <span className='text-xl font-semibold flex justify-between w-[9vw]'><span>Section</span>:&nbsp;  </span>
                <input type="text" placeholder='rapti' className='bg-transparent relative top-[7px] text-xl font-semibold w-[5vw]' />
              </p>
            </div>
            <p className='text-xl font-semibold flex'>
              <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>D.O.B</span>:&nbsp;  </span>
              <input type="text" placeholder='2067-05-13' className='w-[7vw] font-semibold text-xl bg-transparent relative top-[7px]' /> &nbsp; B.S.
            </p>
            <p className='flex'>
              <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Address</span>:&nbsp;  </span>
              <input type="text" placeholder='Birendranagar-03,Surkhet' className='bg-transparent relative top-[7px] font-semibold text-xl' />
            </p>
            <p className='flex'>
              <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Guardian</span>:&nbsp;  </span>
              <input type="text" placeholder='Father name' className='font-semibold bg-transparent relative top-[7px] text-xl' />
            </p>
            <p className='text-xl font-semibold flex'>
              <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Contact</span>:&nbsp; </span> +977-
              <input type="text" placeholder='9800000000' className='font-semibold bg-transparent relative top-[5px] text-xl' />
            </p>
            <p className='text-xl font-semibold flex'>
              <span className='text-xl font-semibold flex justify-between w-[6vw]'><span>Validity</span>:&nbsp; </span> 2081-12-31 B.S.
            </p>
          </div>
          <div className="text-center bg-green-900 flex justify-around items-center h-[10vh] text-white py-2 mt-2 rounded-t-lg">
            <div className='flex items-center'>
              <img src="/phone.png" alt="" className='h-[7vh]' />
              <p className="text-2xl relative bottom-3">+083-525591</p>
            </div>
            <div>
              <p className="text-sm flex items-center gap-2">
                <img src="/mail.png" alt="" className='h-[4vh]' />
                <a href="mailto:surkhet_samv@yahoo.com" className="text-white relative bottom-2">surkhet_samv@yahoo.com</a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <img src="/web.png" alt="" className='h-[4vh]' />
                <a href="http://www.sams.edu.np" className="text-white relative bottom-2">www.sams.edu.np</a>
              </p>
            </div>
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
