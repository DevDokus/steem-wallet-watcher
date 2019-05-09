# Steem Wallet Watcher
This program will you will be able to simply record transactions. <br>
The recorded transactions will be stored in a SQLite database that <br>
is locally on your PC, in the root folder of the program. <br>
You can record the in and out going transactions from and to <br>
yourself, you can record transactions from / to multiple accounts <br>
and, you are able to record every transaction made on the blockchain. <br><br>

TIP: I have uploaded a program called "SQLite Database Browser"<br>
within the "INSTAL" folder. This program you can use to open<br>
the local database to view the stored information.<br>

**Currently it only records incoming transactions**
<hr>

### Contact the developer:
| Platform | Value | Username |
|---|---|---|
| Steemit | https://steemit.com/@devske/ | Devske |
| Discord | https://discord.gg/AdCZUFA | @Devske |
| Email | devske@outlook.com | ---- |
<hr>

## How to start the script ?
When you have installed the dependencies via the **install.bat**, <br>
and when you have set all parameters in the **app.js**, <br>
you can simply double click and activate the **start.bat** <br>
and enjoy the magic happening!
<hr>

## How to install
* First, you need to make sure to install **NodeJS**. <br>
This version was made and tested with **v10.15.3** <br>
https://nodejs.org/dist/v10.15.3/

* After you installed node you need to extract <br>
the *.rar* file Github will provide you.

* Click on the **install.bat** file. <br>
This will install the node dependencies.
<hr>

## How to set up the script?
1. Open the **app.js** with a code editor of choice.
2. Set your steemit username.
3. Set the **webSocket** to an RPC Node of choice.
4. Select 1 or more modes (set to < true > or < false >)
5. Insert the account names for tracking if multiAcc is enabled.

## Below the available options
| Options | Value | Type | Description |
| --- | --- | --- | --- |
| **User** | devske | string | Steemit Account name |
| **webSocket**| https://rpc.steemviz.com | string {optional} | Set your RPC Node Connection |

#### MODES
| Options | Value | Type | Description |
| --- | --- | --- | --- |
| **Test** | true / false | Boolean | Toggle Test Mode |
| **Single** | true / false | Boolean | Toggle Single Mode |
| **Multi** | true / false | Boolean | Toggle Multi Account Mode |
| **Blockchain** | true / false | Boolean | Toggle Multi Account Mode |
<hr>

### How does multi accounts work ?
If you enable multi accounts, the program will record <br>
the transactions from each account on the list. With Single <br>
account enabled it will take your user name (first option).

### Concider a donation :D
https://steemit.com/@devske/
<hr>
