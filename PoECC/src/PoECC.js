import React, { Component } from 'react';
import * as Races from './PoE/races';
import logo from './logo.svg';
import './PoECC.css';

function PoEButton(props) {
  return (
    <button className="PoEButton" type="button" onClick={() => props.onClick()}>{props.label}</button>
  );
}

class PoENavigation extends Component {
  static buttonLabels() {
      return ['Sex', 'Race', 'Class', 'Attributes', 'Culture', 'Appearance'];
  }
  render() {
    var buttons = [];
    PoENavigation.buttonLabels().forEach((label) => buttons.push(<PoEButton key={label} label={label} onClick={() => this.props.changePanel(label)} />));
    return (
      <div className="PoENavigation">
        {buttons}
      </div>
    );
  }
}

class PoEAppearance extends Component {
  render() {
    return (
      <div className="PoEAppearance">
        Appearance
      </div>
    );
  }
}

class PoECharacterStats extends Component {
  render() {
    return (
      <div className="PoECharacterStats">
        <h2>Character Stats</h2>
        <ul>
          <li>Sex: {this.props.Sex}</li>
          <li>Race: {this.props.Race}</li>
          <li>Subrace: {this.props.Subrace}</li>
        </ul>
      </div>
    );
  }
}

class PoEChooseSex extends Component {
  render() {
    return (
      <div className="PoEChooseSex">
        <PoEButton label='Male' onClick={() => this.props.chooseSex('Male')} />
        <PoEButton label='Female' onClick={() => this.props.chooseSex('Female')} />
      </div>
    );
  }
}

class PoEChooseRace extends Component {
  render() {
    let allraces = [], subraces = []
    Races.AllRaces.forEach((race) => allraces.push(<li key={race.name+'-li'}><PoEButton key={race.name} label={race.name} onClick={() => this.props.changeRace(race)} /></li>));
    Object.keys(this.props.Race.subraces).forEach((sub) => subraces.push(<li key={sub+'-li'}><PoEButton key={sub} label={sub} onClick={() => this.props.changeSubrace(this.props.Race.subraces[sub])} /></li>));
    return (
      <div className="PoEChooseRace">
        <ul className="AllRaces">
          {allraces}
        </ul>
        <ul className="SubRaces">
          {subraces}
        </ul>
      </div>
    );
  }
}

class PoEChooseClass extends Component {
  render() {
    return (
      <div className="PoEChooseClass">
        Placeholder (Class)
      </div>
    );
  }
}

class PoEChooseAttributes extends Component {
  render() {
    return (
      <div className="PoEChooseAttributes">
        Placeholder (Attributes)
      </div>
    );
  }
}

class PoEChooseCulture extends Component {
  render() {
    return (
      <div className="PoEChooseCulture">
        Placeholder (Culture)
      </div>
    );
  }
}

class PoEChooseAppearance extends Component {
  render() {
    return (
      <div className="PoEChooseAppearance">
        Placeholder (Appearance)
      </div>
    );
  }
}

class PoECC extends Component {
  constructor() {
    super();
    this.state = {
      main_panel: 'Race',
      Sex: 'Female',
      Race: Races.Elf,
      Subrace: Races.Pale,
    }
  }
  render() {
    let main_panel = this.state.main_panel, panel_to_render;
    
    if (main_panel === 'Sex') {
        panel_to_render = <PoEChooseSex chooseSex={(newsex) => this.setState({Sex: newsex})} />;
    } else if (main_panel === 'Race') {
        panel_to_render = <PoEChooseRace Race={this.state.Race} changeRace={(newrace) => this.setState({Race: newrace, Subrace: newrace.chooseSubrace()})} changeSubrace={(newsub) => this.setState({Subrace: newsub})} />
    } else if (main_panel === 'Class') {
        panel_to_render = <PoEChooseClass />;
    } else if (main_panel === 'Attributes') {
        panel_to_render = <PoEChooseAttributes />;
    } else if (main_panel === 'Culture') {
        panel_to_render = <PoEChooseCulture />;
    } else {
        panel_to_render = <PoEChooseAppearance />;
    }
    
    return (
      <div className="PoECC">
        <PoEAppearance />
        <PoENavigation changePanel={(panel) => this.setState({main_panel: panel})} />
        {panel_to_render}
        <PoECharacterStats Sex={this.state.Sex} Race={this.state.Race.name} Subrace={this.state.Subrace.name} />
      </div>
    );
  }
}

export default PoECC;
