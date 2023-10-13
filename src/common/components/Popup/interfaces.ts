export interface SubmitActionsInterface {
  resetForm: () => void;
}

export interface SubmitValuesInterface {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type SubmitInterface = (
  values: SubmitValuesInterface,
  actions: SubmitActionsInterface
) => void;
