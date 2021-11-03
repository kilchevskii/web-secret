import React from "react";

function CardLoader() {
  return (
    <div className="card-loader">
      <svg
        role="img"
        width="245"
        height="395"
        aria-labelledby="loading-aria"
        viewBox="0 0 225 425"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clip-path)"
          style={{ fill: "url(#fill)" }}
        ></rect>
        <defs>
          <clipPath id="clip-path">
            <rect x="69" y="52" rx="0" ry="0" width="0" height="17" />
            <rect x="14" y="0" rx="3" ry="3" width="190" height="245" />
            <rect x="15" y="318" rx="0" ry="0" width="70" height="16" />
            <rect x="15" y="350" rx="6" ry="6" width="90" height="42" />
            <rect x="180" y="358" rx="3" ry="3" width="22" height="22" />
            <rect x="15" y="265" rx="0" ry="0" width="165" height="13" />
            <rect x="15" y="285" rx="0" ry="0" width="70" height="13" />
            <rect x="175" y="326" rx="0" ry="0" width="28" height="6" />
          </clipPath>
          <linearGradient id="fill">
            <stop offset="0.599964" stopColor="#ecebeb" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1.59996" stopColor="#cccccc" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="2.59996" stopColor="#ecebeb" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CardLoader;
