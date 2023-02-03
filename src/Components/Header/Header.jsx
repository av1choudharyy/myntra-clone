import React from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header() {
  return (
    <div className="container">
      <div>
        <span>
          <b>Shirts For Men & Women</b>
        </span>
        <span style={{ color: "#c0c0c0" }}> - 96009 Items</span>
      </div>
      <div className="flex-row">
        <h3 style={{ width: "25%" }}>FILTERS</h3>
        <div className="flex-row justify">
          <div className="flex-row">
            <div className="flex-row margin-inline">
              Bundles <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </div>
            <div className="flex-row margin-inline">
              Size <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </div>
          </div>
          <div className="flex-row dropdown-border">
            <span style={{ float: "left", width: "30%" }}>Sort By :</span>
            <span
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <b> Recommended </b>
              <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
