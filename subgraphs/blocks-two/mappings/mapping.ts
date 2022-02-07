import { ethereum } from "@graphprotocol/graph-ts";
import { Block } from "../generated/schema";

export function handleBlock(block: ethereum.Block): void {
  let be = new Block(block.hash.toHex());
  be.parentHash = block.parentHash.toHex();
  be.unclesHash = block.unclesHash.toHex();
  be.author = block.author.toHex();
  be.stateRoot = block.stateRoot.toHex();
  be.transactionsRoot = block.transactionsRoot.toHex();
  be.receiptsRoot = block.receiptsRoot.toHex();
  be.number = block.number;
  be.gasUsed = block.gasUsed;
  be.gasLimit = block.gasLimit;
  be.timestamp = block.timestamp;
  be.difficulty = block.difficulty;
  be.totalDifficulty = block.totalDifficulty;
  be.size = block.size;
  be.save();
}