// components/testimonials.tsx

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const testimonials = [
  {
    name: "Som Kumar",
    rating: 5,
    quote:
      "Teeksha Gupta's designs harmoniously blend with their surroundings. Her work is a testament to how architecture can enhance and complement the natural environment. Our project was a perfect example of this, with her innovative approach creating a space that feels both modern and timeless.",
  },
  {
    name: "Dhiraj Kumar",
    rating: 4,
    quote:
      "Teeksha Gupta has a knack for creating designs that are both contemporary and timeless. Her buildings age gracefully, maintaining their charm and functionality for decades.",
  },
  {
    name: "Prakash Kumar Raj",
    rating: 5,
    quote:
      "Working with Teeksha Gupta was a fantastic experience. Her innovative designs and commitment to sustainability truly set her apart. Our new home is not only beautiful but also energy-efficient. Teeksha’s expertise and professionalism made the entire process seamless.",
  },
  {
    name: "Jai Jindal",
    rating: 5,
    quote:
      "Teeksha Gupta is an exceptional architect. Her designs are not only aesthetically pleasing but also highly functional. Her dedication and passion were evident throughout our renovation project.",
  },
  {
    name: "Nishant Gupta",
    rating: 5,
    quote:
      "Teeksha’s commitment to sustainable architecture is truly commendable. She incorporated eco-friendly materials and energy-efficient solutions into our home, making it both beautiful and environmentally responsible.",
  },
  {
    name: "Akshat Verma",
    rating: 4,
    quote:
      "Teeksha has a unique talent for transforming ordinary spaces into extraordinary environments. Her designs are not only aesthetically pleasing but also enhance the functionality of the space.",
  },
];

const renderStars = (rating : number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <AiFillStar key={i} fill="#fbbf24" />
      ) : (
        <AiOutlineStar key={i} className="text-yellow-400" />
      )
    );
  }
  return stars;
};


const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <section className="relative flex w-full items-center justify-center px-4 py-16 text-center sm:px-8 lg:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ofc_image2.png"
          alt="Testimonial Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-white">
        <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg italic sm:text-xl text-yellow-100">
          Hear directly from those who’ve experienced our designs.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-2 sm:px-4">
              <div className="h-[280px] sm:h-[300px] lg:h-[250px] flex flex-col justify-between rounded-xl bg-white/10 p-6 sm:p-8 text-left shadow-lg backdrop-blur-sm">
                <p className="font-semibold text-white mb-2">— {t.name}</p>
                <div className="flex space-x-1 mb-2">{renderStars(t.rating)}</div>
                <p className="text-white italic line-clamp-6">“{t.quote}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
