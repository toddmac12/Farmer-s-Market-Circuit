import React from "react";
import Market from "./Market";

const MarketControl = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <Market />
        </div>
      </div>
    </React.Fragment>
  );
}

function MarketList(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <MarketControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MarketList;