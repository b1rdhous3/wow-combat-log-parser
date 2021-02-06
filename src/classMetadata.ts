import { CombatUnitClass } from "./types";

export enum SpellTag {
  Control = "Control",
  Offensive = "Offensive",
  Defensive = "Defensive",
}

export interface IClassSpellMetadata {
  spellId: string;
  name: string;
  tags: SpellTag[];
}

export interface IClassMetadata {
  unitClass: CombatUnitClass;
  icon: string;
  blizNumber: number;
  abilities: IClassSpellMetadata[];
}

const Warrior = {
  unitClass: CombatUnitClass.Warrior,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_warrior.jpg",
  blizNumber: 1,
  abilities: [
    { spellId: "100", name: "Charge", tags: [] },
    { spellId: "198758", name: "Intercept", tags: [] },
    { spellId: "1719", name: "Recklessness", tags: [] },
    { spellId: "6544", name: "Heroic Leap", tags: [] },
    { spellId: "6552", name: "Pummel", tags: [] },
    { spellId: "18499", name: "Berserker Rage", tags: [] },
    { spellId: "23920", name: "Spell Reflection", tags: [SpellTag.Defensive] },
    {
      spellId: "213915",
      name: "Mass Spell Reflection",
      tags: [SpellTag.Defensive],
    },
    {
      spellId: "216890",
      name: "Spell Reflection (Arms, Fury)",
      tags: [SpellTag.Defensive],
    },
    { spellId: "46968", name: "Shockwave", tags: [SpellTag.Control] },
    { spellId: "107570", name: "Storm Bolt", tags: [SpellTag.Control] },
    { spellId: "107574", name: "Avatar", tags: [SpellTag.Offensive] },
    { spellId: "236077", name: "Disarm", tags: [] },
    { spellId: "236236", name: "Disarm (Protection)", tags: [] },
    // -- Arms
    { spellId: "5246", name: "Intimidating Shout", tags: [SpellTag.Control] },
    { spellId: "97462", name: "Rallying Cry", tags: [SpellTag.Defensive] },
    { spellId: "118038", name: "Die by the Sword", tags: [SpellTag.Defensive] },
    { spellId: "167105", name: "Colossus Smash", tags: [] },
    { spellId: "262161", name: "Warbreaker", tags: [SpellTag.Offensive] },
    { spellId: "197690", name: "Defensive Stance", tags: [] },
    { spellId: "198817", name: "Sharpen Blade", tags: [] },
    {
      spellId: "227847",
      name: "Bladestorm (Arms)",
      tags: [SpellTag.Offensive],
    },
    { spellId: "46924", name: "Bladestorm (Fury)", tags: [SpellTag.Offensive] },
    { spellId: "152277", name: "Ravager", tags: [] },
    { spellId: "236273", name: "Duel", tags: [] },
    // -- Fury
    { spellId: "184364", name: "Enraged Regeneration", tags: [] },
    { spellId: "205545", name: "Odyn's Fury", tags: [] },
    // -- Protection
    { spellId: "871", name: "Shield Wall", tags: [] },
    { spellId: "1160", name: "Demoralizing Shout", tags: [] },
    { spellId: "12975", name: "Last Stand", tags: [] },
    { spellId: "118000", name: "Dragon Roar", tags: [] },
    { spellId: "198304", name: "Intercept", tags: [] },
    { spellId: "206572", name: "Dragon Charge", tags: [] },
    { spellId: "213871", name: "Bodyguard", tags: [] },
    { spellId: "228920", name: "Ravager", tags: [] },
    // -- PvP
    {
      spellId: "235941",
      name: "Master and Commander",
      tags: [SpellTag.Defensive],
    },
    {
      spellId: "236320",
      name: "War Banner",
      tags: [SpellTag.Defensive],
    },
  ],
};

const Paladin = {
  unitClass: CombatUnitClass.Paladin,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_paladin.jpg",
  blizNumber: 2,
  abilities: [
    { spellId: "633", name: "Lay on Hands", tags: [SpellTag.Defensive] },
    { spellId: "642", name: "Divine Shield", tags: [SpellTag.Defensive] },
    { spellId: "853", name: "Hammer of Justice", tags: [SpellTag.Control] },
    {
      spellId: "1022",
      name: "Blessing of Protection",
      tags: [SpellTag.Defensive],
    },
    { spellId: "204018", name: "Blessing of Spellwarding", tags: [] },
    { spellId: "1044", name: "Blessing of Freedom", tags: [] },
    { spellId: "20066", name: "Repentance", tags: [SpellTag.Control] },
    { spellId: "31884", name: "Avenging Wrath", tags: [SpellTag.Offensive] },
    {
      spellId: "31842",
      name: "Avenging Wrath (Holy)",
      tags: [SpellTag.Offensive],
    },
    { spellId: "216331", name: "Avenging Crusader", tags: [] },
    { spellId: "224668", name: "Crusade", tags: [] },
    { spellId: "231895", name: "Crusade", tags: [] },
    { spellId: "115750", name: "Blinding Light", tags: [SpellTag.Control] },
    // -- Holy
    { spellId: "498", name: "Divine Protection", tags: [SpellTag.Defensive] },
    {
      spellId: "6940",
      name: "Blessing of Sacrifice",
      tags: [SpellTag.Defensive],
    },
    { spellId: "31821", name: "Aura Mastery", tags: [] },
    { spellId: "105809", name: "Holy Avenger", tags: [] },
    { spellId: "114158", name: "Light's Hammer", tags: [] },
    { spellId: "200652", name: "Tyr's Deliverance", tags: [] },
    { spellId: "210294", name: "Divine Favor", tags: [SpellTag.Defensive] },
    { spellId: "214202", name: "Rule of Law", tags: [] },
    // -- Protection
    { spellId: "31850", name: "Ardent Defender", tags: [] },
    { spellId: "31935", name: "Avenger's Shield", tags: [] },
    {
      spellId: "86659",
      name: "Guardian of Ancient Kings",
      tags: [SpellTag.Defensive],
    },
    {
      spellId: "228049",
      name: "Guardian of the Forgotten Queen",
      tags: [SpellTag.Defensive],
    },
    { spellId: "96231", name: "Rebuke", tags: [] },
    { spellId: "152262", name: "Seraphim", tags: [] },
    { spellId: "190784", name: "Divine Steed", tags: [] },
    { spellId: "209202", name: "Eye of Tyr", tags: [] },
    { spellId: "215652", name: "Shield of Virtue", tags: [] },
    // -- Retribution
    { spellId: "184662", name: "Shield of Vengeance", tags: [] },
    { spellId: "204939", name: "Hammer of Reckoning", tags: [] },
    { spellId: "205191", name: "Eye for an Eye", tags: [] },
    { spellId: "205273", name: "Wake of Ashes", tags: [] },
    { spellId: "210220", name: "Holy Wrath", tags: [] },
    { spellId: "210256", name: "Blessing of Sanctuary", tags: [] },
    // -- PvP
    {
      spellId: "199452",
      name: "Ultimate Sacrifice",
      tags: [SpellTag.Defensive],
    },
  ],
};

