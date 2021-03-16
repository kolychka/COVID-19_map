import React from 'react';
import '../css/list.css';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    addCategory() {} // добавить категорию

    render() {
        const section = { // будет заменено на входящий объект. Этот нужен для отладки
            name: "cases",
            color: "text_red",
            title: "Global Cases",
            totalNumber: "119&nbsp;514&nbsp;479", // общее количество
            subTitle: "Cases by Country/Region/Sovereignty",
            data: [
                {
                    number: "29&nbsp;399&nbsp;987",
                    category: "cases", // "cases" "recovered" "deaths" "tests"
                    country: "US", // "US" "US" "US" "US"
                    region: "California", // "California" "Arizona" "Illinois" "Florida"
                    sovereignty: "Los Angeles" // "Los Angeles" "Maricopa" "Cook" "Miami-Dade"
                },
                {
                    number: "29&nbsp;399&nbsp;987",
                    category: "cases", // "cases" "recovered" "deaths" "tests"
                    country: "US", // "US" "US" "US" "US"
                    region: "Arizona", // "California" "Arizona" "Illinois" "Florida"
                    sovereignty: "Maricopa" // "Los Angeles" "Maricopa" "Cook" "Miami-Dade"
                }
            ]
        };
        return (
            <div>
                <div className="default-block_margin_b">
                    <section 
                        className={"default-block " + 
                            (section.name === "cases" ? "default-block_margin_b" : "")
                            + " default-block_padding"}>
                        <h2 className="h2">{section.title}</h2>
                        <p className={"p number total-number total-number_padding " + section.color}>{section.totalNumber}</p>
                    </section>
                    <section 
                        className={"default-block default-block_padding " + 
                            (section.name !== "cases" ? "default-block_border-top_none" : "")}>
                        <h3 className={"h3" + (section.name === "cases" ? "" : " display_none") }>{section.subTitle}</h3>
                        <div className="list-container">{/* сюда вставлять скроллбар */}
                            <div className={"list list_margin list_padding"}>
                                <span className={"number list__number list__number_margin " + section.color}>29&nbsp;399&nbsp;987</span>
                                <span className="list__country">US</span>
                            </div>
                            {/* item-item-item */}
                        </div>
                    </section>
                    <div className="default-block default-block_border-top_none select-block">
                        select-box{/* место для выпадающего списка и кнопок навигации */}
                    </div>
                </div>
            </div>
        );
    }
}

export default List;