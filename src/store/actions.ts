export const CHANGE_DISPLAY_VALUE = "CHANGE_DISPLAY_VALUE";
export const RESET_DISPLAY_VALUE = "RESET_DISPLAY_VALUE";
export const DISABLE_INCREMENT_BUTTON = "DISABLE_INCREMENT_BUTTON";

export const CHANGE_MAX_VALUE_WITHOUT_ERROR = "CHANGE_MAX_VALUE_WITHOUT_ERROR";
export const CHANGE_MAX_VALUE_WITH_ERROR = "CHANGE_MAX_VALUE_WITH_ERROR";
export const CHANGE_START_VALUE_WITHOUT_ERROR =
  "CHANGE_START_VALUE_WITHOUT_ERROR";
export const CHANGE_START_VALUE_WITH_ERROR = "CHANGE_START_VALUE_WITH_ERROR";
export const CHANGE_START_VALUE = "CHANGE_START_VALUE";
export const SET_VALUES = "SET_VALUES";

export const increaseValue = () =>
  ({
    type: CHANGE_DISPLAY_VALUE,
  } as const);

export const disableIncrementButton = () =>
  ({
    type: DISABLE_INCREMENT_BUTTON,
  } as const);

export const resetDisplayValue = () =>
  ({
    type: RESET_DISPLAY_VALUE,
  } as const);

export const changeMaxValueWithoutError = (maxValue: any) =>
  ({
    type: CHANGE_MAX_VALUE_WITHOUT_ERROR,
    maxValue: maxValue,
  } as const);

export const changeMaxValueWithError = (maxValue: any) =>
  ({
    type: CHANGE_MAX_VALUE_WITH_ERROR,
    maxValue: maxValue,
  } as const);

export const changeStartValueWithoutError = (startValue: any) =>
  ({
    type: CHANGE_START_VALUE_WITHOUT_ERROR,
    startValue: startValue,
  } as const);

export const changeStartValueWithError = (startValue: any) =>
  ({
    type: CHANGE_START_VALUE_WITH_ERROR,
    startValue: startValue,
  } as const);

export const setValues = () =>
  ({
    type: SET_VALUES,
  } as const);

export type IncreaseValueActionType = ReturnType<typeof increaseValue>;
export type DisableIncrementButtonActionType = ReturnType<
  typeof disableIncrementButton
>;
export type ResetDisplayValueActionType = ReturnType<typeof resetDisplayValue>;
export type ChangeMaxValueWithoutErrorActionType = ReturnType<
  typeof changeMaxValueWithoutError
>;
export type ChangeMaxValueWithErrorActionType = ReturnType<
  typeof changeMaxValueWithError
>;
export type ChangeStartValueWithoutError = ReturnType<
  typeof changeStartValueWithoutError
>;
export type ChangeStartValueWithError = ReturnType<
  typeof changeStartValueWithError
>;
export type SetValuesActionType = ReturnType<typeof setValues>;

export type ActionType =
  | IncreaseValueActionType
  | DisableIncrementButtonActionType
  | ResetDisplayValueActionType
  | ChangeMaxValueWithoutErrorActionType
  | ChangeMaxValueWithErrorActionType
  | ChangeStartValueWithoutError
  | ChangeStartValueWithError
  | SetValuesActionType;
