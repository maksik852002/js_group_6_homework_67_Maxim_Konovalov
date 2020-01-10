import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/UI/Button/Button";
import "./Calculator.css";

const nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0"];
const func = ["+", "-", "/", "*"];

class Calculator extends Component {
  componentWillUnmount() {
    this.props.clearAll();
  }

  render() {
    let style = {
      height: "60px",
      width: "77%",
      marginTop: "35px",
      fontSize: "50px"
    };
    this.props.calcValue.length > 8 && (style.fontSize = "20px");
    return (
      <div className="container">
        <div className="calculator">
          <input
            style={style}
            className="text-center"
            defaultValue={this.props.calcValue}
            disabled
          />
          <div className="Keys d-flex">
            <div className="Number-Keys">
              <Button
                click={this.props.clearAll}
                label="C"
                addClass="secondary"
              />
              <Button
                click={this.props.deleteLastValue}
                label="<"
                addClass="secondary"
                style={{ width: "130px" }}
              />
              {nums.map(key => (
                <Button
                  key={key}
                  click={this.props.addNewValue}
                  value={key}
                  label={key}
                  disabled={this.props.disabled}
                  addClass="secondary"
                />
              ))}
            </div>
            <div className="Func-Keys">
              {func.map(key => (
                <Button
                  key={key}
                  click={this.props.addNewSign}
                  value={key}
                  label={key}
                  addClass="secondary"
                />
              ))}
              <Button
                click={this.props.equals}
                label="="
                addClass="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calcValue: state.calcValue,
    isEqual: state.isEqual
  };
};

const mapDispatchTOProps = dispatch => {
  return {
    addNewValue: e => dispatch({ type: "ADD_VALUE", value: e.target.value }),
    addNewSign: e => dispatch({ type: "ADD_SIGN", value: e.target.value }),
    deleteLastValue: () => dispatch({ type: "DEL_LAST_VALUE" }),
    clearAll: () => dispatch({ type: "CLEAR_ALL_VALUE" }),
    equals: () => dispatch({ type: "EQUALS" })
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(Calculator);