"use client";
import '@/styles/latestnews.scss';

const newsItems = [
  {
    title: "Watch: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/dc-placeholder.jpg",
  },
  {
    title: "DC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/dc-placeholder.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/dc-placeholder.jpg",
  },
  {
    title: "Marvel Scolded Loki’s Owen Wilson Multiple Times for MCU Spoilers",
    image: "/dc-placeholder.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/dc-placeholder.jpg",
  },
  {
    title: "MLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/dc-placeholder.jpg",
  }
];

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h2 className="latest-news__heading">Latest News</h2>
      <div className="latest-news__list">
        {newsItems.map((item, index) => (
          <div className="latest-news__item" key={index}>
            {item.image && (
              <img src={item.image} alt={item.title} className="latest-news__image" />
            )}
            <p className="latest-news__title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
