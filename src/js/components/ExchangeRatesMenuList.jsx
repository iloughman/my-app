import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export class ExchangeRatesMenuList extends Component {
    constructor() {
        super();
        this.state = {
            title: "The title",
            anchorEl: null,
            rate: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        console.log("props", this.props);
    }

    componentDidUpdate() {
        console.log("props on update", this.props);
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = (el) => {
        this.setState({ anchorEl: null });
        this.setState({ rate: el });
        this.props.setRate(el);
    }

    closeList = () => {
        this.setState({anchorEl: null});
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {this.state.rate.countryCode || "Select a country"}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClick={this.closeList}
                >
                    <MenuList>
                        {this.props.exchangeRates.map((el, index) => {
                            return <MenuItem onClick={() => this.handleClose(el)} key={index}>{el.countryCode}</MenuItem>
                        })}
                    </MenuList>
                </Menu>
            </div>
        );
    }
}

export default ExchangeRatesMenuList;