# Permissions

For breaking, getting LuckyBlocks or some commands it's required a permission

You need a permissions manager like [PermissionsEx](https://dev.bukkit.org/projects/permissionsex) or [LuckPerms](https://luckperms.net/download)

You can read about granting permissions nodes on plugin's wikis

### LuckyBlock Permissions
* `luckyblock.break.color` - Break LuckyBlocks permission (example: `luckyblock.break.red`) or `luckyblock.break.*` for all colors
* `luckyblock.craft.color` - Craft LuckyBlocks permission (example: `luckyblock.craft.red`) or `luckyblock.craft.*` for all colors

### LuckyBlock (Premium) Permissions
* `luckyblock.breakget.*` - Permission for all blocks in Mineable addon
* `luckyblock.breakget.material` - Permission for Mineable addon splitted material (material name)

### Commands Permissions
* `luckyblock.command.*` - all commands
* `luckyblock.command.checkforupdates` - check for updates
* `luckyblock.command.support` - support
* `luckyblock.command.get` - get (`luckyblock.command.get.color`)
* `luckyblock.reload` - reload
* `luckyblock.command.give` - give (`luckyblock.command.give.color`)
* `luckyblock.command.list` - list
* `luckyblock.command.gui` - gui (`luckyblock.command.get`, `luckyblock.command.edit`)

LuckPerms permission granting example for breaking pink luckyblock: /lp group default permission set luckyblock.break.pink