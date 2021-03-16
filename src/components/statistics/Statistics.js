import React from 'react';
import '../css/statistics.css';

class Statistics extends React.Component { 
    render() {
        return (
            /* убрать цвет с элементов после отладки */
            <div className="item item__statistics">
                <div className="statistics-container bg-el-1">
                    <div className="statistics-item statistics-item__deaths default-block bg-el-2">
                        Statistics
                    </div>
                    <div className="statistics-item statistics-item__tests default-block bg-el-3">
                        Statistics
                    </div>
                    <div className="statistics-item statistics-item__graph default-block bg-el-4">
                        Statistics
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;