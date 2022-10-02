# Commands

So, my plugin have some commands and here I'll try to describe all commands

First I should mention that all commands are located behind one command as subcommands.
Main plugin command is `/ntdluckyblock` (With aliases `/lb` and `/luckyblock`)

### System commands
* `/ntdluckyblock version` - Command to get running version, last version from SpigotMC
(So you will know that there is an update available), plugin type (premium or free),
internal build number, last update date (It may be wrong, because I change it manually),
plugin author (Of course it is a danirod12 aka DenBeKKer)
* `/ntdluckyblock checkforupdates` - Command to check for updates. I am strongly convinced
that all my customers should run last version, because old versions may contain critical issues  
⚠ Permission required for command: `luckyblock.command.checkforupdates`
* `/ntdluckyblock support` - Command to get URLs to my [discord support server](https://discord.gg/vbYW3sperj)
and [VK (Russian)](https://vk.com/danirodplay). Feel free to ask all questions  
⚠ Permission required for command: `luckyblock.command.support`
* `/ntdluckyblock reload` - Command to reload plugin (Reload config, language, all LuckyBlock instances,
GUI manager, mineable config, bedwars configs and so on)  
⚠ Permission required for command: `luckyblock.command.reload`
* `/ntdluckyblock convert` - Command for *premium version* to convert all your LuckyBlock configs to  
⚠ Permission required for command: `luckyblock.command.convert`
JSON format. This action is required for edit GUI features
:::tip
You should convert all configs to JSON format in premium version. It is really important
:::
* `/ntdluckyblock destroy <chunk/radius>` - Command to destroy broken LuckyBlocks (Floating head without
glass). You should provide at least one argument that should be a radius-integer or word `chunk` for chunk
clear. You can also add `-all` argument if you want to destroy all LuckyBlocks (Not only broken, but all)   
⚠ Permission required for command: `luckyblock.command.destroy`
* `/ntdluckyblock generate <type> <factory> <min> <max>` - Regenerate config with new LuckyEntries. First argument -
LuckyBlock type (For instance, `yellow`), second argument - factory version (Recommended `latest`), third and last
argument - min and max entry drops.
⚠ Permission required for command: `luckyblock.command.generate`
:::caution
This command drops all setups inside LuckyBlock configuration. Prepare a backup
:::
:::tip
Example: `/ntdluckyblock generate yellow latest 100 150` will drop yellow configuration and insert
from 100 to 150 entry drops
:::
* `/ntdluckyblock list` - Command to get all LuckyBlocks statuses (Enabled or disabled, entries amount,
recipes amount *(Premium version contains a feature to all custom recipes for your LuckyBlocks)*)  
⚠ Permission required for command: `luckyblock.command.list`

### LuckyBlock get commands
* `/ntdluckyblock get <type/random> <amount>` - Command to get LuckyBlocks. First argument - LuckyBlock type
(LuckyBlock should be enabled and loaded) and the second optional argument is for amount  
⚠ Permission required for command: `luckyblock.command.get` and `luckyblock.command.get.<type/random>`
(If per color permission feature is enabled [in config](./setup/config))
* `/ntdluckyblock give <name/all/world> <type/random> <amount>` - Command to give LuckyBlocks. First argument
could be a player name or `all` word or `world` word. Note that `world` argument could be used only from player
(Not from console). As with get command, LuckyBlock should be loaded.  
⚠ Permission required for command: `luckyblock.command.give` and `luckyblock.command.give.<type/random>`
(If per color permission feature is enabled [in config](./setup/config))

### Item management commands (Custom items, NBT convert)
* `/ntdluckyblock iteminfo` - Command to print holding in hand item info. This command checks if item is a
CustomItem, checks if it is a LuckyBlock (Also, checks if this LuckyBlock is outdated), prints material
Bukkit type for legacy setup and if you add `-tag` argument this command will also print item NBT tag and
JSON format for premium version. Also, I have added a feature to write this output to file, because it is
hard to copy something from chat. You can add `-write` argument to get a file named `item-tags.txt` with
NBT data, JSON format and Bukkit material type.  
⚠ Permission required for command: `luckyblock.command.iteminfo`
* `/ntdluckyblock customitemslist` - Command to get all enabled Custom items list for further using in
customitemget command or legacy format  
⚠ Permission required for command: `luckyblock.command.customitemslist`
* `/ntdluckyblock customitemget <name>` - Command to get custom item by name. If item was registered by
LuckyBlock plugin it could be a simple item name, but if this plugin was registered by an addon, you should
pass full item id `plugin-itemname` (For instance, `ntdluckyblock-magic_wool`)  
⚠ Permission required for command: `luckyblock.command.customitemget`
* `/ntdluckyblock itemtojson` - **`Outdated`** command for premium version only.
Use `/ntdluckyblock iteminfo -tag`

### Shop and edit GUI command
* `/ntdluckyblock gui <shop/edit>` - Command to open shop or edit gui (Edit gui is available in premium
version only)  
⚠ Permission required for command: `luckyblock.command.gui` and `luckyblock.command.gui.<type>`
(For instance, `luckyblock.command.gui.shop`)