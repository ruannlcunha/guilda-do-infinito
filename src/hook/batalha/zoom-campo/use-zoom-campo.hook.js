import { useState } from "react";

export function useZoomCampo() {
  function aumentarZoom(zoom, setZoom) {
    zoom !== 100 ? setZoom(zoom + 25) : null;
  }

  function diminuirZoom(zoom, setZoom) {
    zoom !== 50 ? setZoom(zoom - 25) : null;
  }

  return { aumentarZoom, diminuirZoom };
}
