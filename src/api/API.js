class API {
    constructor(cbs) {
        // this.countries = null;
        this.summary = {};
        (async () => {
            // this.countries = await this.getCountries();
            this.summary = await this.getSummary();
            cbs.cb();
        })();
    }

    async getData(url = '') {
        const response = await fetch(`https://api.covid19api.com/${url}`);
        return (await response.json());
    }

    /*async summary() {
        const result = await fetch('https://api.covid19api.com/summary', {
            headers: {
                'X-Access-Token': 'some token'
            }
        });
        return (await result.json())
    }

    default() {
        return this.getData();
    }

    totalCountry(country) {
        return this.getData(`total/country/${country}`);
    }*/

    getDownloadCountries() {
        return this.countries;
    }

    getSummary() {
        return this.getData('summary?token=pk.eyJ1IjoiYXJhbWJvbCIsImEiOiJja2lzeTZseW8wODFpMnFtdXlqYjFyd2JnIn0.WMxH4WZLhJ-50-zSMgJL_Q');
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