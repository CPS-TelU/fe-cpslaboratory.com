import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3408795307546!2d107.62543651069123!3d-6.969052043002515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sen!2sid!4v1723188691095!5m2!1sen!2sid"
        width="500"
        height="280"
        style={{
          border: "1px solid #BA2025", // Set border size and color
          borderRadius: "20px",
        }}
        className="w-[300px] h-[170px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[210px] xl:w-[500px] lg:h-[250px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default MapEmbed;