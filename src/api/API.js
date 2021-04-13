class API {
    constructor(cbs) {
        this.countries = null;
        (async () => {
            this.countries = await this.getCountries();
            cbs.cb();
        })();
    }

    async getData(url = '') {
        const result = await fetch(`https://api.covid19api.com/${url}`);
        return (await result.json());
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