import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./css/aboutUs.css";


class StoresCarousel extends React.Component {
  render() {
    return (
      <Carousel
        slidesPerPage={10}
        slidesPerScroll={3}
        animationSpeed={2000}
        autoPlay={3000}
        offset={10}
        itemWidth={200}
        stopAutoPlayOnHover
        centered
        infinite
      >
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2013/02/gap-logo-vector.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2013/06/zara-retailer-vector-logo.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2012/10/skechers-vector-logo.png"
        />
        <img
          className="image"
          src="https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/102800/136708/Mango-Logo-Decal-Sticker__13329.1510914009.jpg?c=2&imbypass=on"
        />
        <img
          className="image"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/12653845.5482f56cf02b9.png"
        />
        <img
          className="image"
          src="https://i.pinimg.com/originals/bd/e0/0d/bde00daa8c64f80919d19fef1029d017.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2012/12/accessorize-vector-logo.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2011/08/polo-ralph-lauren-logo-gold.jpg"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2012/12/marks-spencer-logo-vector.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2013/07/armani-exchange-eps-vector-logo.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2012/10/tissot-vector-logo.png"
        />
        <img
          className="image"
          src="data:image/png;base64,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"
        />
        <img
          className="image"
          src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/22050044_894914004020729_2367884785448084831_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQmnuK1h4lwEFy2_GF6VhtPIvJ8N4zqShz5NIC23NXQR6dlDyjKlrNfNVotYeRWY9WY&_nc_ht=scontent.fevn1-4.fna&oh=ec7a46dfe2acf3ec5220cf44ec27b1cc&oe=5EE68F8B"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2013/03/mac-cosmetics-vector-logo.png"
        />
        <img
          className="image"
          src="https://logoeps.com/wp-content/uploads/2013/03/nike-vector-logo.png"
        />
      </Carousel>
    );
  }
}

export default StoresCarousel;