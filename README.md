# Immortal Creed API Examples

## Stats and Wallets
To retrieve stats and token amounts owned by a player, you can use their hive account name, web3 address, in-game nickname, or in-game wallet ID.
<br /><br /><br />
For hive accounts, precede the account name with the '@' symbol.
```
https://play.immortalcreed.com/game/api/players/@broon
```
<br /><br />
For web3 wallet addresses, precede the account address with '0x'.
```
https://play.immortalcreed.com/game/api/players/0x39314263C1d5F244a0e7ff2CAbaa01c5b2409be3
```
<br /><br />
For in-game nicknames, use the nickname directly.
```
https://play.immortalcreed.com/game/api/players/dieterkleist
```
<br /><br />
For in-game wallet IDs starting with 'icgw-', use the wallet ID directly.
```
https://play.immortalcreed.com/game/api/players/icgw-15108409-c6dc-4d18-94a1-02b491255370
```
<br /><br /><br />
## Cards
Cards owned by a player can be retrieved similarly, adding `/cards` to the API URL used to retrieve base stats.
```
https://play.immortalcreed.com/game/api/players/@broon/cards
```
```
https://play.immortalcreed.com/game/api/players/0x39314263C1d5F244a0e7ff2CAbaa01c5b2409be3/cards
```
