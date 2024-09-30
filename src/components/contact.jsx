
import React from "react";

export const Contact = (props) => {
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '50%', paddingBottom: "70px"}}>
              <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A2%D1%83%D1%81%D0%B3%D0%B0%D0%B0%D1%80%20%D1%82%D0%BE%D0%B3%D1%82%D0%BD%D0%BE%D0%BB%D1%8B%D0%BD%20%D0%BE%D1%80%D0%B4%D0%BE%D0%BD+(%D0%9E%D1%84%D1%84%D0%B8%D1%81)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
              ></iframe>
          </div>
        </div>



      <div id="contact">
        
        <div className="container">
          
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Бидэнтэй Холбогдох</h3>
              <p> <i className="fa fa-map-marker"></i>
                
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>                
                  <i className="fa fa-phone"></i> 
                {" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                  <i className="fa fa-envelope-o"></i> 
                {" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            

          </div>
          
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
          Мэдээлэл хуулбарлах хориотой. Copyright © 2024. Социал Демократ Монголын Эмэгтэйчүүдийн Холбоо (SD WOMEN)
          </p>
        </div>
      </div>
    </div>
  );
};