const Hunter = {
  unitClass: CombatUnitClass.Hunter,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_hunter.jpg",
  blizNumber: 3,
  abilities: [
    { spellId: "136", name: "Mend Pet", tags: [] },
    { spellId: "1543", name: "Flare", tags: [] },
    { spellId: "5384", name: "Feign Death", tags: [SpellTag.Defensive] },
    { spellId: "53480", name: "Roar of Sacrifice", tags: [SpellTag.Defensive] },
    {
      spellId: "109304",
      name: "Exhilaration (Beast Mastery, Survival)",
      tags: [SpellTag.Defensive],
    },
    {
      spellId: "131894",
      name: "A Murder of Crows (Beast Mastery, Marksmanship)",
      tags: [],
    },
    { spellId: "206505", name: "A Murder of Crows (Survival)", tags: [] },
    { spellId: "186257", name: "Aspect of the Cheetah", tags: [] },
    {
      spellId: "186265",
      name: "Aspect of the Turtle",
      tags: [SpellTag.Defensive],
    },
    { spellId: "187650", name: "Freezing Trap", tags: [SpellTag.Control] },
    { spellId: "202914", name: "Spider Sting", tags: [] },
    { spellId: "209997", name: "Play Dead", tags: [SpellTag.Defensive] },
    // -- Beast Mastery
    { spellId: "781", name: "Disengage", tags: [] },
    { spellId: "19386", name: "Wyvern Sting", tags: [SpellTag.Control] },
    { spellId: "19574", name: "Bestial Wrath", tags: [] },
    { spellId: "19577", name: "Intimidation", tags: [SpellTag.Control] },
    { spellId: "109248", name: "Binding Shot", tags: [] },
    { spellId: "147362", name: "Counter Shot", tags: [] },
    { spellId: "193530", name: "Aspect of the Wild", tags: [] },
    { spellId: "194386", name: "Volley", tags: [] },
    { spellId: "201430", name: "Stampede", tags: [] },
    { spellId: "207068", name: "Titan's Thunder", tags: [] },
    { spellId: "208652", name: "Dire Beast: Hawk", tags: [] },
    // -- Marksmanship
    { spellId: "34477", name: "Misdirection", tags: [] },
    { spellId: "186387", name: "Bursting Shot", tags: [] },
    { spellId: "199483", name: "Camouflage", tags: [] },
    { spellId: "204147", name: "Windburst", tags: [] },
    { spellId: "206817", name: "Sentinel", tags: [] },
    { spellId: "209789", name: "Freezing Arrow", tags: [] },
    { spellId: "213691", name: "Scatter Shot", tags: [SpellTag.Control] },
    // -- Survival
    { spellId: "53271", name: "Master's Call", tags: [] },
    { spellId: "186289", name: "Aspect of the Eagle", tags: [] },
    { spellId: "187698", name: "Tar Trap", tags: [] },
    { spellId: "187707", name: "Muzzle", tags: [] },
    { spellId: "190925", name: "Harpoon", tags: [] },
    { spellId: "191241", name: "Sticky Bomb", tags: [] },
    { spellId: "191433", name: "Explosive Trap", tags: [] },
    { spellId: "194407", name: "Spitting Cobra", tags: [] },
    { spellId: "201078", name: "Snake Hunter", tags: [] },
    { spellId: "203415", name: "Fury of the Eagle", tags: [] },
    { spellId: "205691", name: "Dire Beast: Basilisk", tags: [] },
    { spellId: "212640", name: "Mending Bandage", tags: [] },
    { spellId: "266779", name: "Coordinated Assault", tags: [] },
    // -- PvP
    { spellId: "212638", name: "Tracker's Net", tags: [SpellTag.Control] },
  ],
};

