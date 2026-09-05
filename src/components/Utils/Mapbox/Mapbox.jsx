import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Mapbox.module.scss";

const US_BOUNDS = [
  [-125, 24],
  [-66.5, 50],
];

const Mapbox = ({ selectedLocation }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-86.1581, 39.7684],
      zoom: 10,
      minZoom: 3.5,
      maxBounds: US_BOUNDS,
      renderWorldCopies: false,
    });

    return () => {
      markerRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!selectedLocation || !mapRef.current) return;

    const { lng, lat } = selectedLocation.coordinates;

    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: 16,
      essential: true,
      duration: 1800,
    });

    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    const el = document.createElement("div");
    el.className = styles.mapMarker;

    markerRef.current = new mapboxgl.Marker(el)
      .setLngLat([lng, lat])
      .addTo(mapRef.current);
  }, [selectedLocation]);

  return (
    <div
      style={{ height: "100%" }}
      ref={mapContainerRef}
      className="map-container"
      role="region"
      aria-label="Map showing the selected Fizz Fix location"
    />
  );
};

export default Mapbox;
