import { Tx } from "../generated/schema";
import { Transfer } from "../generated/btthree/abi";


export function handleTransfer(event: Transfer): void {

  let txId = event.transaction.hash.toHex()
  let tran = new Tx(txId)
  tran.to = event.params.to
  tran.from = event.params.from
  tran.value = event.params.value
  tran.block = event.block.number
  tran.save()

}