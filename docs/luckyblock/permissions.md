# Permissions

For breaking LuckyBlocks or getting it from mineable addon, or performing some commands  
you need a permissions manager plugin like [PermissionsEx](https://dev.bukkit.org/projects/permissionsex)
or [LuckPerms](https://luckperms.net/download) (Recommended)
:::tip
You can disable break permission requirement using [config](./setup/config)
:::

You can read about granting permissions nodes on plugin's wikis. (`/op <name>` grants all permissions)
:::tip
**LuckPerms** permission granting examples:
* Break pink LuckyBlock: `/lp group default permission set luckyblock.break.pink`
* Craft yellow LuckyBlock: `/lp group default permission set luckyblock.craft.pink`
* Execute reload command: `/lp user Danirod_Gaming permission set luckyblock.command.reload`
* You can find more examples at [official LuckPerms wiki](https://luckperms.net/wiki/Permission-Commands)
:::

### LuckyBlock Permissions
* `luckyblock.break.<color>` - Break LuckyBlocks permission (example: `luckyblock.break.red`)
or `luckyblock.break.*` for all
* `luckyblock.craft.<color>` - Craft LuckyBlocks permission (example: `luckyblock.craft.red`)
or `luckyblock.craft.*` for all
* `luckyblock.mineable.<material>` - Permission for getting LuckyBlocks by digging blocks
(example: `luckyblock.mineable.stone`) or `luckyblock.mineable.*` for all  
:::info
You should set up Mineable addon first. Mineable addon is a premium version feature
:::
* `luckyblock.place.disabled` - Permission to place LuckyBlock to disabled worlds
:::info
You can still disable this ability using `worlds.yml` option (`place-admins: false`)
:::

### Commands Permissions
Now you can check permissions in [commands list](./commands), but most often it is `luckyblock.command.<command>`  
(example: `luckyblock.command.reload` for `/ntdluckyblock reload`)
