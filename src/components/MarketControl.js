import React from 'react';
import ProduceList from './ProduceList';
import MarketList from './MarketList';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceListVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      produceListVisibleOnPage: !prevState.produceListVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.produceListVisibleOnPage) {
      currentlyVisibleState = <ProduceList />;
      buttonText = "Return to Market List";
    } else {
      currentlyVisibleState = <MarketList />;
      buttonText = "Seasonal Produce Lists";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default MarketControl;