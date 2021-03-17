import React from 'react';
import List from '../list/List';
import './statistics.css';

class Statistics extends React.Component { 
    render() {
        return (
            /* убрать цвет с элементов после отладки */
            <div className="item item__statistics">
                <div className="statistics-container">
                    <div className="statistics-item statistics-item_margin_r statistics-item__deaths">
                        <List name="statistics" color="text_white"></List>
                    </div>
                    <div className="statistics-item statistics-item__tests">
                        <List name="statistics" color="text_blue"></List>
                    </div>
                    <div className="statistics-item statistics-item__graph default-block">
                        Statistics
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;