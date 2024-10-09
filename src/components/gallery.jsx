import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Салбарууд</h2>
          <p>
            Монгол улсын 21 аймгийн Facebook хаяг
          </p>
        </div>
        <div className="row">
        <div className="portfolio-items">
              {props.data
                 ? props.data.map((d, i) => (
                   <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                <a href={d.url} target="_blank" rel="noopener noreferrer">
                  <Image
                   title={d.title}
                    smallImage={d.smallImage}
                    className="custom-image"
            />
          </a>
        </div>
      ))
          : "Loading..."}
             </div>

        </div>
      </div>
    </div>
  );
};