const Rogue = {
  unitClass: CombatUnitClass.Rogue,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_rogue.jpg",
  blizNumber: 4,
  abilities: [
    { spellId: "6770", name: "Sap", tags: [SpellTag.Control] },
    { spellId: "1833", name: "Cheap Shot", tags: [SpellTag.Control] },
    { spellId: "1725", name: "Distract", tags: [] },
    { spellId: "1766", name: "Kick", tags: [] },
    { spellId: "1856", name: "Vanish", tags: [SpellTag.Defensive] },
    { spellId: "2983", name: "Sprint", tags: [] },
    { spellId: "31224", name: "Cloak of Shadows", tags: [SpellTag.Defensive] },
    { spellId: "57934", name: "Tricks of the Trade", tags: [] },
    { spellId: "137619", name: "Marked for Death", tags: [] },
    { spellId: "152150", name: "Death from Above", tags: [] },
    // -- Assassination
    { spellId: "408", name: "Kidney Shot", tags: [SpellTag.Control] },
    { spellId: "703", name: "Garrote", tags: [] },
    { spellId: "5277", name: "Evasion", tags: [SpellTag.Defensive] },
    { spellId: "36554", name: "Shadowstep", tags: [] },
    { spellId: "79140", name: "Vendetta", tags: [SpellTag.Offensive] },
    { spellId: "192759", name: "Kingsbane", tags: [] },
    { spellId: "200806", name: "Exsanguinate", tags: [] },
    { spellId: "206328", name: "Shiv", tags: [] },
    // -- Outlaw
    { spellId: "1776", name: "Gouge", tags: [SpellTag.Control] },
    { spellId: "2094", name: "Blind", tags: [SpellTag.Control] },
    { spellId: "199743", name: "Parley", tags: [] },
    { spellId: "13750", name: "Adrenaline Rush", tags: [SpellTag.Offensive] },
    { spellId: "51690", name: "Killing Spree", tags: [SpellTag.Offensive] },
    // --{ spellId: "185767", name: "Cannonball Barrage", tags: [] },
    { spellId: "195457", name: "Grappling Hook", tags: [] },
    { spellId: "198529", name: "Plunder Armor", tags: [] },
    { spellId: "199754", name: "Riposte", tags: [] },
    { spellId: "199804", name: "Between the Eyes", tags: [] },
    { spellId: "202665", name: "Curse of the Dreadblades", tags: [] },
    { spellId: "207777", name: "Dismantle", tags: [] },
    // -- Subtlety
    { spellId: "121471", name: "Shadow Blades", tags: [SpellTag.Offensive] },
    { spellId: "185313", name: "Shadow Dance", tags: [SpellTag.Offensive] },
    { spellId: "207736", name: "Shadowy Duel", tags: [SpellTag.Offensive] },
    { spellId: "209782", name: "Goremaw's Bite", tags: [] },
    { spellId: "212182", name: "Smoke Bomb", tags: [SpellTag.Control] },
    { spellId: "213981", name: "Cold Blood", tags: [SpellTag.Offensive] },
  ],
};

const Priest = {
  unitClass: CombatUnitClass.Priest,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_priest.jpg",
  blizNumber: 5,
  abilities: [
    { spellId: "586", name: "Fade", tags: [] },
    { spellId: "32375", name: "Mass Dispel", tags: [] },
    { spellId: "605", name: "Mind Control", tags: [SpellTag.Control] },
    // -- Discipline
    { spellId: "8122", name: "Psychic Scream", tags: [SpellTag.Control] },
    {
      spellId: "10060",
      name: "Power Infusion",
      tags: [SpellTag.Defensive, SpellTag.Offensive],
    },
    { spellId: "33206", name: "Pain Suppression", tags: [SpellTag.Defensive] },
    { spellId: "34433", name: "Shadowfiend", tags: [] },
    { spellId: "123040", name: "Mindbender (Discipline)", tags: [] },
    { spellId: "200174", name: "Mindbender (Shadow)", tags: [] },
    { spellId: "47536", name: "Rapture", tags: [SpellTag.Defensive] },
    {
      spellId: "62618",
      name: "Power Word: Barrier",
      tags: [SpellTag.Defensive],
    },
    { spellId: "73325", name: "Leap of Faith", tags: [] },
    { spellId: "197862", name: "Archangel", tags: [] },
    { spellId: "197871", name: "Dark Archangel", tags: [SpellTag.Offensive] },
    { spellId: "204263", name: "Shining Force", tags: [] },
    { spellId: "305498", name: "Premonition", tags: [] },
    // -- Holy
    { spellId: "19236", name: "Desperate Prayer", tags: [SpellTag.Defensive] },
    { spellId: "47788", name: "Guardian Spirit", tags: [] },
    { spellId: "64843", name: "Divine Hymn", tags: [] },
    { spellId: "64901", name: "Symbol of Hope", tags: [] },
    { spellId: "196762", name: "Inner Focus", tags: [] },
    { spellId: "197268", name: "Ray of Hope", tags: [] },
    { spellId: "200183", name: "Apotheosis", tags: [SpellTag.Defensive] },
    { spellId: "213610", name: "Holy Ward", tags: [] },
    { spellId: "215769", name: "Spirit of Redemption", tags: [] },
    // -- Shadow
    { spellId: "15286", name: "Vampiric Embrace", tags: [] },
    { spellId: "15487", name: "Silence", tags: [] },
    { spellId: "32379", name: "Shadow Word: Death", tags: [] },
    { spellId: "47585", name: "Dispersion", tags: [SpellTag.Defensive] },
    { spellId: "64044", name: "Psychic Horror", tags: [SpellTag.Control] },
    { spellId: "108968", name: "Void Shift", tags: [] },
    { spellId: "193223", name: "Surrender to Madness", tags: [] },
    { spellId: "205065", name: "Void Torrent", tags: [] },
    { spellId: "205369", name: "Mind Bomb", tags: [] },
    { spellId: "211522", name: "Psyfiend", tags: [] },
    // -- PvP
    { spellId: "213602", name: "Greater Fade", tags: [SpellTag.Defensive] },
    { spellId: "328530", name: "Divine Ascension", tags: [SpellTag.Defensive] },
  ],
};

