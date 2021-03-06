/* eslint-disable no-fallthrough */
import _ from "lodash";
import { uniqueId } from "lodash";
import { CombatAction } from "./actions/CombatAction";
import { CombatAdvancedAction } from "./actions/CombatAdvancedAction";
import { CombatHpUpdateAction } from "./actions/CombatHpUpdateAction";
import { CombatUnit, ICombatUnit } from "./CombatUnit";
import {
  CombatResult,
  CombatUnitClass,
  CombatUnitReaction,
  CombatUnitSpec,
  CombatUnitType,
  ICombatantMetadata,
  ILogLine,
  LogEvent,
} from "./types";
import { parseQuotedName } from "./utils";

export interface ICombatData {
  id: string;
  isWellFormed: boolean;
  startTime: number;
  endTime: number;
  units: { [unitId: string]: ICombatUnit };
  playerTeamId: number;
  playerTeamRating: number;
  result: CombatResult;
  hasAdvancedLogging: boolean;
  rawLines: string[];
  linesNotParsedCount: number;
}

export class CombatData implements ICombatData {
  public id: string = uniqueId("combat");
  public isWellFormed: boolean = false;
  public startTime: number = 0;
  public endTime: number = 0;
  public units: { [unitId: string]: CombatUnit } = {};
  public playerTeamId: number = -1;
  public playerTeamRating: number = 0;
  public result: CombatResult = CombatResult.Unknown;
  public hasAdvancedLogging: boolean = false;
  public rawLines: string[] = [];
  public linesNotParsedCount: number = 0;

  private lastDeathReaction: CombatUnitReaction = CombatUnitReaction.Neutral;
  private combatantMetadata: Map<string, ICombatantMetadata> = new Map<
    string,
    ICombatantMetadata
  >();

