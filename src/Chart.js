import React, { useEffect, useState } from 'react';
import ContributionsGrid from './ContributionsGrid';
import moment from 'moment';
import './Chart.css';

const Chart = () => {
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        fetch('https://dpg.gg/test/calendar.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const dataArray = Object.entries(data);
                setContributions(dataArray);
            })
            .catch((error) => console.error('Ошибка при получении данных:', error));
    }, []);

    const renderContributionsGrid = () => {
        if (!Array.isArray(contributions)) {
            console.error('Данные с сервера не являются массивом:', contributions);
            return null;
        }

        const grid = Array.from({ length: 7 }, () => Array(51).fill(0));

        contributions?.forEach((item) => {
            const date = moment(item.date, 'YYYY-MM-DD').toDate();
            const column = moment().diff(date, 'weeks');
            const row = date.getDay();

            if (column >= 0 && column < 51 && row >= 0 && row < 7) {
                grid[row][column] = item.number;
            }
        });

        return grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((contributionsCount, columnIndex) => (
                    <ContributionsGrid
                        key={columnIndex}
                        contributionsCount={contributionsCount}
                    />
                ))}
            </div>
        ));
    };

    return (
        <div className="chart-container">
            {contributions.length === 0 ? <div>Жазиии</div> : renderContributionsGrid()}
        </div>
    );
};

export default Chart;
