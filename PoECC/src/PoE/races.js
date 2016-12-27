import {MIG, CON, DEX, PER, INT, RES} from './constants';

class PoERace {
  constructor(name, description, stats, subraces, shape=null) {
    this.name = name;
    this.description = description;
    this.stats = stats;
    this.subraces = subraces;
    this.shape = shape;
  }
  get subrace_names() {
    return Object.keys(this.subraces);
  }
  chooseSubrace() {
    return this.subraces[Object.keys(this.subraces)[1]];
  }
}

class PoESubRace {
  constructor(name, description, ability) {
    this.name = name;
    this.description = description;
    this.ability = ability;
  }
}

// Human

export const Meadow = new PoESubRace(
  'Meadow Folk',
  "The most common humans in the Dyrwood, the Meadow Folk (or Thyrtan) have lived in that area for almost 2,000 years. Meadow Folk traditionally live at the edges of Elven forests working the open plains - hence their name. Most humans in the Dyrwood are Thyrtan.",
  {'Fighting Spirit': ""}
);

export const Ocean = new PoESubRace(
  'Ocean Folk',
  "Ocean Folk (Calbandra) originated near the Equator on the other side of the globe and are currently the most widespread human group in that region, but they have also migrated to the far reaches of the world. Ocean Folk are the dominant culture in the Vailian Republics, and are also common in the Dyrwood.",
  {'Fighting Spirit': ""}
);

export const Savannah = new PoESubRace(
  'Savannah Folk',
  "Savannah Folk (Natlan) come originally from just south of the Equator and, with the exception of some groups that migrated north, have remained in the same location for over ten thousand years. The name Natlan literally means \"original.\" While quite common in Readceras, Savannah Folk are not usually seen in the Dyrwood and the Vailian Republics.",
  {'Fighting Spirit': ""}
);

export const Human = new PoERace(
  'Human',
  "Humans (commonly called \"folk\") are the most common race in the Dyrwood, the Aedyr Empire, Old Vailia, and the Vailian Republics. Though not as large as the towering aumaua, humans are known for their strength and willpower.",
  {[MIG]: 1, [RES]: 1},
  {'Meadow Folk': Meadow, 'Ocean Folk': Ocean, 'Savannah Folk': Savannah}
);

// Aumaua

export const Coastal = new PoESubRace(
  'Coastal Aumaua',
  "Viewed as a warlike race, the Coastal Aumaua live in a mainland region along the coasts of the northern hemisphere - lands they conquered by pushing Thyrtan (meadow folk), Natlan (savannah folk), and orlan communities out. Their culture is more centralized and urban than their island cousins, though both groups are involved in seafaring. Coastal Aumaua are very rare in the Dyrwood, but those that do make the journey usually do so as mercenaries, bodyguards, or soldiers.",
  {'Towering Physique': ""}
);

export const Island = new PoESubRace(
  'Island Aumaua',
  "Island Aumaua originated in the Deadfire Archipelago a thousand miles south of the Vailian Republics. While physiologically similar to their coastal cousins, the coloration of Island Aumaua is starkly different - brown and yellow, contrasting the Coastal's blue and green. Though still uncommon in the Dyrwood and surrounding environments, Island Aumaua are more commonly encountered there than Coastal Aumaua, who are quite rare. When encountered around the Dyrwood, they are often laborers, fishermen, or sailors.",
  {'Armed to the Teeth': ""}
);

export const Aumaua = new PoERace(
  'Aumaua',
  "The mighty Aumaua are the largest of the kith races and are commonly found in or near oceans. Though not truly aquatic, they have an affinity for water and many of their civilizations, such as Rauatai, are based on naval dominance. They are known for their unparalleled strength.",
  {[MIG]: 2},
  {'Coastal Aumaua': Coastal, 'Island Aumaua': Island}
);

// Dwarf

export const Boreal = new PoESubRace(
  'Savannah Folk',
  "Most Boreal Dwarves (Enutanik) live in the remote southern island of Naasitaq, where they share the rocky tundra and snow-covered forests with migratory pale Elves and the coast-hugging ships of aumaua. Like their northern cousins, Enutanik share an instinctive love of exploration. Boreal Dwarves are somewhat common in the Vailian Republics but seldom encountered in the Dyrwood.",
  {'Hunter\'s Instinct': ""}
);

export const Mountain = new PoESubRace(
  'Mountain Dwarf',
  "Mountain Dwarves (Aptapo) originated on the continent to the east of the Dyrwood and have spread through the area several times. Unlike the similarly diminutive Orlans, who are frequently subjugated, the Aptapo have always directly fought back threats posed by larger kith and opted to fortify their residences rather than move on. Mountain dwarves are common in the Vailian Republics but not seen as often in the Dyrwood and Readceras.",
  {'Hale and Hardy': ""}
);

export const Dwarf = new PoERace(
  'Dwarf',
  "By virtue of land covered and number of colonies settled, dwarves are the most well-traveled race in the world. They are commonly found in the Dyrwood, the Vailian Republics, and almost any colonized land. Dwarves are known for their great strength and tenacity.",
  {[MIG]: 2, [CON]: 1, [DEX]: -1},
  {'Boreal Dwarf': Boreal, 'Mountain Dwarf': Mountain}
);

// Elf

