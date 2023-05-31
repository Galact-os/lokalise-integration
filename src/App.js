import './App.css';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

const langMasterData = {
  English: 'en_US',
  Russian: 'ru',
  Spanish: 'es'
}

function App() {
  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState("en_US");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    i18n.changeLanguage(value);
    window.pendo.updateOptions({
      visitor: {
        customLang: value
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])


  const getLangOptions = () => {
    return Object.keys(langMasterData).map((key, i)=> <option key={i} value={langMasterData[key]}>{key}</option>)
  }

  return (
    <div className="App">
      <select value={value} onChange={handleChange}>
        {getLangOptions()}
      </select>

      <header className="App-header">
        <label style={{ 'marginTop': '10vh'}}> ← {t('dp_explr_stage_teachSubHeadingLabel')}</label>
        <div style={{ display: 'flex' }}>
          <label id='curriculumLabel' style={{'margin': '33px'}}>{t('dp_explr_action_curriculumDrpDwnBtn')}</label>
          <label id='levelLabel' style={{'margin': '33px'}}>{t('dp_explr_action_levelDrpDwnBtn')}</label>
          <label id='moduleLabel' style={{'margin': '33px'}}>{t('dp_explr_action_moduleButton')}</label>
          <button id='upNextBtn' style={{'margin': '33px', 'height': '40px', 'width': '24vh', 'fontSize':'smaller'}}>{t('dp_all_flow_upNext')}</button>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{'margin': '33px'}}></div>
          <div style={{'margin': '33px', 'maxWidth':'71vh'}}>
            <p style={{'textAlign': 'justify', 'fontSize':'medium'}}><b>Properties of Operations to Make Easier Problems</b><br/>
            In module 3, use the unit of ten to make easier problems by decomposing addends and grouping them in any order. They intuitively apply the associative and commutative properties and then learn how they can use strategies such as counting on, making ten, taking from ten, subtracting to get to a ten, and relating operations to break down larger addition and subtraction problems.</p>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
