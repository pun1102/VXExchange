import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            btc: [],
            abc: [],
            aig: [],
            bch: [],
            eth: [],
            usdt: []
        };
    }

    interval = null;

    componentDidMount() {
        this.interval = setInterval(this.getData, 60000);
        this.getData();
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getData = () => {
        //btc
        axios
            .get("https://fj20atx1m9.execute-api.us-east-2.amazonaws.com/btc", {
                responseType: "json"
            })
            .then((response) => {
                var temp = JSON.stringify(response.data);

                var x = JSON.parse(JSON.stringify(temp));
                var indHigh = x.indexOf("high");
                let high = x.substr(indHigh + 6, 13);
                var indLow = x.indexOf("low");
                let low = x.substr(indLow + 5, 13);
                var indRate = x.indexOf("rate");
                let rate = x.substr(indRate + 6, 12);
                var indVol = x.indexOf("vol");
                let vol = x.substr(indVol + 5, 16);
                var indChange = x.indexOf("change");
                let change = x.substr(indChange + 8, 10);
                this.setState({
                    btc: {
                        high: high,
                        low: low,
                        rate: rate,
                        vol: vol,
                        change: change
                    }
                });
            });

        // eth
        axios
            .get("https://zvw0lxf1ve.execute-api.us-east-2.amazonaws.com/eth", {
                responseType: "json"
            })
            .then((response) => {
                var temp1 = JSON.stringify(response.data);

                var x1 = JSON.parse(JSON.stringify(temp1));
                var indHigh1 = x1.indexOf("high");
                let high1 = x1.substr(indHigh1 + 6, 12);
                var indLow1 = x1.indexOf("low");
                let low1 = x1.substr(indLow1 + 5, 12);
                var indRate1 = x1.indexOf("rate");
                let rate1 = x1.substr(indRate1 + 6, 12);
                var indVol1 = x1.indexOf("vol");
                let vol1 = x1.substr(indVol1 + 5, 16);
                var indChange1 = x1.indexOf("change");
                let change1 = x1.substr(indChange1 + 8, 10);
                this.setState({
                    eth: {
                        high: high1,
                        low: low1,
                        rate: rate1,
                        vol: vol1,
                        change: change1
                    }
                });
            });

        //bch
        //
        axios
            .get("https://121p0ofk6h.execute-api.us-east-2.amazonaws.com/bch", {
                responseType: "json"
            })
            .then((response) => {
                var temp1 = JSON.stringify(response.data);

                var x1 = JSON.parse(JSON.stringify(temp1));
                var indHigh1 = x1.indexOf("high");
                let high1 = x1.substr(indHigh1 + 6, 12);
                var indLow1 = x1.indexOf("low");
                let low1 = x1.substr(indLow1 + 5, 12);
                var indRate1 = x1.indexOf("rate");
                let rate1 = x1.substr(indRate1 + 6, 12);
                var indVol1 = x1.indexOf("vol");
                let vol1 = x1.substr(indVol1 + 5, 15);
                var indChange1 = x1.indexOf("change");
                let change1 = x1.substr(indChange1 + 8, 10);
                this.setState({
                    bch: {
                        high: high1,
                        low: low1,
                        rate: rate1,
                        vol: vol1,
                        change: change1
                    }
                });
            });

        //USDT
        axios
            .get("https://ckal0kupf3.execute-api.us-east-2.amazonaws.com/usdt", {
                responseType: "json"
            })
            .then((response) => {
                var temp1 = JSON.stringify(response.data);

                var x1 = JSON.parse(JSON.stringify(temp1));
                var indHigh1 = x1.indexOf("high");
                let high1 = x1.substr(indHigh1 + 6, 9);
                var indLow1 = x1.indexOf("low");
                let low1 = x1.substr(indLow1 + 5, 9);
                var indRate1 = x1.indexOf("rate");
                let rate1 = x1.substr(indRate1 + 6, 9);
                var indVol1 = x1.indexOf("vol");
                let vol1 = x1.substr(indVol1 + 5, 15);
                var indChange1 = x1.indexOf("change");
                let change1 = x1.substr(indChange1 + 8, 8);
                this.setState({
                    usdt: {
                        high: high1,
                        low: low1,
                        rate: rate1,
                        vol: vol1,
                        change: change1
                    }
                });
            });

        //agi
        axios
            .get("https://9h4ymxx387.execute-api.us-east-2.amazonaws.com/agi", {
                responseType: "json"
            })
            .then((response) => {
                var temp1 = JSON.stringify(response.data);

                var x1 = JSON.parse(JSON.stringify(temp1));
                var indHigh1 = x1.indexOf("high");
                let high1 = x1.substr(indHigh1 + 6, 8);
                var indLow1 = x1.indexOf("low");
                let low1 = x1.substr(indLow1 + 5, 8);
                var indRate1 = x1.indexOf("rate");
                let rate1 = x1.substr(indRate1 + 6, 8);
                var indVol1 = x1.indexOf("vol");
                let vol1 = x1.substr(indVol1 + 5, 15);
                var indChange1 = x1.indexOf("change");
                let change1 = x1.substr(indChange1 + 8, 7);
                this.setState({
                    aig: {
                        high: high1,
                        low: low1,
                        rate: rate1,
                        vol: vol1,
                        change: change1
                    }
                });
            });
        //abc
        axios
            .get("https://ng9sxy8p8j.execute-api.us-east-2.amazonaws.com/abc", {
                responseType: "json"
            })
            .then((response) => {
                var temp1 = JSON.stringify(response.data);

                var x1 = JSON.parse(JSON.stringify(temp1));
                var indHigh1 = x1.indexOf("high");
                let high1 = x1.substr(indHigh1 + 6, 11);
                var indLow1 = x1.indexOf("low");
                let low1 = x1.substr(indLow1 + 5, 11);
                var indRate1 = x1.indexOf("rate");
                let rate1 = x1.substr(indRate1 + 6, 11);
                var indVol1 = x1.indexOf("vol");
                let vol1 = x1.substr(indVol1 + 5, 9);
                var indChange1 = x1.indexOf("change");
                let change1 = x1.substr(indChange1 + 8, 9);
                this.setState({
                    abc: {
                        high: high1,
                        low: low1,
                        rate: rate1,
                        vol: vol1,
                        change: change1
                    }
                });
            });
    };

    render() {
        let table = {
            columnDefs: [
                { headerName: "Crypto-Currency", field: "currency" },
                { headerName: "Symbol", field: "symbol", sortable: true },
                { headerName: "Rate (Rs.)", field: "rate", sortable: true },
                { headerName: "High (Rs.)", field: "high", sortable: true },
                { headerName: "Low (Rs.)", field: "low", sortable: true },
                { headerName: "Volume", field: "vol", sortable: true },
                { headerName: "Delta", field: "change", sortable: true }
            ],

            rowData: [
                {
                    currency: "Bitcoin",
                    symbol: "BTC",
                    high: this.state.btc.high,
                    low: this.state.btc.low,
                    vol: this.state.btc.vol,
                    rate: this.state.btc.rate,
                    change: this.state.btc.change
                },
                {
                    currency: "Etherum",
                    symbol: "ETH",
                    high: this.state.eth.high,
                    low: this.state.eth.low,
                    vol: this.state.eth.vol,
                    rate: this.state.eth.rate,
                    change: this.state.eth.change
                },
                {
                    currency: "Bitcoin Cash",
                    symbol: "BCH",
                    high: this.state.bch.high,
                    low: this.state.bch.low,
                    vol: this.state.bch.vol,
                    rate: this.state.bch.rate,
                    change: this.state.bch.change
                },
                {
                    currency: "Tether",
                    symbol: "USDT",
                    high: this.state.usdt.high,
                    low: this.state.usdt.low,
                    vol: this.state.usdt.vol,
                    rate: this.state.usdt.rate,
                    change: this.state.usdt.change
                },
                {
                    currency: "SingularityNET",
                    symbol: "AGI",
                    high: this.state.aig.high,
                    low: this.state.aig.low,
                    vol: this.state.aig.vol,
                    rate: this.state.aig.rate,
                    change: this.state.aig.change
                },
                {
                    currency: "AB-Chain",
                    symbol: "ABC",
                    high: this.state.abc.high,
                    low: this.state.abc.low,
                    vol: this.state.abc.vol,
                    rate: this.state.abc.rate,
                    change: this.state.abc.change
                }
            ]
        };
        console.log(this.state);
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: "350px", width: "1300px" }}
            >
                <h2 className="heading">
                    {" "}
                    <span className="flipX">Live </span>
                    Crypto-Currency Exchange Rate
                </h2>{" "}

                <AgGridReact
                    columnDefs={table.columnDefs}
                    rowData={table.rowData}
                ></AgGridReact>
                <ol class="note-list">
                    <li>
                        All the exchange rates are based on Indian National Rupee (INR).
                    </li>
                    <li>
                        Data typically reloads automatically after period of 60 minutes.
                    </li>
                    <li>
                        Data shown here is taken from open source api: &nbsp;
                        <a href="http://api.coinlayer.com/live?access_key=10027564b8637892ec3cf5dccaa1c812&target=INR&expand=1">
                            Click here to have a look!
                        </a>
                    </li>
                </ol>
            </div>
        );
    }
}

export default App;
