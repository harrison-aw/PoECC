import React, { Component } from 'react';
import * as Attributes from './PoE/attributes';
import * as Races from './PoE/races';
import * as Classes from './PoE/classes';
import * as Culture from './PoE/culture';
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
    let buttons = PoENavigation.buttonLabels().map((label) => <PoEButton key={label} label={label} onClick={() => this.props.changePanel(label)} />);
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
  buildRaceButton(race) {
    return (
      <li key={race.name+'-li'}>
        <PoEButton key={race.name} label={race.name} onClick={() => this.props.changeRace(race)} />
      </li>
    );
  }
  
  buildSubraceButton(sub) {
    return (
      <li key={sub.name+'-li'}>
        <PoEButton key={sub.name} label={sub.name} onClick={() => this.props.changeSubrace(sub)} />
      </li>
    );
  }
  render() {
    let allraces = Races.AllRaces.map((race) => this.buildRaceButton(race));
    let subraces = this.props.Race.subraces.map((sub) => this.buildSubraceButton(sub));

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
  buildDecreaseHandler(attr) {
    return () => {
      let newattrs = this.props.Attributes;
      let i = attr.index;
      
      if (newattrs[i] > this.props.min_points[i]) {
        newattrs[attr.index] -= 1;
        this.props.changeAttributes(newattrs);
      }
    };
  }
  
  buildIncreaseHandler(attr) {
    return () => {
      let newattrs = this.props.Attributes;
      let i = attr.index;
      
      if (this.props.unallocated_points > 0 && newattrs[i] < this.props.max_points[i]) {
        newattrs[i] += 1;
        this.props.changeAttributes(newattrs);
      }
    };
  }
  
  buildControl(attr) {
    return (
      <li key={attr.name+'-li'}>
        <span key={attr.name+'-span'}>{attr.name}</span>
        <PoEButton key={attr.name+'-<'} label='<' onClick={this.buildDecreaseHandler(attr)} />
        {this.props.Attributes[attr.index]}
        <PoEButton key={attr.name+'->'} label='>' onClick={this.buildIncreaseHandler(attr)} />
      </li>
    );
  }
  
  render() {
    let attribute_controls = Attributes.AllAttributes.map((attr) => this.buildControl(attr));
    
    return (
      <div className="PoEChooseAttributes">
       <ul>
         {attribute_controls}
       </ul>
      </div>
    );
  }
}

class PoEChooseCulture extends Component {
  buildCultureButton(cul) {
    return (
      <li key={cul.name+'-li'}>
        <PoEButton key={cul.name+'-PoEButton'} label={cul.name} onClick={() => this.props.changeCulture(cul)} />
      </li>
    );
  }

  render() {
    let cultures = Culture.AllCultures.map((cul) => this.buildCultureButton(cul));
    return (
      <div className="PoEChooseCulture">
        <ul>
         {cultures}
        </ul>
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
  constructor(props) {
    super(props);
    this.state = {
      main_panel: 'Sex',
      Sex: 'Male',
      Race: Races.Human,
      Subrace: Races.Meadow,
      Class: Classes.Barbarian,
      ClassAbilities: [],
      Attributes: [11,10,10,10,10,12],
      Culture: Culture.Aedyr,
      Background: Culture.Aristocrat,
    };
  }

  get Abilities() {
    return [this.state.Subrace.ability].concat(this.state.Class.starting_abilities, this.state.ClassAbilities);
  }
  
  get AttributesObject() {
    return Attributes.AllAttributes.reduce((ob, attr, i, allattrs) => {
      ob[attr.name] = this.state.Attributes[attr.index];
      return ob;
    }, {});
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
  
  buildSexPanel() {
    return 
  }
  
  updateSex(newsex) {
    this.setState({Sex: newsex})
  }
  
  updateRace(newrace) {
    this.setState({
      Race: newrace, 
      Subrace: newrace.chooseSubrace(),
      Attributes: Attributes.Indexes.map((i) => this.state.Attributes[i] - this.state.Race.attributes[i] + newrace.attributes[i]),
    });
  }
  
  updateSubrace(newsub) {
    this.setState({Subrace: newsub});
  }
  
  updateClass(newclass) {
    this.setState({Class: newclass});
  }
  
  updateAttributes(newattrs) {
    this.setState({Attributes: newattrs});
  }
  
  updateCulture(newcul) {
    this.setState({
      Culture: newcul,
      Background: newcul.backgrounds[0],
      Attributes: Attributes.Indexes.map((i) => this.state.Attributes[i] - (i === this.state.Culture.attribute ? 1 : 0) + (i === newcul.attribute ? 1 : 0)),
    });
  }
  
  updateBackground(newbac) {
    this.setState({Background: newbac});
  }

  render() {
    let main_panel = this.state.main_panel;
    let panel_to_render;
    
    if (main_panel === 'Sex') {
        panel_to_render = <PoEChooseSex chooseSex={(newsex) => this.updateSex(newsex)} />;
    } else if (main_panel === 'Race') {
        panel_to_render = <PoEChooseRace Race={this.state.Race} changeRace={(newrace) => this.updateRace(newrace)} changeSubrace={(newsub) => this.updateSubrace(newsub)} />
    } else if (main_panel === 'Class') {
        panel_to_render = <PoEChooseClass Class={this.state.Class} changeClass={(newclass) => this.updateClass(newclass)} />;
    } else if (main_panel === 'Attributes') {
        panel_to_render = <PoEChooseAttributes 
          Attributes={this.state.Attributes}
          unallocated_points={this.unallocated_points}
          min_points={this.min_points}
          max_points={this.max_points}
          changeAttributes={(newattrs) => this.updateAttributes(newattrs)}
        />;
    } else if (main_panel === 'Culture') {
        panel_to_render = <PoEChooseCulture
          Culture={this.state.Culture}
          Background={this.state.Background}
          changeCulture={(newcul) => this.updateCulture(newcul)}
          changeBackground={(newbac) => this.updateBackground(newbac)}
        />;
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
          Attributes: this.AttributesObject,
          Culture: this.state.Culture.name,
          Background: this.state.Background.name,
        }} />
      </div>
    );
  }
}

export default PoECC;
