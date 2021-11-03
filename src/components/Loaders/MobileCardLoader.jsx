import React from "react";

function MobileCardLoader() {
  return (
    <div className="card-loader">
      <svg
        role="img"
        width="385"
        height="130"
        aria-labelledby="loading-aria"
        viewBox="0 0 350 130"
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
            <rect x="3" y="0" rx="10" ry="10" width="125" height="125" />
            <rect x="15" y="260" rx="0" ry="0" width="190" height="10" />
            <rect x="15" y="315" rx="0" ry="0" width="70" height="22" />
            <rect x="15" y="360" rx="10" ry="10" width="90" height="35" />
            <rect x="200" y="363" rx="6" ry="6" width="30" height="30" />
            <rect x="15" y="275" rx="0" ry="0" width="189" height="10" />
            <rect x="15" y="290" rx="0" ry="0" width="189" height="10" />
            <rect x="140" y="0" rx="0" ry="0" width="240" height="12" />
            <rect x="140" y="20" rx="0" ry="0" width="140" height="12" />
            <rect x="140" y="60" rx="0" ry="0" width="90" height="16" />
            <rect x="320" y="67" rx="0" ry="0" width="30" height="9" />
            <rect x="141" y="95" rx="6" ry="6" width="75" height="30" />
            <rect x="325" y="102" rx="100" ry="100" width="23" height="23" />
          </clipPath>
          <linearGradient id="fill">
            <stop offset="0.599964" stopColor="#cccccc" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1.59996" stopColor="#ededed" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="2.59996" stopColor="#cccccc" stopOpacity="1">
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

export default MobileCardLoader;
