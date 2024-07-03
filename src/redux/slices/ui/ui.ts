import { createSlice } from '@reduxjs/toolkit';
import { UIState, TabsProps } from './types';

export const tabData: TabsProps[] = ['robot', 'teaching', 'device manager'];

const initialState: UIState = {
  isRobotPanelCollapsibleOpen: false,
  isModalOpen: false,
  modalVariant: null,
  showAdvancedOptions: false,
  controlPanelTabState: tabData[0],
  activeRoute: '/',
  inputFocus: false,
  activeTaskId: null,
  activePositionId: null,
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleRobotPanelCollapsible: (state) => {
      state.isRobotPanelCollapsibleOpen = !state.isRobotPanelCollapsibleOpen;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalVariant = null;
    },
    setModalVariant: (state, action) => {
      state.modalVariant = action.payload;
    },
    openModalAndSetVariant: (state, action) => {
      state.isModalOpen = true;
      state.modalVariant = action.payload;
    },
    toggleShowAdvancedOptions: (state) => {
      state.showAdvancedOptions = !state.showAdvancedOptions;
    },
    setControlPanelTabState: (state, action) => {
      state.controlPanelTabState = action.payload;
    },
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    },
    setInputFocus: (state, action) => {
      state.inputFocus = action.payload;
    },
    setActiveTaskId: (state, action) => {
      state.activeTaskId = action.payload;
    },
    setActivePositionId: (state, action) => {
      state.activePositionId = action.payload;
    },
  },
});

export const {
  toggleRobotPanelCollapsible,
  toggleModal,
  setModalVariant,
  openModalAndSetVariant,
  closeModal,
  toggleShowAdvancedOptions,
  setControlPanelTabState,
  setActiveRoute,
  setInputFocus,
  setActiveTaskId,
  setActivePositionId,
} = ui.actions;

export default ui.reducer;
