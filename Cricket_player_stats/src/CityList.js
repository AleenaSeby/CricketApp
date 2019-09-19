import React, { Component } from 'react';
import CheckBoxList from './CheckBoxList';

export default class CityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAllSelected: false,
            checkList: [
                {
                    name: "city",
                    value: "MS Dhoni",
                    checked: false,
                },
                {
                    name: "city",
                    value: "Virat kohli",
                    checked: false,
                },
                {
                    name: "city",
                    value: "Ravindra Jadeja",
                    checked: false,
                },

            ]
        };
    }

    onCheckBoxChange(checkName, isChecked) {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;

        const checkList = this.state.checkList.map((city, index) => {
            if(isAllChecked || city.value === checkName) {
                return Object.assign({}, city, {
                    checked,
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, city, {
                    checked: false,
                });
            }

            return city;
        });

        let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

        this.setState({
            checkList,
            isAllSelected,
        });

    }

    render() {
        return (
          <div className="city-list">
          <h2>Select Player</h2>
            <CheckBoxList 
                options={this.state.checkList}
                isCheckedAll={this.state.isAllSelected}
                onCheck={this.onCheckBoxChange.bind(this)} 
            />
                        <br/>

            <button>Compare Statistics </button>
          </div>
        );
    }
}