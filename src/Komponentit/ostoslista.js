import React, { Component } from "react";

class TuoteForm extends Component {
  state = { tuote: "" };
  tuoteTallennus = e => {
    this.setState({ tuote: e.target.value });
  };
  maaraTallennus = e => {
    this.setState({ maara: e.target.value });
  };
  laheta = e => {
    e.preventDefault();
    this.props.tallennaTuote(this.state);
    this.setState({ tuote: "", maara: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.laheta}>
          <table>
            <tbody>
              <tr>
                <td>Tuote:</td>
                <td>
                  <input
                    value={this.state.tuote}
                    onChange={this.tuoteTallennus}
                  />
                </td>
              </tr>
              <tr>
                <td>Määrä:</td>
                <td>
                  <input
                    value={this.state.maara}
                    onChange={this.maaraTallennus}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" defaultValue="Lisää" />
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
