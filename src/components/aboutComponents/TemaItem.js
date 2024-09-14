import React, { useEffect, useState } from "react";

function TemaForm({ tema, temaIndex, handleTemaChange, removeTema }) {
  {
    return (
      <div key={temaIndex}>
        <input
          type="text"
          name="tema"
          value={tema.tema}
          onChange={handleTemaChange}
          placeholder={`Tema ${temaIndex + 1}`}
        />
        {temaIndex > 0 && (
          <button type="button" onClick={removeTema}>
            Eliminar Tema
          </button>
        )}
      </div>
    );
  }
}

export default TemaForm;
