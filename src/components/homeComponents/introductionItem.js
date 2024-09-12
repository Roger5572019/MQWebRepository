import React from "react";

function IndroductionItem({ info }) {
  return (
    <section className="descripcion-proyecto">
      <h2 className="">{info.title}</h2>
      <p className="">{info.info}</p>
    </section>
  );
}

export default IndroductionItem;
