
import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Recommendation from './Recommendation';



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
        <div className="card mr-0 custom-card">
          <div className="card-body">
                  {Object.keys(this.state.cryptos).map((key) => (
                      <div key={key}>
                        {key}
                        <br/>
                      	<NumberFormat
				value={parseInt(this.state.cryptos[key].USD)}
				displayType={'text'}
				decimalprecision={2} 
				thousandSeparator={true} 
				prefix={' $'} />
                            <Recommendation val2={this.state.cryptos[key]}/>
                            {console.log(typeof (this.state.cryptos[key]+''))}
                            <br/>
                        </div>
                  ))}
          </div>
        </div>
      );
      
    }
  } 
  
  export default Axios;
