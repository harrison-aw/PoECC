import React, { Component } from 'react';
import * as Attributes from './PoE/attributes';
import * as Races from './PoE/races';
import * as Classes from './PoE/classes';
import './PoECC.css';

function PoEButton(props) {
  return (
    <button className="PoEButton" type="button" onClick={() => props.onClick()}>{props.label}</button>
  );
}

function PoEList(props) {
  let items;
  
  if (Array.isArray(props.items)) {
    items = props.items.map((val) => {
      if (typeof val === 'object') {
        return <li key={val+'-li'}><PoEList key={val+'-PoEList'} items={val} /></li>;
      }
      return <li key={val+'-li'}>{val}</li>;
    });
  } else if (typeof props.items === 'object') {
    items = Object.keys(props.items).map((k) => {
      let val = props.items[k];
      if (typeof val === 'object') {
        return <li key={k+'-li'}>{k}: <PoEList key={k+'-PoEList'} items={val} /></li>;
      }
      return <li key={k+'-li'}>{k}: {val}</li>;
    });
  }
  return (
    <ul className="PoEList">
      {items}
    </ul>
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
        <PoEList items={this.props.stats} />
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
    let allraces = Races.AllRaces.map((race) => (
      <li key={race.name+'-li'}>
        <PoEButton key={race.name} label={race.name} onClick={() => this.props.changeRace(race)} />
      </li>
    ));
    
    let subraces = this.props.Race.subraces.map((sub) => (
      <li key={sub.name+'-li'}>
        <PoEButton key={sub.name} label={sub.name} onClick={() => this.props.changeSubrace(sub)} />
      </li>
    ));

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
    let classes = Classes.AllClasses.map((cls) => (
      <li key={cls.name+'-li'}>
        <PoEButton key={cls.name+'-PoEButton'} label={cls.name} onClick={() => this.props.changeClass(cls)} />
      </li>
    ));
    return (
      <div className="PoEChooseClass">
        <ul>
          {classes}
        </ul>
      </div>
    );
  }
}

class PoEChooseAttributes extends Component {
  render() {
    let attribute_controls = Attributes.AllAttributes.map((attr) => (
      <li key={attr.name+'-li'}>
        {attr.name}
        <PoEButton key={attr.name+'-<'} label='<' onClick={() => {
          let newattrs = this.props.Attributes;
          if (newattrs[attr.index] > this.props.min_points[attr.index]) {
            newattrs[attr.index] -= 1;
            this.props.changeAttributes(newattrs);
          }
        }} />
        {this.props.Attributes[attr.index]}
        <PoEButton key={attr.name+'->'} label='>' onClick={() => {
          let newattrs = this.props.Attributes;
          if (this.props.unallocated_points > 0 && newattrs[attr.index] < this.props.max_points[attr.index]) {
            newattrs[attr.index] += 1;
            this.props.changeAttributes(newattrs);
          }
        }} />
      </li>
    ));
    return (
      <div className="PoEChooseAttributes">
       {attribute_controls}
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
      Sex: 'Male',
      Race: Races.Human,
      Subrace: Races.Meadow,
      Class: Classes.Barbarian,
      ClassAbilities: [],
      Attributes: [11,10,10,10,10,11],
    };
  }

  get Abilities() {
    return [this.state.Subrace.ability].concat(this.state.Class.starting_abilities, this.state.ClassAbilities);
  }

  get unallocated_points() {
    let race_attr = this.state.Race.attributes;
    return this.state.Attributes.reduce((pts, attr, i, allattrs) => pts + 10 - attr + race_attr[i], 15);
  }
  
  get min_points() {
    let race_attr = this.state.Race.attributes;
    return Attributes.Indexes.map((i) => 3 + race_attr[i]);
  }
  
  get max_points() {
    let race_attr = this.state.Race.attributes;
    return Attributes.Indexes.map((i) => 18 + race_attr[i]);
  }

  render() {
    let main_panel = this.state.main_panel;
    let panel_to_render;
    
    if (main_panel === 'Sex') {
        panel_to_render = <PoEChooseSex 
          chooseSex={(newsex) => this.setState({Sex: newsex})}
        />;
    } else if (main_panel === 'Race') {
        panel_to_render = <PoEChooseRace
          Race={this.state.Race}
          changeRace={(newrace) => this.setState({
            Race: newrace, 
            Subrace: newrace.chooseSubrace(),
            Attributes: Attributes.Indexes.map((i) => this.state.Attributes[i] - this.state.Race.attributes[i] + newrace.attributes[i]),
          })}
          changeSubrace={(newsub) => this.setState({Subrace: newsub})}
        />
    } else if (main_panel === 'Class') {
        panel_to_render = <PoEChooseClass
          Class={this.state.Class}
          changeClass={(newclass) => this.setState({Class: newclass})}
        />;
    } else if (main_panel === 'Attributes') {
        panel_to_render = <PoEChooseAttributes 
          Attributes={this.state.Attributes}
          unallocated_points={this.unallocated_points}
          min_points={this.min_points}
          max_points={this.max_points}
          changeAttributes={(newattrs) => this.setState({Attributes: newattrs})}
        />;
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
        <PoECharacterStats stats={{
          Sex: this.state.Sex,
          Race: this.state.Race.name,
          Subrace: this.state.Subrace.name,
          Class: this.state.Class.name,
          Abilities: this.Abilities.map((ab) => ab.name),
          Attributes: Attributes.AllAttributes.reduce((ob, attr, i, allattrs) => {
            ob[attr.name] = this.state.Attributes[attr.index];
            return ob;
          }, {}),        
        }} />
      </div>
    );
  }
}

export default PoECC;
