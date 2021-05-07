import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19 from './images/covid19.jpg';
// alternative way to import all
// import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });

        // console.log(data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        console.log(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid19} alt="covid19"></img>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
                {/* <h1>App</h1> */}
            </div>
            )
    }

}

export default App;
