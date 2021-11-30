//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import MetaTags from 'react-meta-tags';

/* const vowels = [];

for (let i = 1; i <= 26; i++) {
  let values = i - 1;
  let keys = 64 + i;

  if (values <= 25) {
    vowels.push({ [`${String.fromCharCode(keys)}`]: values });
    console.log(values);
  }
} */

function App() {
  var i;
  for (i = 0; i <= 127; i++) {
    var p = String.fromCharCode(i);
    //console.log(p);
    //document.write(i + ' ' + p + '<br>');
  }

  //as();
  return <div className="wrapper">{p}</div>;
}

export default App;
