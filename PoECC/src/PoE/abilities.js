export class PoEAbility {
  constructor(name, description, effects={}) {
    this.name = name;
    this.description = description;
    this.effects = effects;
  }
}

// Racial

export const FightingSpirit = new PoEAbility(
  'Fighting Spirit',
  ""
);

export const ToweringPhysique = new PoEAbility(
  'Towering Physique',
  ""
);

export const ArmedToTheTeeth = new PoEAbility(
  'Armed to the Teeth',
  ""
);

export const HuntersInstinct = new PoEAbility(
  'Hunter\'s Instinct',
  ""
)

export const HaleAndHardy = new PoEAbility(
  'Hale and Hardy',
  ""
);

export const ElementalEndurance = new PoEAbility(
  'Elemental Endurance',
  "The Damage Reduction against Burn and Freeze is increased by 10 for all Pale Elves."
);

export const DistantAdvantage = new PoEAbility(
  'Distant Advantage',
  "Against any enemy that is more than 4m away, Wood Elves gain bonuses to Accuracy, Deflection, and Reflexes."
);

export const MinorThreat = new PoEAbility(
  'Minor Threat',
  ""
);

export const DefiantResolve = new PoEAbility(
  'Defiant Resolve',
  ""
);

export const DeathsUsher = new PoEAbility(
  'Death\'s Usher',
  ""
);

export const BattleForged = new PoEAbility(
  'Battle-Forged',
  ""
);

export const SilverTide = new PoEAbility(
  'Silver Tide',
  ""
);

export const WellspringOfLife = new PoEAbility(
  'Wellspring of Life',
  ""
);

// Barbarian

export const Carnage = new PoEAbility(
  'Carnage',
  "The barbarian's attacks become so forceful as to impact other around the target enemy. For every successful melee attack, the barbarian makes reduced-damage attacks at all other enemies within short distance of the target.",
  {
    'Activation': 'Passive',
    'Area/Target': 'Foe AoE: 1.5 m radius from target',
    'Accuracy': -10,
    'Defended by': 'Deflection',
    'Damage Multiplier': -0.34,
  } 
);

export const Frenzy = new PoEAbility(
  'Frenzy',
  "Sends the barbarian into a frenzied state, granting a Might, Constitution, and Attack Speed bonus but causing a Deflection penalty against incoming attacks. While the barbarian’s Frenzy is active, his or her Endurance and Health are concealed.",
  {
    'Activation': 'Active',
    'Casting Time': 'Average',
    'Area/Target': 'Self',
    'Duration': 12.0,
    'Might': 4,
    'Constitution': 4,
    'Attack Speed Multiplier': 1.33,
    'Deflection': -10,
    'Other': 'Health and Endurance concealed',
  }
);

export const BarbaricYell = new PoEAbility(
  'Barbaric Yell',
  "Lets out a terrifying yell, Frightening enemies in the area of effect.",
  {
    'Activation': 'Active',
    'Per Encounter': 2,
    'Casting Time': 'Average',
    'Area/Target': 'Foe AoE: 5.0 m radius from Caster',
    'Duration': 12.0,
    'Defended by': 'Will',
    'Effects': 'Frightened',
  }
);

// Chanter

export const Chants = new PoEAbility(
  'Phrases/Chants',
  "All chanters can continuously speak chants made up of magical phrases. Phrasces produce passive effects and help build a chanter's power until they can use an invocation."
);

export const Invocations = new PoEAbility(
  'Invocations',
  "Powerful magical effects that chanters can create after they have spoken a required number of phrases through their chants."
);

export const BlessedWasWengridh = new PoEAbility(
  'Blessed Was Wengridh, Quickest of His Tribe',
  "Increases the movement rate and Reflex of all allies in the area of effect.",
  {
    'Activation': 'Chant',
    'Area/Target': 'Friendly Aura',
    'Duration': 4.0,
    'Linger': 2.0,
    'Move Speed': 1.2,
    'Reflex': 6,
  }
);

export const ButRenyDaret = new PoEAbility(
  'But Reny Daret\'s Ghost, He would not Rest',
  "Calls beyond the Shroud and summons a phantom to fight for the party.",
  {
    'Phrases required': 3,
    'Casting Time': 'Average',
    'Range': 10.0,
    'Effects': 'summons a Phantom'
  }
);