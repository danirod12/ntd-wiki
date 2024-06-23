# Crafts

In free version there is only limited amount of crafts, but in premium version you can create custom crafts

### Basic crafts
* Crafting with color and gold. Any dye in center slot and 8 gold ingots
![Craft table](https://imgur.com/TD8EqmN.png)  
⚠ Permission required for craft: `luckyblock.craft.<type>` (For instance, `luckyblock.craft.yellow`)
* Coloring already created LuckyBlock. Any LuckyBlock and any dye
![Craft table](https://imgur.com/kBCUQwb.png)  
⚠ Permission required for craft: `luckyblock.dye.<type>` (For instance, `luckyblock.dye.yellow`)

### Custom crafts (Premium version)
This file should be created inside `./plugins/ntdLuckyBlock/crafts/<color>/`.  
For instance, if we want a craft for YELLOW one `./plugins/ntdLuckyBlock/crafts/yellow/example.yml`
:::warning
You should enable custom crafts inside your LuckyBlock configuration
`./plugins/ntdLuckyBlock/luckyblocks/<color>.yml`  
For above example set `craft.custom: true` inside `./plugins/ntdLuckyBlock/luckyblocks/yellow.yml`
:::
```yml title="example.yml"
permissions:
  # If set to true LuckyBlock NTD will check if player have permission for craft
  enabled: true
  # Permission node that will be checked
  node: "luckyblock.craft.example"

# Matrix - craft matrix 3 x 3
# If set to true items can be in any order like that:
#                                        [][          ][]    [iron ingot][][]
#                                        [][iron ingot][] or [          ][][]
#                                        [][          ][]    [          ][][]
# If set to false craft will be allowed in specific matrix (Like sword craft)
#                                     [cobblestone][cobblestone][cobblestone]     ([cobblestone][cobblestone][cobblestone]            )
#                                     [           ][   stick   ][           ]     ([   stick   ][   stick   ][           ] not allowed)
#                                     [           ][   stick   ][           ]     ([           ][           ][           ]            )
anyMatrix: false

# Item types - (EMPTY, MATERIAL, LUCKYBLOCK, DYE)
#   "EMPTY"
#   "MATERIAL : https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
#   "LUCKYBLOCK : COLOR" or ("LUCKYBLOCK : ANY" for any LuckyBlock)
#   "DYE : https://hub.spigotmc.org/javadocs/spigot/org/bukkit/DyeColor.html" or ("DYE : RESULT" for dye color of craft result luckyblock)
matrix:
  layer1:
    item1: "MATERIAL : DIAMOND"
    item2: "MATERIAL : DIAMOND"
    item3: "MATERIAL : DIAMOND"
  layer2:
    item1: "MATERIAL : DIAMOND"
    item2: "DYE : RESULT"
    item3: "MATERIAL : DIAMOND"
  layer3:
    item1: "MATERIAL : DIAMOND"
    item2: "MATERIAL : DIAMOND"
    item3: "MATERIAL : DIAMOND"
```
I think that this `example.yml` clearly describes what you should do.  