const DeathKnight = {
  unitClass: CombatUnitClass.DeathKnight,
  icon:
    "https://render-us.worldofwarcraft.com/icons/56/spell_deathknight_classicon.jpg",
  blizNumber: 6,
  abilities: [
    { spellId: "47528", name: "Mind Freeze", tags: [] },
    { spellId: "48265", name: "Death's Advance", tags: [SpellTag.Defensive] },
    { spellId: "48707", name: "Anti-Magic Shell", tags: [SpellTag.Defensive] },
    { spellId: "49576", name: "Death Grip", tags: [] },
    { spellId: "51052", name: "Anti-Magic Zone", tags: [SpellTag.Defensive] },
    { spellId: "61999", name: "Raise Ally", tags: [] },
    { spellId: "77606", name: "Dark Simulacrum", tags: [] },
    { spellId: "212552", name: "Wraith Walk", tags: [] },
    { spellId: "43265", name: "Death and Decay", tags: [] },
    { spellId: "47476", name: "Strangulate", tags: [] },
    { spellId: "49028", name: "Dancing Rune Weapon", tags: [] },
    { spellId: "55233", name: "Vampiric Blood", tags: [] },
    { spellId: "108199", name: "Gorefiend's Grasp", tags: [] },
    { spellId: "194679", name: "Rune Tap", tags: [] },
    { spellId: "194844", name: "Bonestorm", tags: [] },
    { spellId: "203173", name: "Death Chain", tags: [] },
    { spellId: "205223", name: "Consumption", tags: [] },
    { spellId: "206931", name: "Blooddrinker", tags: [] },
    { spellId: "206977", name: "Blood Mirror", tags: [] },
    { spellId: "219809", name: "Tombstone", tags: [] },
    { spellId: "221562", name: "Asphyxiate (Blood)", tags: [SpellTag.Control] },
    {
      spellId: "108194",
      name: "Asphyxiate (Unholy)",
      tags: [SpellTag.Control],
    },
    { spellId: "221699", name: "Blood Tap", tags: [] },
    { spellId: "47568", name: "Empower Rune Weapon", tags: [] },
    { spellId: "207127", name: "Hungering Rune Weapon", tags: [] },
    {
      spellId: "48792",
      name: "Icebound Fortitude",
      tags: [SpellTag.Defensive],
    },
    { spellId: "51271", name: "Pillar of Frost", tags: [] },
    {
      spellId: "152279",
      name: "Breath of Sindragosa",
      tags: [SpellTag.Offensive],
    },
    { spellId: "196770", name: "Remorseless Winter", tags: [] },
    { spellId: "204143", name: "Killing Machine", tags: [] },
    { spellId: "204160", name: "Chill Streak", tags: [] },
    { spellId: "207167", name: "Blinding Sleet", tags: [] },
    { spellId: "207256", name: "Obliteration", tags: [] },
    { spellId: "279302", name: "Frostwyrm's Fury", tags: [] },
    { spellId: "42650", name: "Army of the Dead", tags: [] },
    { spellId: "63560", name: "Dark Transformation", tags: [] },
    { spellId: "43265", name: "Death and Decay", tags: [] },
    { spellId: "152280", name: "Defile", tags: [] },
    { spellId: "47481", name: "Gnaw (Ghoul)", tags: [SpellTag.Control] },
    { spellId: "47482", name: "Leap (Ghoul)", tags: [] },
    { spellId: "49206", name: "Summon Gargoyle", tags: [] },
    { spellId: "207349", name: "Dark Arbiter", tags: [] },
    { spellId: "91802", name: "Shambling Rush (Ghoul)", tags: [] },
    { spellId: "207289", name: "Unholy Frenzy", tags: [] },
    { spellId: "207319", name: "Corpse Shield", tags: [] },
    { spellId: "220143", name: "Apocalypse", tags: [] },
  ],
};

