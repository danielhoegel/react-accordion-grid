import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../../styling/style-utils';

const ItemWrapper = styled.div`
    margin: 0;
    padding: ${({gap}) => gap};
    width: 100%;
    width: ${({columns}) => 'calc(100% / ' + columns + ')'};
    ${media.tablet`width: ${({columns}) => 'calc(100% / ' + Math.ceil(columns / 2) + ')'};`}
    ${media.phone`width: ${({columns}) => 'calc(100% / ' + Math.floor(columns / 3) + ')'};`}
    overflow: hidden;
    height: ${(props) => `calc(
        ${props.previewHeight + (props.active && props.contentHeight)}px
        + 2 * ${props.gap}
    )`};
    transition: ${({duration}) => duration}ms all ease;
`;

const PreviewWrapper = styled.div``;

const Preview = styled.div`
    background-color: #fff;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: relative;
    color: ${({active}) => active ? '#28c' : 'inherit'};
    user-select: none;

    &:after {
        content: '';
        display: ${({active}) => active ? 'block' : 'none'};
        width: 0;
        height: 0;
        border: 0.5rem solid transparent;
        border-bottom-color: #28c;
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
    }

`;

const Icon = styled.i`
    font-size: 3rem;
    opacity: 0.75;
    margin-bottom: 1rem;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    margin: 0;
`;

const ContentWrapper = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    overflow: hidden;
    height: ${({active, height}) => active ? height + 'px' : 0};
    transition: ${({duration}) => duration}ms all ease;
`;

const Content = styled.div`
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: ${({gap}) => `calc(2 * ${gap}) ${gap} ${gap}`};
    border-top: 2px solid #28c;
`;


class AccordionGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewHeight: 'auto',
            contentHeight: 'auto'
        }
        this.updateHeight = this.updateHeight.bind(this);
    }

    componentDidMount() {
        this.updateHeight();
        window.addEventListener("resize", this.updateHeight);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight);
    }

    updateHeight(e) {
        this.setState({
            previewHeight: 'auto',
            contentHeight: 'auto'
        }, () => {
            this.setState({
                previewHeight: this.previewWrapper.scrollHeight,
                contentHeight: this.contentWrapper.scrollHeight
            });
        });
    }
    
    render() {
        const { data, onClick, active, duration, columns, gap } = this.props;
        return (
            <ItemWrapper
                {...{columns, active, duration, gap}}
                previewHeight={this.state.previewHeight}
                contentHeight={this.state.contentHeight}
            >
                <PreviewWrapper innerRef={el => this.previewWrapper = el}>
                    <Preview {...{onClick, active}}>
                        <Icon className={'fa fa-' + data.icon} />
                        <Title>{data.title}</Title>
                    </Preview>
                </PreviewWrapper>
                <ContentWrapper
                    {...{active, duration}}
                    height={this.state.contentHeight}
                    innerRef={el => this.contentWrapper = el}
                >
                    <Content {...{gap}}>{data.content}</Content>
                </ContentWrapper>
            </ItemWrapper>
        );
    }
};

AccordionGridItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
    duration: PropTypes.number,
    columns: PropTypes.number,
    gap: PropTypes.string,
};

export default AccordionGridItem;
