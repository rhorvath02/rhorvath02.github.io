import React from "react";

export default function Gallery() {
  // 🔸 List your image filenames here
  const imageNames = [
    "ARB Assembly.jpg",
    "ARB Connector.jpg",
    "cone spacer.jpg",
    "front_hub.jpg",
    "rear_hub.jpg",
    "spring_extender.jpg",
    "Staked Control Arms.jpg",
    "toe_adjuster.jpg",
    "Treated ARB Blade.jpg"
  ];

  const basePath = "machining_gallery/";

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {imageNames.map((name, idx) => (
        <div key={idx} className="overflow-hidden rounded-xl shadow">
          <img
            src={`${basePath}${name}`}
            alt={`Machining ${idx}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
