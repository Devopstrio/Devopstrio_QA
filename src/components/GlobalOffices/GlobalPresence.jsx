import React, { useEffect, useRef, useState } from "react";
import { FiMapPin, FiGlobe, FiUsers } from "react-icons/fi";
import "./GlobalPresence.css";

const GlobalPresence = () => {
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Office locations with precise geographic map coordinates
  const locations = [
    {
      name: "London",
      country: "UK",
      region: "Europe",
      type: "Head Office",
      employees: "150+",
      class: "london",
      top: 27.68,
      left: 46.9,
    },
    {
      name: "London",
      country: "uk",
      region: "Europe",
      type: "Corporate Office",
      employees: "50+",
      class: "london",
      top: 28.8,
      left: 47.6,
    },
    {
      name: "Tennessee",
      country: "USA",
      region: "North America",
      type: "Support Office",
      employees: "50+",
      class: "tennessee",
      top: 37.5,
      left: 23.5,
    },
        {
      name: "Bengaluru",
      country: "India",
      region: "India",
      type: "Corporate Office",
      employees: "50+",
      class: "bengaluru",
      top: 51.1,
      left: 68.35
    },
    {
      name: "Chennai",
      country: "India",
      region: "India",
      type: "Development Center",
      employees: "75+",
      class: "chennai",
      top: 50.9,
      left: 69.1,
    },
    {
      name: "Thoothukudi",
      country: "India",
      region: "India",
      type: "Regional Office",
      employees: "150+",
      class: "thoothukudi",
      top: 52.99,
      left: 68.53,
    },
  ];

  // Filter locations based on selected region
  const filteredLocations =
    activeFilter === "All"
      ? locations
      : locations.filter((loc) => loc.region === activeFilter);

  const filters = [
    "All",
    "India",
    "Europe",
    "North America",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Dynamic resizing to ensure sharp lines without blur on high DPI screens
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Provide region highlight glowing dots
    if (activeFilter !== "All") {
      filteredLocations.forEach((loc) => {
        const x = (loc.left / 100) * canvas.width;
        const y = (loc.top / 100) * canvas.height;

        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
        // gradient.addColorStop(0, "rgba(206, 36, 83, 0.4)");
        gradient.addColorStop(1, "rgba(206, 36, 83, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    }

    // Draw solid connection lines between all offices to show global network (REMOVED)
  }, [activeFilter, filteredLocations]);

  // Calculate stats
  const totalOffices = locations.length;
  const uniqueCountries = [...new Set(locations.map((l) => l.country))].length;
  const totalEmployees = locations.reduce(
    (sum, loc) => sum + parseInt(loc.employees),
    0,
  );

  // Map Zoom settings for each region
  const getMapTransform = () => {
    switch(activeFilter) {
      case "India": return { scale: 3.2, origin: "77% 48%" };
      case "Europe": return { scale: 3.2, origin: "55% 22%" };
      case "North America": return { scale: 3.2, origin: "15% 25%" };
      default: return { scale: 1, origin: "center" };
    }
  };

  const mapStyle = getMapTransform();

  return (
    <section className="gp-section">
      {/* ===== Top Stats ===== */}
      <div className="gp-stats">
        <div>
          <h2>{uniqueCountries}+</h2>
          <p>Countries</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Years of Excellence</p>
        </div>
        <div>
          <h2>{totalEmployees}+</h2>
          <p>Talent Pool</p>
        </div>
        <div>
          <h2>1500+</h2>
          <p>Clients</p>
        </div>
      </div>

      {/* ===== Title + Filters ===== */}
      <div className="gp-header">
        <span className="gp-pill">
          <span>Global Presence</span>
        </span>
        <h2>Our Global Presence</h2>

        <div className="gp-filters">
          {filters.map((item, i) => (
            <button
              key={i}
              className={activeFilter === item ? "active" : ""}
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Main Layout ===== */}
      <div className="gp-content">
        {/* Left Card */}
        <div className="gp-info-card">
          <h1>{totalOffices}</h1>
          <h3>Offices</h3>
          <p>
            Across {uniqueCountries}+ Countries with {totalEmployees}+ Global
            Workforce
          </p>

          <div className="gp-stats-breakdown">
            <div className="gp-stat-row">
              <span>
                <FiMapPin /> Total Offices
              </span>
              <strong>{totalOffices}</strong>
            </div>
            <div className="gp-stat-row">
              <span>
                <FiGlobe /> Countries
              </span>
              <strong>{uniqueCountries}+</strong>
            </div>
            <div className="gp-stat-row">
              <span>
                <FiUsers /> Total Employees
              </span>
              <strong>{totalEmployees}+</strong>
            </div>
          </div>

          <div className="gp-legend">
            <div className="gp-legend-item">
              <FiMapPin />
              <span>Physical Office</span>
            </div>
            {/* <div className="gp-legend-item">
              <FiMapPin className="active" />
              <span>Active Filter</span>
            </div> */}
          </div>
        </div>

        {/* Map Area */}
        <div className="gp-map-wrapper zoom-enabled">
          <div 
            className="gp-map-inner"
            style={{
              "--map-scale": mapStyle.scale,
              transform: `scale(${mapStyle.scale})`,
              transformOrigin: mapStyle.origin,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            {/* Normal World Map Background */}
            <div className="gp-map-bg"></div>

            <canvas ref={canvasRef} className="gp-map-canvas" />

            {/* Location Pins with Tooltips */}
            {filteredLocations.map((loc, index) => (
              <div
                key={index}
                className={`gp-pin ${loc.class}`}
                style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
              >
                <FiMapPin className="gp-location-icon" />
                <div className="gp-tooltip">
                  <div className="gp-tooltip-header">
                    <strong>{loc.name}</strong>
                    <span className="gp-tooltip-country">{loc.country}</span>
                  </div>
                  <div className="gp-tooltip-body">
                    <span className="gp-tooltip-type">{loc.type}</span>
                    <span className="gp-tooltip-employees">
                      <FiUsers /> {loc.employees} employees
                    </span>
                  </div>
                  <div className="gp-tooltip-region">{loc.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
