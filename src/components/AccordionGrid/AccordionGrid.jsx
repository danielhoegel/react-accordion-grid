import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AccordionGridItem from './AccordionGridItem';


const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: ${({gap}) => '-' + gap};
`;


class AccordionGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: null,
        };
    }

    tooggleActiveItem = (index) => {
        this.setState({
            activeItem: this.state.activeItem === index
                ? null
                : index
        });
    }

    render() {
        const { data, ...itemProps } = this.props;
        return (
            <GridContainer gap={itemProps.gap}>
                {data.map((item, index) => (
                    <AccordionGridItem
                        key={index}
                        data={item}
                        onClick={() => this.tooggleActiveItem(index)}
                        active={this.state.activeItem === index}
                        {...itemProps}
                    />
                ))}
            </GridContainer>
        );
    }
}

AccordionGrid.propTypes = {
    data: PropTypes.array.isRequired,
    duration: PropTypes.number,
    gap: PropTypes.string,
    columns: PropTypes.number,
};

export default AccordionGrid;
