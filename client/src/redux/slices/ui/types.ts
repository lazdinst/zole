type modalType =
  | 'new_mission'
  | 'load_mission'
  | 'clear_mission'
  | 'delete_mission'
  | 'remove_mission'
  | 'set_selected_mission'
  | 'contact_stop'
  | 'delete_task'
  | 'overwrite_task_position'
  | null;

export type TabsProps =
  | 'robot'
  | 'joint'
  | 'teaching'
  | 'arm'
  | 'device manager';
export interface UIState {
  isRobotPanelCollapsibleOpen: boolean;
  isModalOpen: boolean;
  modalVariant: modalType | null;
  showAdvancedOptions: boolean;
  controlPanelTabState: TabsProps | null;
  activeRoute: string;
  inputFocus: boolean;
  activeTaskId: string | null;
  activePositionId: string | null;
}
