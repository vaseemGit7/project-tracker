import { useEffect, useState } from "react";
import carouselBanner1 from "../assets/banners/carousel-banner-1.jpg";
import carouselBanner2 from "../assets/banners/carousel-banner-2.jpg";
import carouselBanner3 from "../assets/banners/carousel-banner-3.jpg";
import carouselBanner4 from "../assets/banners/carousel-banner-4.jpg";
import carouselBanner5 from "../assets/banners/carousel-banner-5.jpg";
import cardMen from "../assets/cards/card-Men.jpeg";
import cardKids from "../assets/cards/card-Kids.jpeg";
import cardWomen from "../assets/cards/card-Women.jpeg";
import cardBaby from "../assets/cards/card-Baby.jpeg";
import offerCard from "../assets/cards/offer-card.jpg";

const Home = () => {
  const [index, setIndex] = useState(1);

  const bannerTexts = {
    1: "Level up your style with our latest and trending collections",
    2: "Refresh your look and explore our latest styles together.",
    3: "Discover your new favourite looks in our men’s arrivals.",
    4: "Stylish and comfortable with our latest kids collection.",
    5: "Redefine your wardrobe with our must-have styles for women.",
  };

  const bannerImages = {
    1: carouselBanner1,
    2: carouselBanner2,
    3: carouselBanner3,
    4: carouselBanner4,
    5: carouselBanner5,
  };

  const cardImages = {
    0: cardMen,
    1: cardWomen,
    2: cardKids,
    3: cardBaby,
  };

  const carouselDots = [];
  const curratedItems = ["Men", "Women", "Kids", "Baby"];

  for (let i = 1; i <= 5; i++) {
    carouselDots.push(
      <div
        key={i}
        className={`rounded-full bg-neutral-50 ${
          index === i ? "h-3 w-3" : "h-2 w-2 bg-neutral-400"
        }`}
      ></div>
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= 5 ? 1 : prevIndex + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative h-[35rem] w-full rounded"
        style={{
          backgroundImage: `url(${bannerImages[index]}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute z-1 top-0 left-0 h-full w-full bg-neutral-950/40 rounded" />
        <p className="absolute bottom-10 text-center text-6xl text-balance text-neutral-50 font-semibold">
          {bannerTexts[index]}
        </p>
        <div className="absolute z-1 flex bottom-3 right-1/2 items-center gap-1">
          {carouselDots}
        </div>
      </div>
      <div className="p-4 flex justify-evenly">
        <div className="w-1/4 p-4 flex flex-col items-start gap-1 outline outline-1 outline-neutral-300 bg-neutral-200/50">
          <p className="text-lg font-semibold text-neutral-900">
            Quality Products
          </p>
          <p className="text-sm font-normal text-neutral-600">
            Each garment crafted with premium materials and attention to detail.
          </p>
        </div>
        <div className="w-1/4 p-4 flex flex-col items-start gap-1 outline outline-1 outline-neutral-300 bg-neutral-200/50">
          <p className="text-lg font-semibold text-neutral-900">
            New Arrival Everyday
          </p>
          <p className="text-sm font-normal text-neutral-600">
            We introduce fresh, stylish clothing daily to keep your wardrobe
            vibrant and on-trend.
          </p>
        </div>
        <div className="w-1/4 p-4 flex flex-col items-start gap-1 outline outline-1 outline-neutral-300 bg-neutral-200/50">
          <p className="text-lg font-semibold text-neutral-900">
            Fast & Free Shipping
          </p>
          <p className="text-sm font-normal text-neutral-600">
            We ensure your purchases arrive swiftly and safely, straight to your
            doorstep.
          </p>
        </div>
      </div>
      <div className="p-7">
        <p className="text-2xl font-semibold text-center text-neutral-800 mb-10">
          CURRATED PICKS
        </p>
        <div className="flex justify-evenly">
          {curratedItems.map((item, i) => (
            <div
              key={i}
              className="h-72 w-72 flex p-3 rounded justify-center"
              style={{
                backgroundImage: `url(${cardImages[i]})`,
                backgroundSize: "cover",
              }}
            >
              <button className="self-end px-4 py-1 bg-neutral-50/90 text-base font-medium text-neutral-800 rounded">
                Shop {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3  m-4 self-center grid grid-cols-2 rounded">
        <div
          className="rounded-l"
          style={{
            backgroundImage: `url(${offerCard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col gap-2 px-3 py-6 bg-neutral-800 text-neutral-50 rounded-r">
          <p className="text-base font-medium">LIMITED OFFER</p>
          <p className="text-4xl text-balance font-medium">
            40% off on purchases above ₹5000
          </p>
          <button className="w-1/3 px-4 py-1 bg-neutral-50 text-base font-medium text-neutral-800 rounded">
            Grab it now!
          </button>
        </div>
      </div>
      <div className="w-1/2 m-4 self-center flex flex-col items-center gap-4">
        <p className="text-3xl text-center font-semibold text-balance text-neutral-800">
          Subscribe to our newsletter to get updates on our latest collections
        </p>
        <p className="text-base font-medium text-neutral-600">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <div className="flex gap-2">
          <input
            className="border-2 border-neutral-300 px-2 py-1 rounded bg-neutral-200 text-neutral-800"
            type="email"
            placeholder="Enter your email"
          ></input>
          <button className="px-2 py-1 bg-neutral-800 text-neutral-50 font-medium text-base rounded">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-normal text-neutral-500">
          You will be able to unsubscribe at anytime
        </p>
      </div>
    </div>
  );
};

export default Home;
