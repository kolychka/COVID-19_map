import summary from './exampleData.json';

class API {
    constructor(cbs) {
        this.summary = {};
        (async () => {
            this.summary = await this.getSummary();
            cbs.cb();
        })();
    }

    async getData(url = '') {
        const response = await fetch(`https://api.covid19api.com/${url}`);
        return (await response.json());
    }

    numberWithSpaces(num) { // 0.8615     0.8025     0.3515
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } 

    getCustomSummary(key) {
        let result = {
            "total": this.summary.Global[key],
            "totalWithSpaces": this.numberWithSpaces(this.summary.Global[key]),
            "countries": [],
        }
        let t0 = performance.now();
        this.summary.Countries.forEach(country => {
            if (country[key] !== 0) {
                result.countries.push({ 
                    "id": country.ID, 
                    "country": country.Country,
                    "total": country[key],
                    "totalWithSpaces": this.numberWithSpaces(country[key]), 
                });
            }
        });
        let t1 = performance.now();
        console.log("SPEED of numberWithSpaces111: ", (t1 - t0).toFixed(4));
        result.countries.sort((a, b) => b.total - a.total);
        return result;
    }

    getDownloadCountries() {
        return this.countries;
    }

    async getSummary() {
        try {
            const response = await fetch(`https://api.covid19api.com/summary?token=pk.eyJ1IjoiYXJhbWJvbCIsImEiOiJja2lzeTZseW8wODFpMnFtdXlqYjFyd2JnIn0.WMxH4WZLhJ-50-zSMgJL_Q`);
            const result = await response.json();
            // TODO записать result в indexedDB, чтобы сохранилось
            return result;
        } catch (e) {
            // TODO ЕСЛИ запрос сдох, то подтянуть данные из indexedDB
            // TODO ЕСЛИ в inedexDB данных нет, то взять данные из exampleData.json
            return summary;
        }        
    }

    getCountries() {
        return this.getData('countries');
    }

    getWorldTotal() {
        return this.getData('world/total');
    }

    // status = confirmed, recovered, deaths
    getDayOneCountryStatus(country, status='confirmed') {
        return this.getData(`dayone/country/${country}/status/${status}`);
    }

}

export default API;