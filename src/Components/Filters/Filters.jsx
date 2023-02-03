import "./Filters.css";
import React from "react";

function Filters() {
  return (
    <div
      style={{
        borderRight: "0.5px solid #c0c0c0",
      }}
    >
      {/* <div className="divider-horizontal"></div> */}
      <div className="filters bold">
        <div>
          <input type="radio" /> Men
        </div>
        <div>
          <input type="radio" /> Women
        </div>
        <div>
          <input type="radio" /> Boys
        </div>
        <div>
          <input type="radio" /> Girls
        </div>
      </div>
      <div className="divider-horizontal"></div>
      <h4>CATEGORIES</h4>
      <div className="filters">
        <div>
          <input type="checkbox" /> Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            {" "}
            (95621)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Sleep Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (379)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Dog Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (9)
          </span>
        </div>
      </div>
      <div className="divider-horizontal"></div>
      <h4>BRAND</h4>
      <div className="filters">
        <div>
          <input type="checkbox" /> Parx{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3628)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Blackberrys{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3178)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Park Avenues
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3114)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Roadster{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3034)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Louis Philippe{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2361)
          </span>
        </div>
        <div>
          <input type="checkbox" /> Peter England{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2334)
          </span>
        </div>
        <div>
          <input type="checkbox" /> ColorPlus{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2166)
          </span>
        </div>
        <div>
          <input type="checkbox" /> United Colors Of Benetton{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2138)
          </span>
        </div>
        <span id="extra">+736 more</span>
      </div>
      <div className="divider-horizontal"></div>
    </div>
  );
}

export default Filters;
