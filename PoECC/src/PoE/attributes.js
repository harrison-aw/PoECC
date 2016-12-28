import {MIG, CON, DEX, PER, INT, RES} from './constants';

class PoEAttribute {
  constructor(name, index, description) {
    this.name = name;
    this.index = index;
    this.description = description;
  }
}

class PoEStat {
  constructor(name, is_multiplicative, per_point) {
    this.name = name;
    this.is_multiplicative = is_multiplicative
    this.per_point = per_point;
  }
  calculateValue(attributes) {
    let value = 0;
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        value += (attributes[key] - 10) * this.per_point[key];
      }
    }
    return value;
  }
  toString(stat) {
    let value = String(this.calculateValue(stat)), string;
    if (this.is_multiplicative) {
      string = value + '%';
    } else {
      string = value;
    }
    return string;
  }
}

// Combat Stats

export const Damage = new PoEStat('Damage and Healing', true, {
  MIG: 3,
});

export const Endurance = new PoEStat('Endurance and Health', true, {
  CON: 5,
});

export const ActionSpeed = new PoEStat('Action Speed', true, {
  DEX: 3,
});

export const Interrupt = new PoEStat('Interrupt', false, {
  DEX: 3,
});

export const Accuracy = new PoEStat('Accuracy', false, {
  DEX: 1,
});

export const AreaOfEffect = new PoEStat('Area of Effect', true, {
  INT: 6,
});

export const Duration = new PoEStat('Duration', true, {
  INT: 5,
});

export const Concentration = new PoEStat('Concentration', false, {
  RES: 3,
});


// Defensive Stats

export const Fortitude = new PoEStat('Fortitude', false, {
  MIG: 2,
  CON: 2,
});

export const Reflex = new PoEStat('Reflex', false, {
  DEX: 2,
  PER: 2,
});

export const Will = new PoEStat('Will', false, {
  INT: 2,
  RES: 2,
});

export const Deflection = new PoEStat('Deflection', false, {
  RES: 3,
});


// Attributes

export const Might = new PoEAttribute('Might', MIG, {
  in_game: "Might represents a character's physical and spiritual strength, brute force as well as their ability to channel powerful magic. During interactions, it can be useful for intimidating displays and acts of brute force. In combat, it contributes to both Damage and Healing as well as the Fortitude defense.",
  effects: ['2 to their Fortitude defense', '3% to any Damage and Healing amounts caused by their actions'],
  highly_recommended: ['Barbarian', 'Druid', 'Priest', 'Ranger', 'Rogue', 'Wizard'],
  recommended: ['Cipher', 'Fighter', 'Monk', 'Paladin'],
});

export const Constitution = new PoEAttribute('Constitution', CON, {
  in_game: "Constitution is a combination of the character's overall health and endurance. Although it is not used much in interactions, it is sometimes checked to withstand pain or endure a physically taxing ordeal. In combat, it affects maximum Health and Endurance and contributes to the Fortitude defense.",
  effects: ['2 to their Fortitude defense', '5% to their maximum Endurance and Health points'],
  highly_recommended: ['Barbarian', 'Chanter', 'Fighter', 'Monk'],
  recommended: ['Paladin'],
});

export const Dexterity = new PoEAttribute('Dexterity', DEX, {
  in_game: "Dexterity is an abstraction of a character's hand-eye coordination, balance, and overall grace. In interactions, it can be used for sleight-of-hand and fast reactions. In combat, it affects the character's Action Speed with all attacks, spells, and abilities and contributes to the Reflex defense.",
  effects: ['2 to their Reflex defense', '3% to their Attack Speed'],
  highly_recommended: ['Monk'],
  recommended: ['Barbarian', 'Cipher', 'Priest', 'Ranger', 'Rogue', 'Wizard'],
});

export const Perception = new PoEAttribute('Perception', PER, {
  in_game: "Perception represents a character's senses as well as their instinctive ability to pick up on details. In interactions, it can be used to catch someone in a lie, to make an observant comment about their appearance, or to notice something happening in the background. In combat, it contributes to the accuracy, Reflex defenses and grants a bonus to Interrupt.",
  effects: ['2 to their Reflex defense', '3 to the Interrupt potential of their attacks', '1 to the Accuracy of their attacks'],
  highly_recommended: ['Ranger', 'Rogue'],
  recommended: [],
});

export const Intellect = new PoEAttribute('Intellect', INT, {
  in_game: "Intellect represents a character's logic and reasoning capabilities. In interactions, it can be useful for deduction, sudden realizations, and problem-solving. In combat, it contributes to the Will defense and influences Duration and Areas of Effect for all Abilities and Talents.",
  effects: ['2 to their Will defense', '5% to the Duration of any effect they cause', '6% to the Area of Effect of any effect they cause'],
  highly_recommended: ['Chanter', 'Cipher', 'Druid', 'Priest', 'Wizard'],
  recommended: ['Barbarian', 'Paladin', 'Ranger', 'Rogue'],
});

export const Resolve = new PoEAttribute('Resolve', RES, {
  in_game: "Resolve reflects a character's internal drive, determination, fearlessness, and the emotional intensity they can project to others. It can be useful for mental intimidation, leadership, and convincing performances. In combat, it helps characters maintain Concentration and contributes to the Will and Deflection defenses.",
  effects: ['2 to their Will defense', '1 to their Deflection defense', '3 to their Concentration stat'],
  highly_recommended: ['Fighter', 'Paladin'],
  recommended: ['Chanter', 'Druid', 'Priest'],
});

export const Indexes = [MIG, CON, DEX, PER, INT, RES];
export const AllAttributes = [Might, Constitution, Dexterity, Perception, Intellect, Resolve];