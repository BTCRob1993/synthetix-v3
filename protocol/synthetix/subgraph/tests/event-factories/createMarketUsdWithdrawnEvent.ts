import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import { newTypedMockEvent } from 'matchstick-as';
import { MarketUsdWithdrawn as MarketUsdWithdrawnEvent } from '../../mainnet/generated/CoreProxy/CoreProxy';

export function createMarketUsdWithdrawnEvent(
  marketId: i32,
  target: string,
  amount: i64,
  market: string,
  timestamp: i64,
  blockNumber: i64,
  logIndex: i64
): MarketUsdWithdrawnEvent {
  const event = newTypedMockEvent<MarketUsdWithdrawnEvent>();

  event.parameters.push(new ethereum.EventParam('marketId', ethereum.Value.fromI32(marketId)));
  event.parameters.push(
    new ethereum.EventParam('target', ethereum.Value.fromAddress(Address.fromString(target)))
  );
  event.parameters.push(
    new ethereum.EventParam('amount', ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(amount)))
  );
  event.parameters.push(
    new ethereum.EventParam('market', ethereum.Value.fromAddress(Address.fromString(market)))
  );

  event.block.timestamp = BigInt.fromI64(timestamp);
  event.block.number = BigInt.fromI64(blockNumber);
  event.logIndex = BigInt.fromI64(logIndex);

  return event;
}
