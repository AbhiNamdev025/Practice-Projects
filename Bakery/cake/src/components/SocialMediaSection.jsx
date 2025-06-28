import React from 'react';
const socialPosts = [
    {
      id: 1,
      img: 'https://t4.ftcdn.net/jpg/02/97/64/91/240_F_297649193_bjzwhI87RkS7WXvXpuJqbFwbLdjMa8G1.jpg',
      alt: 'Chocolate cake',
      link: 'https://www.instagram.com/p/XYZ1',
    },
    {
      id: 2,
      img: 'https://t3.ftcdn.net/jpg/02/67/95/30/240_F_267953032_W7ijdzUKas9zoqahdkbgEU2dna6lM3pj.jpg',
      alt: 'Birthday cake with candles',
      link: 'https://www.instagram.com/p/XYZ2',
    },
    {
      id: 3,
      img: 'https://t3.ftcdn.net/jpg/01/78/06/60/240_F_178066058_NqCDYgyLobiLEI0qzpC2hd6bN4eKhYOv.jpg',
      alt: 'Cupcakes with sprinkles',
      link: 'https://www.instagram.com/p/XYZ3',
    },
    {
      id: 4,
      img: 'https://t3.ftcdn.net/jpg/01/34/31/96/240_F_134319674_YQ0oJlUYlBom0G0qLRLAJ0YPcxUo3peR.jpg',
      alt: 'Colorful macarons',
      link: 'https://www.instagram.com/p/XYZ4',
    },
  ];

const SocialMediaSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Follow Us on Instagram</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          See our latest creations, behind-the-scenes moments, and cake inspiration.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialPosts.map(({ id, img, alt, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={alt} className="w-full h-48 object-cover" />
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
        >
          Visit Our Instagram
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
