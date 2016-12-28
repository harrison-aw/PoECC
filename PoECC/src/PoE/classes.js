import * as Abilities from './abilities';

class PoEClass {
  constructor(name, description, skill_bonus, stats_per_level, abilities, other={}) {
    this.name = name;
    this.description = description;
    this.skill_bonus = skill_bonus;
    this.stats_per_level = stats_per_level;
    this.abilities = abilities;
    this.other = other;
  }
  
  get starting_abilities() {
    return this.abilities[0];
  }
}

export class PoEAbility {
  constructor(name, description, effects={}) {
    this.name = name;
    this.description = description;
    this.effects = effects;
  }
}

export const Barbarian = new PoEClass(
  'Barbarian',
  "Brutes. Madmen. Berserkers. Though city-dwelling people often use the term \"barbarian\" with a dose of disrespect, these rural warriors are respected by their communities for their ferocity and fearsome presence on the battlefield. Barbarians have a special, almost religious role in some cultures, but in many places, the undisciplined, fearless style of the barbarian is simply how warriors conduct themselves.",
  {'Athletics': 2, 'Survival': 1},
  {'Endurance': 16, 'Health': 6, 'Deflection': 15, 'Accuracy': 25},
  [
    [Abilities.Carnage],
    [Abilities.Frenzy, Abilities.BarbaricYell]
  ]
);

export const Chanter = new PoEClass(
  'Chanter',
  "In every culture across Eora, there are chanters. Many historians consider chanters to be the most ancient workers of magic, their hallowed phrases stirring the collective memory of wayward souls around them, compelling them to generate magical effects in a kind of \"reenactment.\" In some societies, chanters form organized groups of storytellers and researchers, but in most parts of the world they are just a time-honored part of local folk traditions.",
  {'Lore': 2, 'Mechanic': 1},
  {'Endurance': 12, 'Health': 4, 'Deflection': 25, 'Accuracy': 25},
  [
    [Abilities.Chants, Abilities.Invocations]
  ],
  {
    'Phrases': [
      [Abilities.BlessedWasWengridh]
    ],
    'Invocations': [
      [Abilities.ButRenyDaret]
    ]
  }
);

export const AllClasses = [Barbarian, Chanter];