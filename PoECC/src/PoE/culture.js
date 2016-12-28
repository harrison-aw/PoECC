import {MIG, CON, DEX, PER, INT, RES} from './constants';

class PoECulture {
  constructor(name, description, attribute, backgrounds) {
    this.name = name;
    this.description = description;
    this.attribute = attribute;
    this.backgrounds = backgrounds;
  }
}

class PoEBackground {
  constructor(name, description, skills) {
    this.name = name;
    this.description = description;
    this.skills = skills;
  }
}

// Backgrounds

export const Aristocrat = new PoEBackground(
  'Aristocrat',
  "",
  {
    Lore: 2,
  }
);

export const Artist = new PoEBackground(
  'Artist',
  "",
  {
    Lore: 2,
  }
);

export const Clergyman = new PoEBackground(
  'Clergyman',
  "",
  {
    Lore: 2,
  }
);

export const Colonist = new PoEBackground(
  'Colonist',
  "",
  {
    Survival: 2,
  }
);

export const Dissident = new PoEBackground(
  'Dissident',
  "",
  {
    Lore: 1,
    Stealth: 1,
  }
);

export const Drifter = new PoEBackground(
  'Drifter',
  "",
  {
    Mechanics: 1,
    Stealth: 1,
  }
);

export const Explorer = new PoEBackground(
  'Explorer',
  "",
  {
    Lore: 1,
    Survival: 1,
  }
);

export const Hunter = new PoEBackground(
  'Hunter',
  "",
  {
    Suvival: 1,
    Stealth: 1,
  }
);

export const Laborer = new PoEBackground(
  'Laborer',
  "",
  {
    Mechanics: 1,
    Athletics: 1,
  }
);

export const Mercenary = new PoEBackground(
  'Mercenary',
  "",
  {
    Lore: 1,
    Athletics: 1,
  }
);

export const Merchant = new PoEBackground(
  'Merchant',
  "",
  {
    Lore: 1,
    Mechanics: 1,
  }
);

export const Mystic = new PoEBackground(
  'Mystic',
  "",
  {
    Lore: 2,
  }
);

export const Philosopher = new PoEBackground(
  'Philosopher',
  "",
  {
    Lore: 2,
  }
);

export const Raider = new PoEBackground(
  'Raider',
  "",
  {
    Athletics: 1,
    Stealth: 1,
  }
);

export const Scholar = new PoEBackground(
  'Scholar',
  "",
  {
    Lore: 2,
  }
);

export const Scientist = new PoEBackground(
  'Scientist',
  "",
  {
    Lore: 1,
    Mechanics: 1,
  }
);

export const Slave = new PoEBackground(
  'Slave',
  "",
  {
    Athletics: 1,
    Survival: 1,
  }
);

// Cultures

export const Aedyr = new PoECulture(
  'Aedyr',
  "",
  RES,
  [Aristocrat, Clergyman, Colonist, Dissident, Drifter, Hunter, Laborer, Mercenary, Merchant, Slave]
);

export const DeadfireArchipelago = new PoECulture(
  'Deadfire Archipelago',
  "",
  DEX,
  [Aristocrat, Drifter, Explorer, Hunter, Laborer, Mercenary, Merchant, Raider, Slave]
);

export const IxamitlPlains = new PoECulture(
  'Ixamitl Plains',
  "",
  RES,
  [Aristocrat, Dissident, Drifter, Hunter, Laborer, Mercenary, Merchant, Philosopher, Scholar]
);

export const OldVaila = new PoECulture(
  'Old Vaila',
  "",
  INT,
  [Aristocrat, Artist, Colonist, Dissident, Drifter, Hunter, Laborer, Mercenary, Merchant, Slave]
);

export const Rauatai = new PoECulture(
  'Rauatai',
  "",
  CON,
  [Aristocrat, Dissident, Drifter, Hunter, Laborer, Mercenary, Merchant, Scholar, Slave]
);

export const TheLivingLands = new PoECulture(
  'The Living Lands',
  "",
  MIG,
  [Colonist, Drifter, Explorer, Hunter, Laborer, Mercenary, Merchant, Scientist]
);

export const TheWhiteThatWends = new PoECulture(
  'The White That Wends',
  "",
  PER,
  [Aristocrat, Drifter, Explorer, Hunter, Laborer, Merchant, Mystic]
);

export const AllCultures = [Aedyr, DeadfireArchipelago, IxamitlPlains, OldVaila, Rauatai, TheLivingLands, TheWhiteThatWends];