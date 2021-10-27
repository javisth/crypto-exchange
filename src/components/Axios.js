
import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';



class Axios extends Component {
    constructor(props) {
      super(props);
  
    // holds response from API
      this.state = {
        cryptos: []
      };
    }

    componentDidMount() {
      const fsymsList = 'BTC,ETH'
      axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + fsymsList + '&tsyms=USD,EUR')
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos});
    });
    }

    render() {
      return (
        <div className="Axios">
                  {Object.keys(this.state.cryptos).map((key) => (
                      <div key={key}>
                        {key}
                      	<NumberFormat 
							              value={parseInt(this.state.cryptos[key].USD)}
							              displayType={'text'}
							              decimalprecision={2} 
						                thousandSeparator={true} 
							              prefix={' $'} />
                      </div>
                  ))}
        </div>
      );
      
    }
  } 
  
  export default Axios;