export const Pale = new PoESubRace(
  'Pale Elf',
  "It is unclear exactly how long ago the Pale Elves (Glamfellen) came to the southern polar regions of the world, but they have lived there for at least 12,000 years based on their continuous contact with Aumaua traders. They appear to be among the most stationary ethnic groups in the known world, migrating within the polar region but seldom venturing far north. They are rare in all northern lands and most people consider them exotic (if they have seen one at all).",
  {'Elemental Endurance': "The Damage Reduction against Burn and Freeze is increased by 10 for all Pale Elves."}
);

export const Wood = new PoESubRace(
  'Wood Elf',
  "Wood Elves (Sceltrfolc) trace their beginnings far north of present-day Aedyr and have migrated south throughout the forests of the continent, now covering it all the way south across the Equator. They are also believed to have migrated across the sea to Eir Glanfath. While physiologically identical to one another, Wood Elves from Aedyr are culturally different from those in Eir Glanfath and consider themselves wholly different groups.",
  {'Distant Advantage': "Against any enemy that is more than 4m away, Wood Elves gain bonuses to Accuracy, Deflection, and Reflexes."}
);

export const Elf = new PoERace(
  'Elf',
  "Elves are the dominant race in Eir Glanfath and The White that Wends and are extremely common in the Dyrwood and Aedyr. Elves are known for their speed and intelligence as well as a commonly isolationist nature.",
  {[DEX]: 1, [PER]: 1},
  {'Pale Elf': Pale, 'Wood Elf': Wood}
);

// Orlan

export const Hearth = new PoESubRace(
  'Hearth Orlan',
  "Hearth Orlans are often found as slaves in Readceras and the Vailian Republics. One of the treaty terms between the Dyrwood and the people of Eir Glanfath was the liberation of orlan slaves and while this has been honored, many Hearth Orlans continue to live in the Dyrwood as indentured servants.",
  {'Minor Threat': ""}
);

export const Wild = new PoESubRace(
  'Wild Orlan',
  "Wild Orlans are the \"original\" Orlans who lived in the deepest forests and jungles between the tropics. While they have only been significantly separated from Hearth Orlans for a thousand years, a few genetic differences have appeared rapidly, most notably a lack of facial hair in the Hearth Orlan branch. Wild Orlans are common in the deep reaches of Eir Glanfath. Unlike their Hearth Orlan brethren, they are not often seen in the Dyrwood, Readceras, or the Vailian Republics.",
  {'Defiant Resolve': ""}
);

export const Orlan = new PoERace(
  'Orlan',
  "Orlans are the smallest of the kith races, though many cultures don't consider them to be civilized at all. Also notable for their large ears, two-toned skin, and hirsute bodies, Orlans are commonly found in Eir Glanfath, the Ixamitl Plains, and parts of the Dyrwood. They are known for their mental intensity and quickness.",
  {[PER]: 2, [RES]: 1, [MIG]: -1},
  {'Hearth Orlan': Hearth, 'Wild Orland': Wild}
);

// Godlike

export const Death = new PoESubRace(
  'Death Godlike',
  "Death Godlike are the most distrusted of their kind. Strange growths cover their eyes - or, in some cases, entire face - giving them a sinister appearance. The growths are transparent for the Godlike but opaque from the outside, hiding their features. Death Godlike are commonly killed at birth because many cultures consider them to be harbingers of doom.",
  {'Death\'s Usher': ""}
);

export const Fire = new PoESubRace(
  'Fire Godlike',
  "The bodies of Fire Godlike often resemble hot metal, burnt wood, or stone, with harmless flames that erupt from the cracks in their skin. Fire Godlike are objects of both reverence and fear in the Deadfire Archipelago. Many locals believe they have the power to awaken volcanos - or that killing one will cause a volcano to awaken. In the Dyrwood, Fire Godlike are often seen as a sign of the blessing of Magran, goddess of war and fire.",
  {'Battle-Forge': ""}
);

export const Moon = new PoESubRace(
  'Moon Godlike',
  "Moon Godlike are the most tolerated of the godlike. While their skin tone and a large moon-like growth on their foreheads may be strange to some, their appearances are generally considered more palatable by the other kith. Sailors have many beliefs about Moon Godlike and their propensity to bring luck, though there is little agreement as to what kind of luck they tend to bring.",
  {'Silver Tide': ""}
);

export const Nature = new PoESubRace(
  'Nature Godlike',
  "Nature Godlike appear to be a fusion of human and animal features, often covered by plants, moss, or fungi. This has led to the common stigma that they are diseased, and many are killed at birth because of it. Many druidic orders have a keen interest in Nature Godlike because of their general curiosity as to how souls occupy animals, plants, and stones.",
  {'Wellspring of Life': ""}
);

export const Godlike = new PoERace(
  'Godlike',
  "The godlike are children of the kith (\"civilized\" races) who have been blessed with physical aspects associated with the gods (though some do not consider it a blessing). These aspects may take many forms and often come with mystical powers. Aberrant head shapes are typical, and godlike are unable to wear protective headgear as it is near-impossible to find anything that fits. Because of their unusual nature and their inability to reproduce, godlike are often viewed with fear and wonder.",
  {[DEX]: 1, [INT]: 1},
  {'Death': Death, 'Fire': Fire, 'Moon': Moon, 'Nature': Nature},
  ['Human', 'Aumaua', 'Dwarf', 'Elf', 'Orlan']
);

export const AllRaces = [Human, Aumaua, Dwarf, Elf, Orlan, Godlike];