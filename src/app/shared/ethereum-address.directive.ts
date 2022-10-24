import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { ethers } from "ethers";

export function ethereumAddressValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
	  const valid = ethers.utils.isAddress(control.value);
	  return valid ? null: {ethereumAddress: {value: control.value}};
	};
  }