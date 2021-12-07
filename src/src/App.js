import React from 'react';
import './App.css';
//const A = 65; // ASCII character code

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 128 }, (n, i) => String.fromCharCode(i)),
      //console.log(letters.findIndex(i)),
    };
    console.log(this.state.letters);
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{ color: 'black', textAlign: 'center' }}>ASCII VALUES</h1>
        </div>
        <br></br>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <table className="table" class="table">
            <thead>
              <tr>
                <th className="table" style={{ padding: 20 }}>
                  Numbers
                </th>
                <th className="table" style={{ padding: 20 }}>
                  Values
                </th>
              </tr>
            </thead>

            <tbody>
              {this.state.letters.map((letter, length) => {
                return (
                  <tr>
                    <td className="table">{length}</td>
                    <td className="table">{letter}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