const Shaman = {
  unitClass: CombatUnitClass.Shaman,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_shaman.jpg",
  blizNumber: 7,
  abilities: [
    { spellId: "2825", name: "Bloodlust", tags: [SpellTag.Offensive] },
    { spellId: "32182", name: "Heroism", tags: [SpellTag.Offensive] },
    { spellId: "20608", name: "Reincarnation", tags: [] },
    { spellId: "51485", name: "Earthgrab Totem", tags: [] },
    { spellId: "51514", name: "Hex", tags: [SpellTag.Control] },
    { spellId: "196932", name: "Voodoo Totem", tags: [] },
    { spellId: "210873", name: "Hex (Compy)", tags: [] },
    { spellId: "211004", name: "Hex (Spider)", tags: [] },
    { spellId: "211010", name: "Hex (Snake)", tags: [] },
    { spellId: "211015", name: "Hex (Cockroach)", tags: [] },
    { spellId: "57994", name: "Wind Shear", tags: [] },
    { spellId: "108271", name: "Astral Shift", tags: [] },
    { spellId: "210918", name: "Ethereal Form", tags: [SpellTag.Defensive] },
    { spellId: "114049", name: "Ascendance", tags: [SpellTag.Offensive] },
    {
      spellId: "114050",
      name: "Ascendance (Elemental)",
      tags: [SpellTag.Offensive],
    },
    {
      spellId: "114051",
      name: "Ascendance (Enhancement)",
      tags: [SpellTag.Offensive],
    },
    {
      spellId: "114052",
      name: "Ascendance (Restoration)",
      tags: [SpellTag.Offensive, SpellTag.Defensive],
    },
    { spellId: "192058", name: "Capacitor", tags: [] },
    { spellId: "192077", name: "Wind Rush Totem", tags: [] },
    { spellId: "204330", name: "Skyfury Totem", tags: [SpellTag.Offensive] },
    { spellId: "204331", name: "Counterstrike Totem", tags: [] },
    { spellId: "204332", name: "Windfury Totem", tags: [] },
    // -- Elemental
    { spellId: "16166", name: "Elemental Mastery", tags: [] },
    { spellId: "51490", name: "Thunderstorm", tags: [] },
    { spellId: "108281", name: "Ancestral Guidance", tags: [] },
    { spellId: "192063", name: "Gust of Wind", tags: [] },
    { spellId: "192222", name: "Liquid Magma Totem", tags: [] },
    { spellId: "198067", name: "Fire Elemental", tags: [] },
    { spellId: "192249", name: "Storm Elemental", tags: [] },
    { spellId: "198103", name: "Earth Elemental", tags: [] },
    { spellId: "204437", name: "Lightning Lasso", tags: [] },
    { spellId: "191634", name: "Stormkeeper", tags: [SpellTag.Offensive] },
    // -- Enhancement
    { spellId: "58875", name: "Spirit Walk", tags: [SpellTag.Defensive] },
    { spellId: "196884", name: "Feral Lunge", tags: [] },
    { spellId: "197214", name: "Sundering", tags: [] },
    { spellId: "201898", name: "Windsong", tags: [] },
    { spellId: "204366", name: "Thundercharge", tags: [] },
    { spellId: "204945", name: "Doom Winds", tags: [] },
    // -- Restoration
    { spellId: "5394", name: "Healing Stream Totem", tags: [] },
    {
      spellId: "79206",
      name: "Spiritwalker's Grace",
      tags: [SpellTag.Defensive],
    },
    { spellId: "98008", name: "Spirit Link Totem", tags: [SpellTag.Defensive] },
    { spellId: "204293", name: "Spirit Link", tags: [SpellTag.Defensive] },
    { spellId: "108280", name: "Healing Tide Totem", tags: [] },
    { spellId: "157153", name: "Cloudburst Totem", tags: [] },
    { spellId: "198838", name: "Earthen Wall Totem", tags: [] },
    { spellId: "204336", name: "Grounding Totem", tags: [SpellTag.Defensive] },
    { spellId: "207399", name: "Ancestral Protection Totem", tags: [] },
    { spellId: "207778", name: "Gift of the Queen", tags: [] },
    // -- PvP
    { spellId: "305483", name: "Lightning Lasso", tags: [SpellTag.Offensive] },
  ],
};

const Mage = {
  unitClass: CombatUnitClass.Mage,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_mage.jpg",
  blizNumber: 8,
  abilities: [
    { spellId: "66", name: "Invisibility", tags: [] },
    { spellId: "110959", name: "Greater Invisibility", tags: [] },
    { spellId: "1953", name: "Blink", tags: [] },
    { spellId: "212653", name: "Shimmer", tags: [] },
    { spellId: "2139", name: "Counterspell", tags: [] },
    { spellId: "11426", name: "Ice Barrier", tags: [SpellTag.Defensive] },
    { spellId: "45438", name: "Ice Block", tags: [SpellTag.Defensive] },
    { spellId: "55342", name: "Mirror Image", tags: [] },
    { spellId: "80353", name: "Time Warp", tags: [] },
    { spellId: "108839", name: "Ice Floes", tags: [] },
    { spellId: "118", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "161372", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "28272", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "28271", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "61780", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "277792", name: "Polymorph", tags: [SpellTag.Control] },
    { spellId: "82691", name: "Ring of Frost", tags: [SpellTag.Control] },
    { spellId: "136511", name: "Ring of Frost", tags: [SpellTag.Control] },
    { spellId: "140376", name: "Ring of Frost", tags: [SpellTag.Control] },
    { spellId: "113724", name: "Ring of Frost", tags: [SpellTag.Control] },
    { spellId: "116011", name: "Rune of Power", tags: [] },
    { spellId: "198111", name: "Temporal Shield", tags: [SpellTag.Defensive] },
    // -- Arcane
    { spellId: "12042", name: "Arcane Power", tags: [] },
    { spellId: "12051", name: "Evocation", tags: [] },
    { spellId: "153626", name: "Arcane Orb", tags: [] },
    { spellId: "157980", name: "Supernova", tags: [] },
    { spellId: "195676", name: "Displacement", tags: [] },
    { spellId: "198158", name: "Mass Invisibility", tags: [] },
    { spellId: "205025", name: "Presence of Mind", tags: [] },
    { spellId: "224968", name: "Mark of Aluneth", tags: [] },
    // -- Fire
    { spellId: "31661", name: "Dragon's Breath", tags: [SpellTag.Control] },
    { spellId: "108853", name: "Fire Blast", tags: [] },
    { spellId: "153561", name: "Meteor", tags: [] },
    { spellId: "157981", name: "Blast Wave", tags: [] },
    { spellId: "190319", name: "Combustion", tags: [SpellTag.Offensive] },
    { spellId: "194466", name: "Phoenix's Flames", tags: [] },
    { spellId: "205029", name: "Flame On", tags: [] },
    // -- Frost
    { spellId: "122", name: "Frost Nova", tags: [] },
    { spellId: "12472", name: "Icy Veins", tags: [SpellTag.Offensive] },
    { spellId: "198144", name: "Ice Form", tags: [] },
    { spellId: "31687", name: "Summon Water Elemental", tags: [] },
    { spellId: "84714", name: "Frozen Orb", tags: [] },
    { spellId: "153595", name: "Comet Storm", tags: [] },
    { spellId: "157997", name: "Ice Nova", tags: [] },
    { spellId: "205021", name: "Ray of Frost", tags: [] },
    { spellId: "214634", name: "Ebonbolt", tags: [] },
  ],
};

