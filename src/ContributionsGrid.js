import React from 'react';

const ContributionsGrid = ({ contributionsCount }) => {
    const getColor = (count) => {
        if (count === 0) return 'white';
        if (count >= 30) return 'green';
        if (count >= 20) return 'blue';
        if (count >= 10) return 'purple';
        return 'gray';
    };

    const color = getColor(contributionsCount);

    return <div className="grid-cell" style={{ backgroundColor: color }} />;
};

export default ContributionsGrid;
