import React from "react";

function Settings() {
  return (
    <div>
      <div className="settings">
        <div className="colors"></div>
        <div className="button-settings">
          <button>
            <i className="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
      <div className="button-theme">
        <button>
          <i className="bi bi-moon-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Settings;