const Warlock = {
  unitClass: CombatUnitClass.Warlock,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_warlock.jpg",
  blizNumber: 9,
  abilities: [
    { spellId: "1122", name: "Summon Infernal", tags: [] },
    { spellId: "6358", name: "Seduction", tags: [SpellTag.Control] },
    { spellId: "115268", name: "Mesmerize", tags: [] },
    { spellId: "6360", name: "Whiplash", tags: [] },
    { spellId: "115770", name: "Fellash", tags: [] },
    { spellId: "6789", name: "Mortal Coil", tags: [SpellTag.Control] },
    // --{ spellId: "18540", name: "Summon Doomguard", tags: [] },
    { spellId: "20707", name: "Soulstone", tags: [] },
    { spellId: "5782", name: "Fear", tags: [SpellTag.Control] },
    { spellId: "30283", name: "Shadowfury", tags: [SpellTag.Control] },
    { spellId: "104773", name: "Unending Resolve", tags: [SpellTag.Defensive] },
    { spellId: "108416", name: "Dark Pact", tags: [] },
    { spellId: "108501", name: "Grimoire of Service", tags: [] },
    { spellId: "111896", name: "Grimoire: Succubus", tags: [] },
    { spellId: "119910", name: "Spell Lock (Command Demon)", tags: [] },
    { spellId: "19647", name: "Spell Lock (Felhunter)", tags: [] },
    { spellId: "119911", name: "Optical Blast (Command Demon)", tags: [] },
    { spellId: "115781", name: "Optical Blast (Observer)", tags: [] },
    { spellId: "132409", name: "Spell Lock (Grimoire of Sacrifice)", tags: [] },
    { spellId: "171138", name: "Shadow Lock (Doomguard)", tags: [] },
    {
      spellId: "171139",
      name: "Shadow Lock (Grimoire of Sacrifice)",
      tags: [],
    },
    { spellId: "171140", name: "Shadow Lock (Command Demon)", tags: [] },
    { spellId: "171152", name: "Meteor Strike", tags: [] },
    { spellId: "196098", name: "Soul Harvest", tags: [] },
    { spellId: "199890", name: "Curse of Tongues", tags: [] },
    { spellId: "199892", name: "Curse of Weakness", tags: [] },
    { spellId: "199954", name: "Curse of Fragility", tags: [] },
    { spellId: "212295", name: "Nether Ward", tags: [SpellTag.Defensive] },
    { spellId: "221703", name: "Casting Circle", tags: [] },
    // -- Affliction
    { spellId: "5484", name: "Howl of Terror", tags: [SpellTag.Control] },
    { spellId: "48181", name: "Haunt", tags: [] },
    { spellId: "86121", name: "Soul Swap", tags: [] },
    {
      spellId: "113860",
      name: "Dark Soul: Misery",
      tags: [SpellTag.Offensive],
    },
    { spellId: "205179", name: "Phantom Singularity", tags: [] },
    // -- Demonology
    { spellId: "89751", name: "Felstorm", tags: [] },
    { spellId: "115831", name: "Wrathstorm", tags: [] },
    { spellId: "89766", name: "Axe Toss", tags: [] },
    { spellId: "201996", name: "Call Observer", tags: [] },
    { spellId: "205180", name: "Summon Darkglare", tags: [] },
    { spellId: "205181", name: "Shadowflame", tags: [] },
    { spellId: "211714", name: "Thal'kiel's Consumption", tags: [] },
    { spellId: "212459", name: "Call Fel Lord", tags: [] },
    { spellId: "212619", name: "Call Felhunter", tags: [] },
    { spellId: "212623", name: "Singe Magic", tags: [] },
    // --  Destruction
    { spellId: "17962", name: "Conflagrate", tags: [] },
    { spellId: "80240", name: "Havoc", tags: [] },
    {
      spellId: "113858",
      name: "Dark Soul: Instability",
      tags: [SpellTag.Offensive],
    },
    { spellId: "152108", name: "Cataclysm", tags: [] },
    { spellId: "196447", name: "Channel Demonfire", tags: [] },
    { spellId: "196586", name: "Dimensional Rift", tags: [] },
    { spellId: "212284", name: "Firestone", tags: [] },
  ],
};

