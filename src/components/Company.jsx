import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png'
import company from '../images/asml/company.jpg'
import company2 from '../images/asml/company2.jpg'
import company3 from '../images/asml/company3.jpg'
import company4 from '../images/asml/company4.jpg'

import ceat_company1 from '../images/asml/ceat_company1.jpg';
import ceat_company2 from '../images/asml/ceat_company2.jpg';
import ceat_company3 from '../images/asml/ceat_company3.jpg';
import company_image from '../images/asml/boat/company_image.jpg';

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-red-800 py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>



            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-400 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="hp_company mt-4">
                    <div className='font-semibold'>(about us)</div>
                    <img src={company_image} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={320} />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-1 rounded-md w-full mx-auto">
                    {/* <div className='font-semibold'>CEAT</div> */}
                    <div className='text-[16px] font-semibold'>
                        <p>BoAt (company)<br />
                            BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables. Imagine Marketing Services Private Limited, which does business as BoAt, was incorporated in November 2013 by co-founders Sameer Ashok Mehta and Aman Gupta.</p>

                        <p>OVERVIEW<br />
                            STRUCTURED DATA<br />
                            ISSUES<br />
                            CONTRIBUTORS<br />
                            ACTIVITY<br />
                            BoAt (legal name &quot;Imagine Marketing Services Pvt. Ltd.&quot;) is an India-based company which was incorporated in November 2013. BoAt markets earphones, headphones stereos, travel chargers, and premium rugged cables.</p>

                        <p>Products and brands<br />
                            BoAt designs and markets a variety of audio-focused consumer electronics, including wireless earbuds, wired headphones, wireless speakers, home audio equipment, smart watches, and an assortment of mobile phone accessories.</p>

                        <p>Wireless earbuds<br />
                            BoAt distributes a line of wireless earbuds under the brand name Airdopes. As of mid-2020, the manufacturers suggested retail price (MSRP) for BoAt&#39;s Airdopes line ranges from ₹3,999 (approx. $53) to ₹6,999 (~$92).</p>

                        <p>Airdopes 431 wireless earbuds<br />
                            Airdopes 431 wireless earbuds</p>

                        <p><br />
                            Like competing brands and models of wireless earbuds, BoAt&#39;s Airdopes line features Bluetooth connectivity, which enables truly wireless use, as well as carrying cases that include built-in batteries to charge the wireless earbuds when not in use.</p>

                        <p>Tethered wireless earbuds<br />
                            BoAt distributes a line of teathered wireless earbuds under its Rockerz and BoAt brands. As of mid-2020, the undiscounted MSRP of BoAt&#39;s tethered wireless earbud offerings range from ₹2,990 ($39) to ₹4,990 ($66).</p>


                    </div>

                </div>




            </div>


        </div>
    )
}

export default Company