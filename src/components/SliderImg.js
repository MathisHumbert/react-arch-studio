import React from 'react';
import { sliderData } from '../utils/data';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SliderImg = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex > sliderData.length - 1) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section className="slider-img">
      {sliderData.map((item, itemIndex) => {
        const { id, title, text, img } = item;

        let position = 'nextSlide';
        if (itemIndex === index) {
          position = 'activeSlide';
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === sliderData.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key={id}>
            <img src={img} alt="slider-img" />
            <div className="slider-img__content">
              <h1>{title}</h1>
              <p>{text}</p>
              <Link to="/portfolio" className="button">
                see our portfolio
                <BsArrowRight className="button__arrow" />
              </Link>
            </div>
          </article>
        );
      })}
      <div className="slider-img__buttons">
        {sliderData.map((item, itemIndex) => {
          return (
            <button
              onClick={() => setIndex(itemIndex)}
              data-id={itemIndex}
              className={index === itemIndex ? 'active' : null}
              key={item.id}
            >
              0{itemIndex + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SliderImg;
