import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/UI/Button/Button";
import "./CombinationLock.css";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

class CombinationLock extends Component {
  componentWillUnmount() {
    this.props.deleteLastNumber();
  }

  render() {
    let bg = "";
    let style = { height: "60px", width: "74%", marginTop: "35px" };
    let type = "password";
    this.props.codeValue.length > 0 && (style.fontSize = "50px");
    this.props.succsess &&
      (bg = "bg-success") &&
      (style.fontSize = "18px") &&
      (type = "text");
    this.props.fail &&
      (bg = "bg-danger") &&
      (style.fontSize = "18px") &&
      (type = "text");
    return (
      <div className="container">
        <div className="combinationLock">
          <input
            placeholder="ENTER CODE"
            style={style}
            type={type}
            className={`text-center ${bg}`}
            defaultValue={this.props.codeValue}
            disabled
          />
          <div className="Button-Keys">
            {keys.map(key => (
              <Button
                key={key}
                click={this.props.addNewNumber}
                value={key}
                label={key}
                disabled={this.props.disabled}
                addClass="secondary"
              />
            ))}
            <div className="Function-Keys">
              <Button
                click={this.props.deleteLastNumber}
                label="<"
                addClass="secondary"
                disabled={this.props.codeValue.length > 0 ? false : true}
              />
              <Button
                click={this.props.checkEnteredNumber}
                label="E"
                disabled={
                  this.props.codeValue.length < 4
                    ? !this.props.disabled
                    : this.props.entDisabled
                }
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
    codeValue: state.codeValue,
    disabled: state.disabled,
    entDisabled: state.entDisabled,
    succsess: state.succsess,
    fail: state.fail
  };
};

const mapDispatchTOProps = dispatch => {
  return {
    addNewNumber: e => dispatch({ type: "ADD_NUMBER", value: e.target.value }),
    deleteLastNumber: () => dispatch({ type: "DEL_NUMBER" }),
    checkEnteredNumber: () =>
      dispatch({
        type: "CHECK_NUMBER",
        succsess: "ACCESS GRANTED!",
        fail: "FAILURE!"
      })
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(CombinationLock);