const Monk = {
  unitClass: CombatUnitClass.Monk,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_monk.jpg",
  blizNumber: 10,
  abilities: [
    { spellId: "109132", name: "Roll", tags: [] },
    { spellId: "115008", name: "Chi Torpedo", tags: [] },
    { spellId: "115078", name: "Paralysis", tags: [SpellTag.Control] },
    { spellId: "116841", name: "Tiger's Lust", tags: [] },
    { spellId: "116844", name: "Ring of Peace", tags: [SpellTag.Control] },
    { spellId: "119381", name: "Leg Sweep", tags: [SpellTag.Control] },
    { spellId: "119996", name: "Transcendence: Transfer", tags: [] },
    { spellId: "122278", name: "Dampen Harm", tags: [SpellTag.Defensive] },
    { spellId: "122783", name: "Diffuse Magic", tags: [SpellTag.Defensive] },
    { spellId: "123986", name: "Chi Burst", tags: [] },
    // --{ spellId: "137648", name: "Nimble Brew", tags: [] },
    // -- Brewmaster
    { spellId: "115203", name: "Fortifying Brew", tags: [SpellTag.Defensive] },
    { spellId: "115399", name: "Black Ox Brew", tags: [] },
    { spellId: "116705", name: "Spear Hand Strike", tags: [] },
    { spellId: "132578", name: "Invoke Niuzao, the Black Ox", tags: [] },
    { spellId: "202162", name: "Guard", tags: [] },
    { spellId: "202272", name: "Incendiary Brew", tags: [] },
    { spellId: "202370", name: "Mighty Ox Kick", tags: [] },
    // -- Windwalker
    { spellId: "101545", name: "Flying Serpent Kick", tags: [] },
    { spellId: "113656", name: "Fists of Fury", tags: [] },
    { spellId: "115080", name: "Touch of Death", tags: [] },
    { spellId: "152173", name: "Serenity", tags: [] },
    { spellId: "115176", name: "Zen Meditation", tags: [] },
    { spellId: "201325", name: "Zen Meditation (Windwalker)", tags: [] },
    { spellId: "115288", name: "Energizing Elixir", tags: [] },
    { spellId: "122470", name: "Touch of Karma", tags: [SpellTag.Defensive] },
    {
      spellId: "123904",
      name: "Invoke Xuen, the White Tiger",
      tags: [SpellTag.Offensive],
    },
    {
      spellId: "137639",
      name: "Storm, Earth, and Fire",
      tags: [SpellTag.Offensive],
    },
    { spellId: "152175", name: "Whirling Dragon Punch", tags: [] },
    {
      spellId: "201318",
      name: "Fortifying Elixir",
      tags: [SpellTag.Defensive],
    },
    // -- Mistweaver
    { spellId: "115310", name: "Revival", tags: [] },
    { spellId: "116680", name: "Thunder Focus Tea", tags: [] },
    { spellId: "116849", name: "Life Cocoon", tags: [SpellTag.Defensive] },
    { spellId: "197908", name: "Mana Tea", tags: [] },
    // --{ spellId: "197945", name: "Mistwalk", tags: [] },
    { spellId: "198898", name: "Song of Chi-Ji", tags: [] },
  ],
};

const Druid = {
  unitClass: CombatUnitClass.Druid,
  icon: "https://render-us.worldofwarcraft.com/icons/56/classicon_druid.jpg",
  blizNumber: 11,
  abilities: [
    {
      spellId: "323764",
      name: "Convoke the Spirits",
      tags: [SpellTag.Offensive],
    },
    { spellId: "1850", name: "Dash", tags: [] },
    { spellId: "33786", name: "Cyclone", tags: [SpellTag.Control] },
    { spellId: "252216", name: "Tiger Dash", tags: [] },
    { spellId: "5211", name: "Mighty Bash", tags: [SpellTag.Control] },
    { spellId: "20484", name: "Rebirth", tags: [] },
    { spellId: "102280", name: "Displacer Beast", tags: [] },
    { spellId: "102359", name: "Mass Entanglement", tags: [SpellTag.Control] },
    { spellId: "339", name: "Entangling Roots", tags: [SpellTag.Control] },
    { spellId: "102401", name: "Wild Charge", tags: [] },
    { spellId: "132469", name: "Typhoon", tags: [] },
    // -- Balance
    { spellId: "22812", name: "Barkskin", tags: [SpellTag.Defensive] },
    { spellId: "29166", name: "Innervate", tags: [] },
    { spellId: "78675", name: "Solar Beam", tags: [] },
    {
      spellId: "102560",
      name: "Incarnation: Chosen of Elune",
      tags: [SpellTag.Offensive],
    },
    { spellId: "108238", name: "Renewal", tags: [] },
    {
      spellId: "194223",
      name: "Celestial Alignment",
      tags: [SpellTag.Offensive],
    },
    { spellId: "202425", name: "Warrior of Elune", tags: [] },
    { spellId: "202770", name: "Fury of Elune", tags: [] },
    { spellId: "205636", name: "Force of Nature", tags: [] },
    { spellId: "209749", name: "Faerie Swarm", tags: [] },
    // -- Feral
    { spellId: "5217", name: "Tiger's Fury", tags: [] },
    { spellId: "22570", name: "Maim", tags: [] },
    { spellId: "61336", name: "Survival Instincts", tags: [] },
    {
      spellId: "102543",
      name: "Incarnation: King of the Jungle",
      tags: [SpellTag.Offensive],
    },
    { spellId: "106839", name: "Skull Bash", tags: [SpellTag.Control] },
    { spellId: "106898", name: "Stampeding Roar", tags: [] },
    { spellId: "106951", name: "Berserk", tags: [SpellTag.Offensive] },
    { spellId: "202060", name: "Elune's Guidance", tags: [] },
    { spellId: "203242", name: "Rip and Tear", tags: [] },
    { spellId: "210722", name: "Ashamane's Frenzy", tags: [] },
    // -- Guardian
    { spellId: "99", name: "Incapacitating Roar", tags: [SpellTag.Control] },
    { spellId: "22842", name: "Frenzied Regeneration", tags: [] },
    {
      spellId: "102558",
      name: "Incarnation: Guardian of Ursoc",
      tags: [SpellTag.Offensive],
    },
    { spellId: "200851", name: "Rage of the Sleeper", tags: [] },
    { spellId: "202246", name: "Overrun", tags: [] },
    { spellId: "204066", name: "Lunar Beam", tags: [] },
    // -- Restoration
    { spellId: "740", name: "Tranquility", tags: [] },
    { spellId: "18562", name: "Swiftmend", tags: [SpellTag.Defensive] },
    {
      spellId: "33891",
      name: "Incarnation: Tree of Life",
      tags: [SpellTag.Defensive],
    },
    { spellId: "102342", name: "Ironbark", tags: [SpellTag.Defensive] },
    { spellId: "102351", name: "Cenarion Ward", tags: [] },
    { spellId: "102793", name: "Ursol's Vortex", tags: [] },
    { spellId: "197721", name: "Flourish", tags: [] },
    { spellId: "201664", name: "Demoralizing Roar", tags: [] },
    { spellId: "203651", name: "Overgrowth", tags: [] },
    { spellId: "236696", name: "Thorns", tags: [SpellTag.Defensive] },
    { spellId: "208253", name: "Essence of G'Hanir", tags: [] },
  ],
};

