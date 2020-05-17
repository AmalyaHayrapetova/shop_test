import React from "react";
import "./css/blog.cards.css";

class BlogCards extends React.Component {

  render() {
  return (
    <div className = "BlogCards">
      <section className="bg">
        <h5 className="title">Blog</h5>
        <div className="blog-card">
          <a
            href="https://www.hellofashionblog.com/2018/02/the-1-trick-to-mixing-prints-and-colors.html"
            target="_blank"
          >
            <img
              className="blog-img"
              src="https://www.hellofashionblog.com/wp-content/uploads/2018/02/5-1.jpg"
            />
          </a>
          <div className="text-overlay">
            <h2>Mixing Prints With Fashion Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sodales posuere felis non efficitur. Mauris mollis elit urna, id
              tempus... &nbsp;&nbsp;
              <a href="#" className="read-more">
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className="blog-card">
          <a
            href="https://www.hellofashionblog.com/2018/02/the-1-trick-to-mixing-prints-and-colors.html"
            target="_blank"
          >
            <img
              className="blog-img"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/61384731-337787810220520-7771940379551970971-n-1586464415.jpg?crop=1.00xw:0.502xh;0,0.0977xh&resize=980:*"
            />
          </a>
          <div className="text-overlay">
            <h2>Nail Fashion - Bazzar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sodales posuere felis non efficitur. Mauris mollis elit urna, id
              tempus... &nbsp;&nbsp;
              <a href="#" className="read-more">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <a
            href="https://www.hellofashionblog.com/2018/02/the-1-trick-to-mixing-prints-and-colors.html"
            target="_blank"
          >
            <img
              className="blog-img"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-white-sneakers-index-1586454730.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
            />
          </a>
          <div className="text-overlay">
            <h2>Summer Essentials</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sodales posuere felis non efficitur. Mauris mollis elit urna, id
              tempus... &nbsp;&nbsp;
              <a href="#" className="read-more">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <a
            href="https://www.hellofashionblog.com/2018/02/the-1-trick-to-mixing-prints-and-colors.html"
            target="_blank"
          >
            <img
              className="blog-img"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/051116-beautyfix-lp-1567182388.jpg?crop=1.00xw:0.869xh;0,0.0611xh&resize=980:*"
            />
          </a>
          <div className="text-overlay">
            <h2>Skincare</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sodales posuere felis non efficitur. Mauris mollis elit urna, id
              tempus... &nbsp;&nbsp;
              <a href="#" className="read-more">
                Read More
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
}
export default BlogCards;