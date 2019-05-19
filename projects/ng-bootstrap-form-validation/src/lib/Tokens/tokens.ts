import { InjectionToken } from "@angular/core";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { ErrorMessage } from "../Models/error-message";

export const ADD_SUCCESS_CLASS = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation add success class option"
);

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation custom error messages"
);

export const BOOTSTRAP_VERSION = new InjectionToken<BootstrapVersion>(
  "ng-bootstrap-form-validation module options"
);
