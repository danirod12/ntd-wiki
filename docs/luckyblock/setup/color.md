# LuckyBlock setup

:::warning
This wiki page was imported from **old GitHub wiki**. *Work in progress on making a new one*
:::

## Custom texture

You can set custom texture for my luckyblocks. By default, luckyblocks have build-in textures that can be found here

Texture format is unique id from skull url (Example: `8534b17d2d3b5a64c57f5f080dd777945761d9f71d82e8f599f242976e4d0c05`).  
You can find it at the bottom of the heads page at [minecraft-heads.com](https://minecraft-heads.com)

:::caution
Incorrect texture will convert luckyblock to steve
:::

## Custom name and lore

- You can set custom name (Item name) for my luckyblocks. By default it is `&<color_code><COLOR_NAME> LuckyBlock`.   
Enter new name to `name` field like `name: "&4My cool luckyblock name"`. You can use same names to all luckyblocks. You can use colors with `&` symbol

- You can also change custom system name (Will be used as a color for give commands and more).  
Enter new name to `custom_name` field like `custom_name: "YELLOW"`
:::tip
Do not use colors for system name
:::

- You can change lore. Enter new lore to `lore` field:
  ```
  lore:
  - "&7Place me :D"
  - "&7I am a luckyblock &6^_^"
  ```

## Shop & options

You can buy luckyblocks using command `/ntdluckyblock gui get`. Setup:  
- You can toggle luckyblocks from shop by setting `shop: false`.  
- You can toggle luckyblock cost by setting `price: <amount>` (Example: `price: 250`)  
- You can disable economy per luckyblock by `eco: false`. LuckyBlock will be available for free  

:::info
If shop is not working check permissions `luckyblock.gui.get` or `luckyblock.gui.get.color` based on your config setup
:::

## Drop formats

- **Legacy (free version) style:**  
You can add as many drops as you want.  
All LuckyDrops splited with unique names.  
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
  - You can find available descriptions at LuckyDrop types section. But before reading it you must familiarize with my arguments designations.  
  - I will use `[]` for required arguments and `<>` for not required arguments. I will use `<<>>` for unlimited/a large number of not required arguments.  
  - LuckyDrop format will represent `TYPE : [argument] : <argument> : <<arguments>>` All arguments will be splited with `:` (With two spaces)
:::

- **JSON (Premium version) style**  
Well, you can add luckydrops using legacy format and convert to JSON style using command `/ntdluckyblock convert`  
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
The main logic part you should understand
:::

### CommandDrop (`COMMAND`)
- Arguments map: `[command]`
- Description example: `"COMMAND : say Hello %player%!"`
- Additional Information: You can use `%player%` placeholder that will return player name if luckyblock broken by player
### ConsoleDrop (`CONSOLE`)
- Arguments map: `[command]`
- Description example: `"CONSOLE : give %player% diamond"`
- Additional Information: You can use `%player%` placeholder that will return player name if luckyblock broken by player
### EntityDrop (`ENTITY`)
- Arguments map: `[entity type] <amount>`
- Description example: `"ENTITY : GHAST"`, `"ENTITY : GHAST : 4"`
- Additional Information: You can find entity types [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
### ItemDrop (`ITEM`)
- Arguments map: `[material] [amount] [data] <name> <<[enchantment] [level]>>`
- Description example: `"ITEM : IRON_SWORD : 1 : 0"`, `"ITEM : IRON_SWORD : 1 : 0 : Iron sword : DAMAGE_ALL : 2"`
- Additional Information: For 1.8 - 1.12 servers data will change multiblock types (Wool color (Example `WOOL : 1 : 14` - one red wool), stone type) and also tools corruption. For 1.13+ servers you must provide data "0" for all blocks and corruption amount for tools. 
### LuckyItemDrop (`LUCKY_BLOCK_ITEM`)
- Arguments map: `[type] <amount>`
- Description example: `"LUCKY_BLOCK_ITEM : BLUE : 2"`, `"LUCKY_BLOCK_ITEM : RANDOM"`, `"LUCKY_BLOCK_ITEM : BLACK"`
### MessageDrop (`MESSAGE`)
- Arguments map: `[message]`
- Description example: `"MESSAGE : Hello %player%!"`
- Additional Information: You can use `%player%` placeholder that will return player name if luckyblock broken by player
### SchematicDrop (`SCHEMATIC`)
- Arguments map: `[file] [type]`
- Description example: `"SCHEMATIC : bedrock_problem : BLOCK"`, `"SCHEMATIC : cage_lava : PLAYER"`
- Additional Information: Schematic have two types `BLOCK` and `PLAYER`. This is responsible for where the schematic will be inserted.
### SpecialDrop (`SPECIAL`) _Note for API: no class SpecialDrop will be presented. Use TypeSpecial classes_
- Arguments map: `[special type] arguments...?`
- Special types and description for each:
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
### WitchAttackSpecial (`WITCH_ATTACK`)
- Special arguments map: `<bats amount>`
- Description example:  `"SPECIAL : WITCH_ATTACK : 4"`, `"SPECIAL : WITCH_ATTACK"`
