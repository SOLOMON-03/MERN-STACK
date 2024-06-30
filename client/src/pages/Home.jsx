import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/LisitingItem";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [listingImage, setListingImage] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=3");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=3");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=3");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };

    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=all");
        const data = await res.json();
        setListingImage(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
    fetchListings();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-14 px-3 max-w-6xl mx-auto">
        <h1 className="text-emerald-700 font-bold text-3xl lg:text-7xl">
          Welcome <span className="text-emerald-500">Home!</span>
        </h1>
        <div className="text-gray-400 text-sm sm:text-sm lg:text-lg">
          At <span className="font-semibold">PropertyProvision</span>, we
          believe that finding your dream property or optimizing your real
          estate investments should be a seamless and enjoyable experience.
          Whether you're a homebuyer, seller, investor, or someone seeking
          property management services, we're thrilled to welcome you to our
          platform.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm lg:text-lg text-emerald-600 font-bold hover:underline"
        >
          Explore Us....
        </Link>
      </div>
      <div className="mx-auto max-w-2xl">
      <div className="flex gap-3 bg-emerald-400 justify-center items-center p-10 rounded-lg mx-6 mb-6 max-md:flex-col">
        <span className="text-base text-white text-center max-sm:text-sm">
          You can download the app but only for{" "}
          <span className="text-gray-600">Android</span>.
        </span>
        <a
          className="bg-emerald-900 p-3 rounded-br-lg rounded-tl-xl text-sm text-white hover:bg-white transition-all duration-500 ease-in-out hover:text-emerald-950 max-sm:text-xs"
          href="https://expo.dev/artifacts/eas/xgnubKLRvgiwutdHYZyDv2.apk"
          download="PropertyProvision.apk"
        >
          Apk Download
        </a>
      </div>
      </div>
      <Swiper navigation>
        {listingImage &&
          listingImage.length > 0 &&
          listingImage.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[600px] max-sm:h-[400px] max-md:h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
