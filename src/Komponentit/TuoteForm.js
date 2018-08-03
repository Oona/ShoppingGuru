import React, { Component } from "react";
import './tyyli.css';
import addButton from "./addButton.png";

class TuoteForm extends Component {
  state = { tuotteennimi: "", määrä:"", korissa: false};
  tuoteTallennus = e => {
    this.setState({ tuotteennimi: e.target.value });
  };
  maaraTallennus = e => {
    this.setState({ määrä: e.target.value });
  };
  laheta = e => {
    e.preventDefault();
    this.props.saveTuote(this.state);
    this.setState({ tuotteennimi: "", määrä: "" });
  };
  render() {
    return (
      <div align="center">
        <form onSubmit={this.laheta}>
          <table>
            <tbody>
              <tr>
                <td>Tuote:</td>
                <td>
                  <input className="form-control" value={this.state.tuotteennimi} onChange={this.tuoteTallennus}/>
                </td>
              </tr>
              <tr>
                <td>Määrä:</td>
                <td>
                  <input className="form-control" value={this.state.määrä} onChange={this.maaraTallennus}/>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                </tr>
              <tr>
                <td></td>
                <td >
                  <input  className="button" type="image" src={addButton} alt="Lisää" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default TuoteForm;
