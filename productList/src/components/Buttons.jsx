import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

function Buttons({ sortByName, setSortByName, sortByPrice, setSortByPrice, setData, data, showDiscontinued, setShowDiscontinued }) {
    const handleSortByName = () => {
        const sortedData = [...data].sort((a, b) => {
            return sortByName === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        setSortByName(sortByName === 'asc' ? 'desc' : 'asc');
        setData(sortedData);
    };

    const handleSortByPrice = () => {
        const sortedData = [...data].sort((a, b) => {
            return sortByPrice === 'asc'
                ? a.unitPrice - b.unitPrice
                : b.unitPrice - a.unitPrice;
        });
        setSortByPrice(sortByPrice === 'asc' ? 'desc' : 'asc');
        setData(sortedData);
    };

    return (
        <ButtonGroup spacing="4" mb="4">
            <Button onClick={handleSortByName}>
                Sort by Name {sortByName === 'asc' ? 'Z To A' : 'A to Z'}
            </Button>
            <Button onClick={handleSortByPrice}>
                Sort by Price {sortByPrice === 'asc' ? 'Max to Min' : 'Min to Max'}
            </Button>
            <Button onClick={() => setShowDiscontinued(!showDiscontinued)}>
                {showDiscontinued ? 'Show Discontinued Products' : 'Show All Products'}
            </Button>
        </ButtonGroup>
    );
}

export default Buttons;
