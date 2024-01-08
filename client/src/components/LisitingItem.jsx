import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapLocation } from '@fortawesome/free-solid-svg-icons';
export default function ListingItem({ listing }) {
    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] lg:w-[315px]'>
            <Link to={`/listing/${listing._id}`}>
                <img
                    src={
                        listing.imageUrls[0] ||
                        'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
                    }
                    alt='listing cover'
                    className='sm:h-[220px] h-[320px] w-full object-full hover:scale-105 transition-scale duration-300'
                />
                <div className='p-3 flex flex-col gap-2 w-full'>
                    <p className='truncate text-lg font-semibold text-emerald-700'>
                        {listing.name}
                    </p>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon icon={faMapLocation} className='h-4 w-4 text-green-700' />
                        <p className='text-sm text-gray-600 truncate w-full'>
                            {listing.address}
                        </p>
                    </div>
                    <p className='text-sm text-gray-600 line-clamp-2'>
                        {listing.description}
                    </p>
                    <p className='text-emerald-500 mt-2 font-semibold '>
                        $
                        {listing.offer
                            ? listing.discountPrice.toLocaleString('en-US')
                            : listing.regularPrice.toLocaleString('en-US')}
                        {listing.type === 'rent' && ' / month'}
                    </p>
                    {listing.type !== 'land' && (
                    <div className='text-emerald-700 flex gap-4'>
                        <div className='font-bold text-xs'>
                            {listing.bedrooms > 1
                                ? `${listing.bedrooms} beds `
                                : `${listing.bedrooms} bed `}
                        </div>
                        <div className='font-bold text-xs'>
                            {listing.bathrooms > 1
                                ? `${listing.bathrooms} baths `
                                : `${listing.bathrooms} bath `}
                        </div>
                    </div>
                    )}
                </div>
            </Link>
        </div>
    );
}