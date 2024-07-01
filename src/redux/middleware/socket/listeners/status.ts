import { AppDispatch } from '../../../store';
import { StatusMessageType } from '../types/message.types';

import {
  setRobotConnectedState,
  setContactStopSafe,
  setMgtActive,
  setMgtFreeHand,
  setMgtMode,
  setMgtWeight,
  setExecutionMode,
  setOverride,
  setDryCycleState,
} from '../../../slices/robot';

import { updateModuleStatus, setActiveMission } from '../../../slices/module';

function handleStatusMessageType(
  message: StatusMessageType,
  dispatch: AppDispatch
) {
  const { state, state_code, robot } = message.payload;

  dispatch(
    updateModuleStatus({
      state: state,
      stateCode: state_code,
    })
  );

  const {
    robot_connected,
    cs_safe,
    mgt_active,
    mgt_free_hand,
    mgt_mode,
    mgt_weight,
    execution_mode,
    override,
    dry_cycle,
    active_mission,
  } = robot;

  dispatch(setRobotConnectedState(robot_connected));

  if (cs_safe != null) {
    dispatch(setContactStopSafe(cs_safe));
  }
  if (mgt_active != null) {
    dispatch(setMgtActive(mgt_active));
  }

  if (mgt_free_hand != null) {
    dispatch(setMgtFreeHand(mgt_free_hand));
  }

  if (mgt_mode != null) {
    dispatch(setMgtMode(mgt_mode));
  }

  if (mgt_weight != null) {
    dispatch(setMgtWeight(mgt_weight));
  }

  if (execution_mode != null) {
    dispatch(setExecutionMode(execution_mode));
  }
  if (override != null) {
    dispatch(setOverride(override));
  }
  if (dry_cycle != null) {
    dispatch(setDryCycleState(dry_cycle));
  }
  if (active_mission != null) {
    dispatch(setActiveMission(active_mission));
  }
}

export default handleStatusMessageType;