  public readLogLine(logLine: ILogLine) {
    if (logLine.parameters.length < 8) {
      return;
    }

    if (this.startTime === 0) {
      this.startTime = logLine.timestamp;
    }
    this.endTime = logLine.timestamp;

    if (logLine.event === LogEvent.COMBATANT_INFO) {
      const unitId = logLine.parameters[0];
      const specId = parseInt(logLine.parameters[23], 10);
      if (specId in CombatUnitSpec) {
        const spec = specId as CombatUnitSpec;
        let unitClass = CombatUnitClass.None;
        switch (spec) {
          case CombatUnitSpec.DeathKnight_Blood:
          case CombatUnitSpec.DeathKnight_Frost:
          case CombatUnitSpec.DeathKnight_Unholy:
            unitClass = CombatUnitClass.DeathKnight;
            break;
          case CombatUnitSpec.DemonHunter_Havoc:
          case CombatUnitSpec.DemonHunter_Vengeance:
            unitClass = CombatUnitClass.DemonHunter;
            break;
          case CombatUnitSpec.Druid_Balance:
          case CombatUnitSpec.Druid_Feral:
          case CombatUnitSpec.Druid_Guardian:
          case CombatUnitSpec.Druid_Restoration:
            unitClass = CombatUnitClass.Druid;
            break;
          case CombatUnitSpec.Hunter_BeastMastery:
          case CombatUnitSpec.Hunter_Marksmanship:
          case CombatUnitSpec.Hunter_Survival:
            unitClass = CombatUnitClass.Hunter;
            break;
          case CombatUnitSpec.Mage_Arcane:
          case CombatUnitSpec.Mage_Fire:
          case CombatUnitSpec.Mage_Frost:
            unitClass = CombatUnitClass.Mage;
            break;
          case CombatUnitSpec.Monk_BrewMaster:
          case CombatUnitSpec.Monk_Windwalker:
          case CombatUnitSpec.Monk_Mistweaver:
            unitClass = CombatUnitClass.Monk;
            break;
          case CombatUnitSpec.Paladin_Holy:
          case CombatUnitSpec.Paladin_Protection:
          case CombatUnitSpec.Paladin_Retribution:
            unitClass = CombatUnitClass.Paladin;
            break;
          case CombatUnitSpec.Priest_Discipline:
          case CombatUnitSpec.Priest_Holy:
          case CombatUnitSpec.Priest_Shadow:
            unitClass = CombatUnitClass.Priest;
            break;
          case CombatUnitSpec.Rogue_Assassination:
          case CombatUnitSpec.Rogue_Outlaw:
          case CombatUnitSpec.Rogue_Subtlety:
            unitClass = CombatUnitClass.Rogue;
            break;
          case CombatUnitSpec.Shaman_Elemental:
          case CombatUnitSpec.Shaman_Enhancement:
          case CombatUnitSpec.Shaman_Restoration:
            unitClass = CombatUnitClass.Shaman;
            break;
          case CombatUnitSpec.Warlock_Affliction:
          case CombatUnitSpec.Warlock_Demonology:
          case CombatUnitSpec.Warlock_Destruction:
            unitClass = CombatUnitClass.Warlock;
            break;
          case CombatUnitSpec.Warrior_Arms:
          case CombatUnitSpec.Warrior_Fury:
          case CombatUnitSpec.Warrior_Protection:
            unitClass = CombatUnitClass.Warrior;
            break;
        }
        this.registerCombatant(unitId, {
          spec,
          class: unitClass,
        });
      }
      return;
    }

    const srcGUID = logLine.parameters[0];
    const srcName = parseQuotedName(logLine.parameters[1]);
    // tslint:disable-next-line: radix
    const srcFlag = parseInt(logLine.parameters[2]);

    const destGUID = logLine.parameters[4];
    const destName = parseQuotedName(logLine.parameters[5]);
    // tslint:disable-next-line: radix
    const destFlag = parseInt(logLine.parameters[6]);

    if (!this.units[srcGUID]) {
      this.units[srcGUID] = new CombatUnit(srcGUID, srcName);
    }
    if (!this.units[destGUID]) {
      this.units[destGUID] = new CombatUnit(destGUID, destName);
    }

    const srcUnit = this.units[srcGUID];
    const destUnit = this.units[destGUID];
    if (!srcUnit || !destUnit) {
      throw new Error(
        "failed to parse source unit or dest unit from the log line"
      );
    }
    srcUnit.endTime = logLine.timestamp;
    destUnit.endTime = logLine.timestamp;

    srcUnit.proveType(this.getUnitType(srcFlag));
    destUnit.proveType(this.getUnitType(destFlag));

    srcUnit.proveReaction(this.getUnitReaction(srcFlag));
    destUnit.proveReaction(this.getUnitReaction(destFlag));

    if (
      logLine.event === LogEvent.UNIT_DIED &&
      this.getUnitType(destFlag) === CombatUnitType.Player &&
      this.getUnitReaction(destFlag) !== CombatUnitReaction.Neutral
    ) {
      this.lastDeathReaction = this.getUnitReaction(destFlag);
    }

    switch (logLine.event) {
      case LogEvent.SWING_DAMAGE:
      case LogEvent.RANGE_DAMAGE:
      case LogEvent.SPELL_DAMAGE:
      case LogEvent.SPELL_PERIODIC_DAMAGE:
        const damageAction = new CombatHpUpdateAction(logLine);
        if (srcGUID !== destGUID) {
          srcUnit.damageOut.push(damageAction);
        }
        destUnit.damageIn.push(damageAction);
        if (damageAction.advanced) {
          const advancedActor = this.units[damageAction.advancedActorId];
          advancedActor?.advancedActions.push(damageAction);
          this.hasAdvancedLogging = true;
        }
        break;
      case LogEvent.SPELL_HEAL:
      case LogEvent.SPELL_PERIODIC_HEAL:
        const healAction = new CombatHpUpdateAction(logLine);
        srcUnit.healOut.push(healAction);
        destUnit.healIn.push(healAction);
        if (healAction.advanced) {
          const advancedActor = this.units[healAction.advancedActorId];
          advancedActor?.advancedActions.push(healAction);
          this.hasAdvancedLogging = true;
        }
        break;
      case LogEvent.SPELL_AURA_APPLIED:
      case LogEvent.SPELL_AURA_APPLIED_DOSE:
      case LogEvent.SPELL_AURA_REFRESH:
      case LogEvent.SPELL_AURA_REMOVED:
      case LogEvent.SPELL_AURA_REMOVED_DOSE:
      case LogEvent.SPELL_AURA_BROKEN:
      case LogEvent.SPELL_AURA_BROKEN_SPELL:
        const auraEvent = new CombatAction(logLine);
        destUnit.auraEvents.push(auraEvent);
        break;
      case LogEvent.SPELL_INTERRUPT:
      case LogEvent.SPELL_STOLEN:
      case LogEvent.SPELL_DISPEL:
      case LogEvent.SPELL_DISPEL_FAILED:
      case LogEvent.SPELL_EXTRA_ATTACKS:
        srcUnit.actionOut.push(logLine);
        destUnit.actionIn.push(logLine);
        break;
      case LogEvent.UNIT_DIED:
        destUnit.deathRecords.push(logLine);
        break;
      case LogEvent.SPELL_CAST_SUCCESS:
        const advancedAction = new CombatAdvancedAction(logLine);
        if (advancedAction.advanced) {
          const advancedActor = this.units[advancedAction.advancedActorId];
          advancedActor?.advancedActions.push(advancedAction);
          this.hasAdvancedLogging = true;
        }
        srcUnit.spellCastEvents.push(advancedAction);
        srcUnit.actionOut.push(logLine);
        destUnit.actionIn.push(logLine);
        break;
      case LogEvent.SPELL_CAST_START:
      case LogEvent.SPELL_CAST_FAILED:
        const action = new CombatAction(logLine);
        srcUnit.spellCastEvents.push(action);
        break;
    }
  }

