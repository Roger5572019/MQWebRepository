import React from "react";
import "../../styles/galery.css"

function GaleryItem({ infoGalery }) {
  return (
    <div className="galery-item">
    <div className="galery-item-content">
        <h3 className="galery-item-title">{infoGalery.title}</h3>
        <p className="galery-item-description">{infoGalery.descripcion}</p>
      </div>
      <img
        src={infoGalery.imageUrl || `/placeholder.svg?height=200&width=300`}
        alt={infoGalery.title}
        className="galery-item-image"
      />
    </div>
  );
}

export default GaleryItem;