const DemonHunter = {
  unitClass: CombatUnitClass.DemonHunter,
  icon:
    "https://render-us.worldofwarcraft.com/icons/56/achievement_boss_illidan.jpg",
  blizNumber: 12,
  abilities: [
    { spellId: "179057", name: "Chaos Nova", tags: [SpellTag.Control] },
    { spellId: "183752", name: "Disrupt", tags: [] },
    { spellId: "188499", name: "Blade Dance", tags: [] },
    { spellId: "188501", name: "Spectral Sight", tags: [] },
    { spellId: "191427", name: "Metamorphosis", tags: [SpellTag.Offensive] },
    {
      spellId: "187827",
      name: "Metamorphosis (Vengeance)",
      tags: [SpellTag.Control, SpellTag.Offensive],
    },
    {
      spellId: "162264",
      name: "Metamorphosis",
      tags: [SpellTag.Control, SpellTag.Offensive],
    },
    { spellId: "196718", name: "Darkness", tags: [SpellTag.Defensive] },
    { spellId: "198013", name: "Eye Beam", tags: [] },
    { spellId: "198793", name: "Vengeful Retreat", tags: [SpellTag.Defensive] },
    { spellId: "203704", name: "Mana Break", tags: [] },
    { spellId: "205604", name: "Reverse Magic", tags: [] },
    { spellId: "206649", name: "Eye of Leotheras", tags: [] },
    { spellId: "206803", name: "Rain from Above", tags: [] },
    { spellId: "212800", name: "Blur", tags: [SpellTag.Defensive] },
    { spellId: "196555", name: "Netherwalk", tags: [] },
    { spellId: "214743", name: "Soul Carver", tags: [] },
    { spellId: "207407", name: "Soul Carver (Vengeance)", tags: [] },
    { spellId: "221527", name: "Imprison", tags: [SpellTag.Control] },
    // -- Havoc
    { spellId: "201467", name: "Fury of the Illidari", tags: [] },
    { spellId: "206491", name: "Nemesis", tags: [] },
    // --{ spellId: "211048", name: "Chaos Blades", tags: [] },
    { spellId: "211881", name: "Fel Eruption", tags: [SpellTag.Control] },
    // -- Vengeance
    { spellId: "202137", name: "Sigil of Silence", tags: [] },
    { spellId: "202138", name: "Sigil of Chains", tags: [] },
    { spellId: "204021", name: "Fiery Brand", tags: [] },
    { spellId: "204596", name: "Sigil of Flame", tags: [] },
    { spellId: "205629", name: "Demonic Trample", tags: [] },
    { spellId: "205630", name: "Illidan's Grasp", tags: [] },
    { spellId: "207684", name: "Sigil of Misery", tags: [SpellTag.Control] },
    { spellId: "207810", name: "Nether Bond", tags: [] },
    // --{ spellId: "218256", name: "Empower Wards", tags: [] },
    { spellId: "263648", name: "Soul Barrier", tags: [] },
  ],
};

const Neutral = {
  unitClass: CombatUnitClass.None,
  icon: "",
  blizNumber: 0,
  abilities: [
    { spellId: "", name: "Will to Survive", tags: [SpellTag.Defensive] },
    { spellId: "", name: "Gladiator's Medallion", tags: [SpellTag.Defensive] },
    {
      spellId: "",
      name: "Weapons of Order",
      tags: [SpellTag.Offensive, SpellTag.Defensive],
    },
  ],
};

export const classMetadata: IClassMetadata[] = [
  Rogue,
  Warrior,
  DeathKnight,
  DemonHunter,
  Mage,
  Warlock,
  Hunter,
  Shaman,
  Druid,
  Priest,
  Monk,
  Paladin,
  Neutral,
];
