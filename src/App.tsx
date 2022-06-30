import { Button } from './Components/Button';
import './App.scss';
import spinnerImg from './assets/spinner-dark.svg';
import { useState } from 'react';
import { DropDown } from './Components/DropDown';
import { ApiApp } from './Components/ApiApp';

const dropDownContent = [{ title: 'Item1', onClick: () => console.log('click') }, { title: 'Item2' }];

function App() {
  const [btnLoad, setBtnLoad] = useState(false);
  const [targetComponent, setTargetComponent] = useState('App');

  const clickHandler = () => {
    setBtnLoad((v) => !v);
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-value" onClick={() => setTargetComponent('btnExample')}>
          Button
        </div>
        <div className="nav-value" onClick={() => setTargetComponent('drpDownExample')}>
          DropDown
        </div>
        <div className="nav-value" onClick={() => setTargetComponent('App')}>
          App
        </div>
      </div>
      {targetComponent === 'btnExample' && (
        <Button loading={btnLoad} disabled={false} onClick={clickHandler}>
          <img src={spinnerImg} alt="icon" />
          Click me
        </Button>
      )}
      {targetComponent === 'drpDownExample' && (
        <>
          <DropDown trigger="click" content={dropDownContent}>
            <Button>DropDown</Button>
          </DropDown>
          <div>some div</div>
        </>
      )}
      {targetComponent === 'App' && <ApiApp />}
    </div>
  );
}

export default App;
