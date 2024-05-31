export function handleZoomToUser(map) {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    if (map) {
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 18,
      });
    }
  });
}
