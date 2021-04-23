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

    numberWithSpaces(num) { 
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } 
    /* Создание пробелов между тройками чисел, начиная с конца строки
    Регулярные выражения работают быстрее.
    Неоптимальные методы:
    1. num.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')); // при создании cases работает на 1-4 милисекунды дольше
    2. parseInt(str).toLocaleString('ru-RU'); // при создании cases работает на 19-20 секунд дольше
    3. var numberFormat = new Intl.NumberFormat('ru-RU', options); // каждое создание экземпляра классса затрачивает большое количество памяти, но со временем выравнивается, хотя затраты всё равно выше
        console.log(numberFormat.format(1234567890));
        или так
        var formatted = a.map(numberFormat.format); // не был опробован
    */

    getCustomSummary(key) {
        let result = {
            "total": this.summary.Global[key],
            "totalWithSpaces": this.numberWithSpaces(this.summary.Global[key]),
            "countries": [],
        }
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