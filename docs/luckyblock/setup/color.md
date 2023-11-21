# LuckyBlock setup

## Custom texture

You can set custom texture for LuckyBlocks. By default, LuckyBlocks have build-in textures that can be found there  
Texture format is unique id from skull url (Example: `8534b17d2d3b5a64c57f5f080dd777945761d9f71d82e8f599f242976e4d0c05`).  
You can find it at the bottom of the heads page at [minecraft-heads.com](https://minecraft-heads.com)

:::caution
Incorrect texture will break LuckyBlock texture to steve  
Sometimes minecraft client lags, please check texture from more than one pc if you suppose that custom texture  
is not working. It should work!
:::
:::warning
GeySer works bad with textures. We are not supporting GeySer. Texture may be a steve even with default setup
:::

Moreover, with premium version you can change item for LuckyBlock inside glass! (Config option `custom-head`)  
You should pass json format item to it (You can get this format using command `/lb ii -tag -write`,
[commands info](./../commands))
Example:
```yml
custom-head:
  enabled: true
  item: '{"type":"GOLD_BLOCK","amount":1,"tag":""}'
```
![gold block](https://imgur.com/IniIpGs.png)

You can create custom texture using resource pack.
It could be with animation: [video mirror](https://i.imgur.com/CVRcwu6.mp4)
<video src="https://i.imgur.com/CVRcwu6.mp4" autoplay muted controls loop></video>

## Custom name and lore

- You can set custom name (Item name) for LuckyBlocks. By default, it is `&<color_code><COLOR_NAME> LuckyBlock`.   
Enter new name to `name` field like `name: "&4My cool LuckyBlock name"`. You can use same names for all LuckyBlocks.
You can use colors with `&` symbol (Or hex using `&#rrggbb`)

- You can also change custom system name (Will be used as a color for give commands and more).  
Enter new name to `custom_name` field like `custom_name: "YELLOW"`
:::tip
Do not use colors for system name
:::

- You can change lore. Enter new lore to `lore` field:
  ```
  lore:
  - "&7Oh boy, place me :D"
  - "&7I am a LuckyBlock &6^_^"
  ```

## Shop & options

You can sell LuckyBlocks using command `/ntdluckyblock gui get`. Setup:  
- You can toggle LuckyBlock from being sold by setting `shop: false`.  
- You can toggle LuckyBlock's cost by setting `price: <amount>` (Example: `price: 250`)  
- You can toggle LuckyBlock's economy by setting `eco: false`. LuckyBlock will be available for free in the shop   

:::info
If shop is not working check permissions `luckyblock.gui.get` or `luckyblock.gui.get.<color>` based on your config setup
:::

## Drop formats

:::caution
If you came here and owning premium version, close this page and use `/ntdluckyblock gui edit`!  
This system is not a joke, you SHOULD use in-game editor only for setup in premium version  
Yes, you can still add drops using legacy style and convert in after, but it is kinda stupid. Only exception
I can make. Now premium in-game editor do not support schematics :( and you could add it using legacy format only,
but nothing else. **Please use in-game editor.**
:::

- **Legacy (free version) style:**  
You can add as many drops as you want.  
All LuckyDrops split with unique names.  
If you want to add new LuckyDrop you must add a new field `drop.number` and describe LuckyDrop using string list. Example:
  ```$xslt
  drop:
    '0':
    - description
    - description...
    '1':
    - description
    ...
  ```
:::tip
  - You can find available descriptions at LuckyDrop types section. But before reading it you must familiarize with 
 my arguments designations.  
  - I will use `[]` for required arguments and `<>` for not required arguments. I will use `<<>>` for unlimited/a
 large number of not required arguments.  
  - LuckyDrop format will represent `TYPE : [argument] : <argument> : <<arguments>>` All arguments will be split
 with ` `**`:`**` ` (`:` with two spaces each side)
:::

- **JSON (Premium version) style**  
:::warning
If you are from free version, skip JSON style, otherwise..
Please stop.. Use in-game editor.... If you are SO stubborn, you can use `/ntdluckyblock iteminfo`
(Read more at [commands page](./../commands)) to get JSON format for item holding in hand
:::
You can add LuckyDrops using legacy format and convert to JSON style using command `/ntdluckyblock convert`  
JSON format style example:
  ```$xslt
  drop:
    '0':
      chance: CHANCE
      items:
        '0':
          class: 'Clazz'
          json: '{Json class instance}'
        '1':
          class: 'Clazz'
          json: '{Json class instance}'
        ...
    '1':
      chance: CHANCE
      items:
        '0':
          class: 'Clazz'
          json: '{Json class instance}'
        ...
    ...
  ```

## LuckyDrop types

:::caution
Read careful all styles. Legacy format is made for free version and limited in functionalities.  
You cannot add NBT items and there may be some small issues, but you can anyway use free version,
it was developed with love (Originally I have not even planned premium version and legacy format was main)
:::

Topics below presents key type and arguments map, read style again:
:::tip
- You can find available descriptions at LuckyDrop types section. But before reading it you must familiarize with
  my arguments designations.
- I will use `[]` for required arguments and `<>` for not required arguments. I will use `<<>>` for unlimited/a
  large number of not required arguments.
- LuckyDrop format will represent `TYPE : [argument] : <argument> : <<arguments>>` All arguments will be split
  with ` `**`:`**` ` (`:` with two spaces each side)
:::

### CommandDrop (`COMMAND`)
Dispatch a command by a player
- Arguments map: `[command]`
- Description example: `"COMMAND : say Hello %player%!"`
- Additional Information: You can use placeholders in string-based drops, read more at the bottom on page
### ConsoleDrop (`OPPED`)
Dispatch a command by an opped player
- Arguments map: `[command]`
- Description example: `"OPPED : gamemode creative"`
- Additional Information: You can use placeholders in string-based drops, read more at the bottom on page
### ConsoleDrop (`CONSOLE`)
Dispatch a command by console
- Arguments map: `[command]`
- Description example: `"CONSOLE : give %player% diamond"`
- Additional Information: You can use placeholders in string-based drops, read more at the bottom on page
### EntityDrop (`ENTITY`)
Summon an entity
- Arguments map: `[entity type] <amount>`
- Description example: `"ENTITY : GHAST"`, `"ENTITY : GHAST : 4"`
- Additional Information: You can find entity types [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
### ItemDrop (`ITEM`)
Drop an item
- Arguments map: `[material] [amount] [data] <name> <<[enchantment] [level]>>`
- Description example: `"ITEM : IRON_SWORD : 1 : 0"`, `"ITEM : IRON_SWORD : 1 : 0 : Iron sword : DAMAGE_ALL : 2"`
- Additional Information: For 1.8 - 1.12 servers data will change multiblock types 
(Wool color (Example `WOOL : 1 : 14` - one red wool), stone type) and also tools corruption.
For 1.13+ servers you must provide data "0" for all blocks and corruption amount for tools. 
### CustomItemDrop (`CUSTOM_ITEM`)
Drop a custom item from LuckyBlock plugin (Or any other plugin hooked into mine)
- Arguments map: `[item id] <amount>`
- Description example: `CUSTOM_ITEM : magic_wool : 5`
- Additional Information: You can get custom items list using `/ntdluckyblock customitemslist`
### LuckyItemDrop (`LUCKY_BLOCK_ITEM`)
Drop a LuckyBlock as an item
- Arguments map: `[type] <amount>`
- Description example: `"LUCKY_BLOCK_ITEM : BLUE : 2"`, `"LUCKY_BLOCK_ITEM : RANDOM"`, `"LUCKY_BLOCK_ITEM : BLACK"`
- Additional Information: Check if your LuckyBlock is enabled (How we can drop a red LuckyBlock if it was disabled?)
### MessageDrop (`MESSAGE`)
Send a message to player
- Arguments map: `[message]`
- Description example: `"MESSAGE : Hello %player%!"`
- Additional Information: You can use placeholders in string-based drops, read more at the bottom on page
### SchematicDrop (`SCHEMATIC`)
- Arguments map: `[file] [type] <air>`
- Description example: `"SCHEMATIC : bedrock_problem : BLOCK"`, `"SCHEMATIC : big_house : PLAYER : true"`
- Additional Information: Schematic have two types `BLOCK` and `PLAYER`. This is responsible for where the schematic will be inserted.
- The last argument represents if schematic air will be pasted (When `true` it is same as WE command `//paste -a`)
:::tip
The name (Like `bedrock_problem`, `big_house`) is a name of schematic without format type in directory
`./plugins/ntdLuckyBlock/schematics/`. For instance, `bedrock_problem.schem`, `big_house.schematic`

### PigSpecial (`PIG`)
- Special arguments map: `<amount>`
- Description example:  `"SPECIAL : PIG"`, `SPECIAL : PIG : 4`
### WaterBucketSpecial (`WATER_BUCKET`)
- Special arguments map: `<height>`
- Description example:  `"SPECIAL : WATER_BUCKET : 64"`, `"SPECIAL : WATER_BUCKET"`
### LightningSpecial (`LIGHTNING`)
- Special arguments map: `<amount>`
- Description example:  `"SPECIAL : LIGHTNING : 4"`, `"SPECIAL : LIGHTNING"`
### DiamondColumnSpecial (`DIAMOND_COLUMN`)
- Special arguments map> `<<block material>>`
- Description example: `"SPECIAL : DIAMOND_COLUMN : RED_TERRACOTTA : YELLOW_TERRACOTTA : GREEN_TERRACOTTA : LIGHT_BLUE_TERRACOTTA : BLUE_TERRACOTTA : MAGENTA_TERRACOTTA"`
### ExperienceExplosionSpecial (`EXPERIENCE_EXPLOSION`)
- Special arguments map: `<amount>`
- Description example:  `"SPECIAL : EXPERIENCE_EXPLOSION : 4"`, `"SPECIAL : EXPERIENCE_EXPLOSION"`
### TntExplosionSpecial (`TNT_EXPLOSION`)
- Special arguments map: `<amount>`
- Description example:  `"SPECIAL : TNT_EXPLOSION : 4"`, `"SPECIAL : TNT_EXPLOSION"`
### TntColumnSpecial (`TNT_COLUMN`)
- Special arguments map: `<amount>`
- Description example:  `"SPECIAL : TNT_COLUMN : 4"`, `"SPECIAL : TNT_COLUMN"`
### WitchAttackSpecial (`WITCH_ATTACK`)
- Special arguments map: `<bats amount>`
- Description example:  `"SPECIAL : WITCH_ATTACK : 4"`, `"SPECIAL : WITCH_ATTACK"`

### Placeholders for commands and messages:
#### COMMAND, OPPED, CONSOLE, MESSAGE drops placeholders:
* `%world%` - World string name (Example: `world_the_end`)
* `%player%` - Player name (Example: `Danirod_Gaming`)  
#### COMMAND, OPPED, CONSOLE drops placeholders:  
Base location format is `%<player/block>_location[_above_<value>][_int]%`, more details:
* `%block_location%` - Location string (Example: `-121.5 63.5 99122.5`)
* `%block_location_int%` - Location rounded (Example: `-121 63 99122`) You possibly need this one ⚠
* `%player_location%` - Location string (Example: `-125.2787 64.1332 99123.8674`)
* `%player_location_int%` - Location string (Example: `-125 64 99123`) You possibly need this one ⚠
* `%<player/block>_location_above_<value>[_int]` - Location with offset of "value" blocks high  
(Example: origin location is `0 0.5 2.65`, with `%<player/block>_location_above_10%` you will get `0 10.5 2.65`,
with `%<player/block>_location_above_-1_int%` you will get `0 -1 2`)
* ~~`%location%`~~ - *Deprecated*. (Same as `%player_location%`)
