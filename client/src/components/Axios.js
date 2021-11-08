import React, { Component } from "react";
import axios from "axios";
import Recommendation from "./Recommendation";
import PriceCard from "./PriceCard";

class Axios extends Component {
  constructor(props) {
    super(props);

    // holds response from API
    this.state = {
      cryptos: [],
    };
  }

  componentDidMount() {
    const fsymsList = "BTC,ETH";
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
          fsymsList +
          "&tsyms=USD,EUR"
      )
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos });
        this.props.setOtherExchangeValue("otherbtcusd", cryptos["BTC"].USD);
        this.props.setOtherExchangeValue("otherethusd", cryptos["ETH"].USD);
      });
  }

  render() {
    return (
      <div className="card mr-0 custom-card">
       {/*} <div className="card-body">*/}
          {Object.keys(this.state.cryptos).map((key) => (
            <div key={key}>
              <PriceCard
              header={key==='BTC'?'Bitcoin(BTC)':'Ethereum(ETC)'}
              alt="fireSpot"
              label="(Price in USD)"
              value={parseInt(this.state.cryptos[key].USD)}
              />
              <Recommendation
                value1={this.state.cryptos[key].USD}
                value2={this.props.btceth[key.toLowerCase()]}
              />
              {console.log(typeof (this.state.cryptos[key] + ""))}
              <br />
            </div>
          ))}
        {/*</div>*/}
      </div>
    );
  }
}

export default Axios;
