export function loadPlannerState() {
  try {
    const serializedState = localStorage.getItem('planner');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load planner state from localStorage', err);
    return undefined;
  }
}

export function loadUIState() {
  try {
    const serializedState = localStorage.getItem('ui');
    console.log('serializedState', serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load ui state from localStorage', err);
    return undefined;
  }
}

export function loadThemeState() {
  try {
    const serializedTheme = localStorage.getItem('theme');
    if (serializedTheme === null) {
      return undefined;
    }
    return JSON.parse(serializedTheme);
  } catch (err) {
    console.error('Failed to load theme state from localStorage', err);
    return undefined;
  }
}
