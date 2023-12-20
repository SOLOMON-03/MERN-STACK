import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LisitingItem from '../components/LisitingItem';
import home1 from '../assets/images/home1.jpg'
import home2 from '../assets/images/home2.jpg'
import home3 from '../assets/images/home3.jpg'
import home4 from '../assets/images/home4.jpg'
import home5 from '../assets/images/home5.jpg'
import home6 from '../assets/images/home6.jpg'
import home7 from '../assets/images/home7.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faLandmarkAlt, faLandmarkDome, faLandmarkFlag } from '@fortawesome/free-solid-svg-icons';

export default function Booking() {
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (searchTermFromUrl ||
      typeFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        offer: offerFromUrl === true ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc'
      });
    }
  }, [location.search]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.id === 'all' || e.target.id === 'rent' || e.target.id === 'land' || e.target.id === 'sale') {
      setSidebardata({ ...sidebardata, type: e.target.id })
    }
    if (e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value })
    }
    if (e.target.id === 'offer') {
      setSidebardata({
        ...sidebardata,
        offer:
          e.target.checked || e.target.checked === 'true' ? true : false
      });
    }
    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';
      const order = e.target.value.split('_')[1] || 'desc';
      setSidebardata({ ...sidebardata, sort, order });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams()
    urlParams.set('searchTerm', sidebardata.searchTerm)
    urlParams.set('type', sidebardata.type)
    urlParams.set('offer', sidebardata.offer)
    urlParams.set('sort', sidebardata.sort)
    urlParams.set('order', sidebardata.order)
    const searchQuery = urlParams.toString()
    navigate(`/booking?${searchQuery}`)
  }
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className="flex items-center gap-2 ">
            <label className=' font-semibold whitespace-nowrap'>Search Term:</label>
            <input type="text" id="searchTerm" placeholder='Search...' className='border rounded-lg p-3 w-full' value={sidebardata.searchTerm} onChange={handleChange} />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className=' font-semibold'>Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="all" className='w-5' onChange={handleChange} checked={sidebardata.type === 'all'} />
              <span>Rent & sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="rent" onChange={handleChange} checked={sidebardata.type === 'rent'} className='w-5' />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="sale" onChange={handleChange} checked={sidebardata.type === 'sale'} className='w-5' />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="land" onChange={handleChange} checked={sidebardata.type === 'land'} className='w-5' />
              <span>Land</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="offer" onChange={handleChange} checked={sidebardata.type === 'offer'} className='w-5' />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className=' font-semibold'>Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={'created_at_desc'}
              id="sort_order" className='border rounded-lg p-3'>
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className='uppercase p-3 rounded-lg bg-emerald-700 text-white hover:opacity-95'>Search...</button>
        </form>
      </div>
      <div className="flex-1">
        <h1 className='text-3xl font-semibold border-b p-3 text-emerald-700 mt-5'>Lisiting Results:</h1>
        {/* <div className="flex p-7 flex-wrap gap-4">
          {!loading && listings.length === 0 && (<p className='text-xl text-emerald-700'>No Lisiting Found!</p>)}
          {!loading && (<p className='text-xl text-emerald-700 text-center w-full'>Loading...</p>)}
          {
            !loading&& listings && listings.map((listing)=> {<LisitingItem key={listing.id} listing={listing}/>})
          }
        </div> */}
        <div className="flex flex-wrap m-7 gap-16 justify-center">
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home1} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-4 ">
              <h1 className='font-semibold '>Classic Home</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Los Angeles, California.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$500/month</span>

            </div>
          </div>
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home2} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-2">
              <h1 className='font-semibold'>Modern Home</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Switzerland, Europe.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$1200/month</span>
            </div>
          </div>
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home3} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-2">
              <h1 className='font-semibold'>Modern Home</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Florida, United States.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$2000/month</span>
            </div>
          </div>
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home5} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-2">
              <h1 className='font-semibold'>Beach House</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Philippines, Asia.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$1500/month</span>

            </div>
          </div>
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home4} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-2">
              <h1 className='font-semibold'>Classic Home</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Paris, France.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$800/month</span>
            </div>
          </div>
          <div className="bg-white w-[280px] rounded-lg overflow-hidden cursor-pointer">
            <img src={home6} alt="" className='w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-scale duration-300 object-cover ' />
            <div className="flex flex-col p-2">
              <h1 className='font-semibold'>Land</h1>
              <p><FontAwesomeIcon icon={faLandmark} /> Hawkins, Texas.</p>
              <p>A home is a place that gives comfort to everyone. It is because a home is filled with love and life. </p>
              <span>$1000/Sqft</span>
              <span>Totally 10000sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
