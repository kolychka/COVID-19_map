import React from 'react';
import '../css/select-block.css';
import '../css/cases.css';

class Cases extends React.Component { 
    render() {
        let time = "2021-03-14 19:26";
        return (
            <div className="item item__cases">
                <div className="default-block_margin_b">
                    <section className="default-block default-block_margin_b default-block_padding">
                        <h2 className="h2">Global Cases</h2>
                        <p className="p number total-number total-number_padding text_red">119&nbsp;514&nbsp;479</p>
                    </section>
                    <section className="default-block default-block_padding">
                        <h3 className="h3">Cases by Country/Region/Sovereignty</h3>
                        <div className="cases-container">{/* сюда вставлять скроллбар */}
                            <div className="case case_margin case_padding">
                                <span className="number case__number case__number_margin text_red">29&nbsp;399&nbsp;987</span>
                                <span className="case__country">US</span>
                            </div>
                            {/* item-item-item */}
                        </div>
                    </section>
                    <div className="default-block select-block">
                        Country{/* место для выпадающего списка и кнопок навигации */}
                    </div>
                </div>
                <div className="default-block default-block_padding">
                    <label className="label">Last Updated at (M/D/YYYY)</label>
                    <time className="time number" datetime={time}>3/14/2021, 19:26</time>
                </div>
            </div>
        );
    }
}

export default Cases;