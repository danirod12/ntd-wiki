# Config setup

- Inform about updates  
`inform-about-update: true`
:::info
Command "/ntdluckyblock checkforupdates" will ignore this option
:::

- Message when SpigotMC servers is unavailable  
`web-unavailable-disable: false`

- Schedule update checker (Check updates each X time)  
`scheduled-update-check: true`

- Select language. ([Build in languages, click](../languages))  
`language: en`

- Prevent players to equip luckyblocks to head like armor context (skulls)  
`prevent-hat-luckyblocks: true`

- Disable plugin name and version for commands  
`reduce-command-author-info: false`
:::caution
This feature will use more RAM. Not much really  
*When player perform command first time plugin name will still appear*
:::

- You can disable per color permission  
`permission-for-each-give-get: true`
:::info
**false** - Permission `luckyblock.get` for all luckyblocks  
**true** - Permission `luckyblock.get.color` (Example: `luckyblock.get.red`) per color
:::

- You can disable per color permission for *gui get* (shop)  
`permission-for-each-gui-get: true`
:::info
**false** - Permission `luckyblock.gui.get` for all luckyblocks  
**true** - Permission `luckyblock.gui.get.color` (Example: `luckyblock.gui.get.red`) per color
:::

- You can disable permissions checking for breaking  
`break-permissions: true`
:::info
If set to **true**, permission is `luckyblock.break.color` or `luckyblock.break.*`
:::

- Fully disable plugin name, version and author name for all commands  
`disable-author-info: false`
:::caution
Only *premium version* feature
:::

- Check for available convertions (Disable join spam message that you can convert items)  
`disable-json-convert-checking: false`

- Skip exceptions for broken entry drops from LBFactory/manually edits  
`skip-factory-broken: true`

- LuckyBlocks matching logic  
`place.verify-UUID: true` - checks if placing skull UUID matchs with origin LuckyBlock UUID  
`place.verify-TAG: true` - checks if placing skull contains NBT tag compound luckyblock_type
:::danger
Change only if you know what you are doing  
**This feature not recommended for most users**  
*If set both to `false` that will break all luckyblocks*
:::
`place.convert-factory: false`
:::info
Not needed. Enable it if you have used my plugin before 2.4.3  
This will check joining players inventories and all container change events  
to replace old LuckyBlock items (Name & UUID) to new one (Tag & UUID)  
**This feature will use more server resources**
:::

- Enabled LuckyBlock types  
`enabled: [black, blue, brown, cyan, gray, green, light_blue, light_gray, lime, magenta,
orange, pink, purple, red, white, yellow, tinted, iced]`
:::info
`ICED` and `TINTED` LuckyBlocks are available only in *premium version*. 
Moreover, for `TINTED` you need MC 1.17+
:::

- System options  
`config-level: "1.11"` - **1.11** is latest. If you have this version you can delete this line  
`debug: false` - Enable only if plugin's author request it!