  public registerCombatant(id: string, combatantMetadata: ICombatantMetadata) {
    this.combatantMetadata.set(id, combatantMetadata);
  }

  public end(teamRatings: number[], wasTimeout?: boolean) {
    _.forEach(this.units, unit => {
      unit.endActivity();
      if (this.combatantMetadata.has(unit.id)) {
        const metadata = this.combatantMetadata.get(unit.id);
        unit.proveClass(metadata?.class || CombatUnitClass.None);
        unit.proveSpec(metadata?.spec || CombatUnitSpec.None);
      }
      unit.end();
    });

    // a valid arena combat should have at least two friendly units and two hostile units
    const playerUnits = Array.from(_.values(this.units)).filter(
      unit => unit.type === CombatUnitType.Player
    );
    const deadPlayerCount = playerUnits.filter(p => p.deathRecords.length > 0)
      .length;

    if (this.playerTeamId >= 0) {
      this.playerTeamRating =
        this.playerTeamId < teamRatings.length
          ? teamRatings[this.playerTeamId]
          : 0;
    }

    if (this.lastDeathReaction === CombatUnitReaction.Friendly) {
      this.result = CombatResult.Lose;
    } else if (this.lastDeathReaction === CombatUnitReaction.Hostile) {
      this.result = CombatResult.Win;
    } else {
      this.result = CombatResult.Unknown;
    }

    if (
      playerUnits.length === this.combatantMetadata.size &&
      deadPlayerCount > 0 &&
      !wasTimeout &&
      deadPlayerCount < this.combatantMetadata.size &&
      (this.result === CombatResult.Win || this.result === CombatResult.Lose)
    ) {
      this.isWellFormed = true;
    }
  }

  private getUnitType(flag: number): CombatUnitType {
    // tslint:disable-next-line: no-bitwise
    const masked = flag & 0x0000fc00;
    switch (masked) {
      case 0x00001000:
        return CombatUnitType.Pet;
      case 0x00000400:
        return CombatUnitType.Player;
      default:
        return CombatUnitType.None;
    }
  }

  private getUnitReaction(flag: number): CombatUnitReaction {
    // tslint:disable-next-line: no-bitwise
    const masked = flag & 0x000000f0;
    switch (masked) {
      case 0x00000040:
        return CombatUnitReaction.Hostile;
      case 0x00000010:
        return CombatUnitReaction.Friendly;
      default:
        return CombatUnitReaction.Neutral;
    }
  }
}
