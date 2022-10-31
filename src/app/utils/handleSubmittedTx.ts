import { ContractReceipt, ContractTransaction } from "ethers"
import { MatSnackBar } from '@angular/material/snack-bar';

export async function handleSubmittedTx (
	tx: ContractTransaction,
	_snackBar: MatSnackBar
){
  _snackBar.open("Transaction sent")
  console.info(tx.hash)
    
  const minedTx: ContractReceipt = await tx.wait()

  if(minedTx.status == 1){
    _snackBar.open("Transaction completed with success")
  } else {
    _snackBar.open("Transaction completed with failure")
  }

  return minedTx;
}