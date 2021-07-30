import * as Types from "../types";

const INITIAL_STATE = {
  Name: "",
  NameValidation:false,
  SurName: "",
  SurNameValidation:false,
  Email: "",
  EmailValidation:false,
  Phone: "",
  PhoneValidation:false,
  State: "0",
  StateValidation:false,
  City: "0",
  CityValidation:false,
  MortageAmount: "",
  MortageAmountValidation:false,
  YearlyIncome: "",
  YearlyIncomeValidation:false,
  TypeOperation: false,
  TypeOperationSecond: false,
  TypeOperationValidation:false,
  CreditScore: "",
  CreditScroeValidation:false,
  firstCheck:false,
  firstCheckValidation:false,
  secondCheck:false,
  secondCheckValidation:false,
  docId:'',
  isLoading: false,
  drawMenu: false,
  LoginEmail: '',
  LoginPassword: '',
  LoginEmailValidation:false,
  LoginPasswordValidation:false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      // Return the initial state when no action types match.
      return state;
  }
};
