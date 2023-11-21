"use strict";(self.webpackChunkntd_wiki=self.webpackChunkntd_wiki||[]).push([[83],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),k=o,p=u["".concat(m,".").concat(k)]||u[k]||s[k]||i;return t?a.createElement(p,r(r({ref:n},d),{},{components:t})):a.createElement(p,r({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8990:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={},m="Commands",c={unversionedId:"luckyblock/commands",id:"luckyblock/commands",title:"Commands",description:"So, my plugin have some commands and here I'll try to describe all commands",source:"@site/docs/luckyblock/commands.md",sourceDirName:"luckyblock",slug:"/luckyblock/commands",permalink:"/ntd-wiki/docs/luckyblock/commands",draft:!1,editUrl:"https://github.com/danirod12/ntd-wiki/blob/master/docs/luckyblock/commands.md",tags:[],version:"current",frontMatter:{},sidebar:"luckyblock",previous:{title:"Overview",permalink:"/ntd-wiki/docs/luckyblock/overview"},next:{title:"Crafts",permalink:"/ntd-wiki/docs/luckyblock/crafts"}},d={},s=[{value:"System commands",id:"system-commands",level:3},{value:"LuckyBlock get commands",id:"luckyblock-get-commands",level:3},{value:"Item management commands (Custom items, NBT convert)",id:"item-management-commands-custom-items-nbt-convert",level:3},{value:"Shop and edit GUI command",id:"shop-and-edit-gui-command",level:3}],u={toc:s};function k(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"commands"},"Commands"),(0,i.kt)("p",null,"So, my plugin have some commands and here I'll try to describe all commands"),(0,i.kt)("p",null,"First I should mention that all commands are located behind one command as subcommands.\nMain plugin command is ",(0,i.kt)("inlineCode",{parentName:"p"},"/ntdluckyblock")," (With aliases ",(0,i.kt)("inlineCode",{parentName:"p"},"/lb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/luckyblock"),")"),(0,i.kt)("h3",{id:"system-commands"},"System commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock version")," - Command to get running version, last version from SpigotMC\n(So you will know that there is an update available), plugin type (premium or free),\ninternal build number, last update date (It may be wrong, because I change it manually),\nplugin author (Of course it is a danirod12 aka DenBeKKer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock checkforupdates")," - Command to check for updates. I am strongly convinced\nthat all my customers should run last version, because old versions may contain critical issues",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.checkforupdates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock support")," - Command to get URLs to my ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/vbYW3sperj"},"discord support server"),"\nand ",(0,i.kt)("a",{parentName:"li",href:"https://vk.com/danirodplay"},"VK (Russian)"),". Feel free to ask all questions",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock reload")," - Command to reload plugin (Reload config, language, all LuckyBlock instances,\nGUI manager, mineable config, bedwars configs and so on)",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.reload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock convert")," - Command for ",(0,i.kt)("em",{parentName:"li"},"premium version")," to convert all your LuckyBlock configs to",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.convert"),"\nJSON format. This action is required for edit GUI features",(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should convert all configs to JSON format in premium version. It is really important",(0,i.kt)("br",{parentName:"p"}),"\n","Since ",(0,i.kt)("inlineCode",{parentName:"p"},"2.7.5-99")," version all configs except default ones are generated in JSON format in premium version")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock destroy <chunk/radius>")," - Command to destroy broken LuckyBlocks (Floating head without\nglass). You should provide at least one argument that should be a radius-integer or word ",(0,i.kt)("inlineCode",{parentName:"li"},"chunk")," for chunk\nclear. You can also add ",(0,i.kt)("inlineCode",{parentName:"li"},"-all")," argument if you want to destroy all LuckyBlocks (Not only broken, but all)",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.destroy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock generate <type> <factory> <min> <max>")," - Regenerate config with new LuckyEntries. First argument -\nLuckyBlock type (For instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"yellow"),"), second argument - factory version (Recommended ",(0,i.kt)("inlineCode",{parentName:"li"},"latest"),"), third and last\nargument - min and max entry drops.\n\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.generate"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This command drops all setups inside LuckyBlock configuration. Prepare a backup"))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ntdluckyblock generate yellow latest 100 150")," will drop yellow configuration and insert\nfrom 100 to 150 entry drops")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock list")," - Command to get all LuckyBlocks statuses (Enabled or disabled, entries amount,\nrecipes amount ",(0,i.kt)("em",{parentName:"li"},"(Premium version contains a feature to all custom recipes for your LuckyBlocks)"),")",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.list"))),(0,i.kt)("h3",{id:"luckyblock-get-commands"},"LuckyBlock get commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock get <type/random> <amount>")," - Command to get LuckyBlocks. First argument - LuckyBlock type\n(LuckyBlock should be enabled and loaded) and the second optional argument is for amount",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.get")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.get.<type/random>"),"\n(If per color permission feature is enabled ",(0,i.kt)("a",{parentName:"li",href:"./setup/config"},"in config"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock give <name/all/world> <type/random> <amount>")," - Command to give LuckyBlocks. First argument\ncould be a player name or ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," word or ",(0,i.kt)("inlineCode",{parentName:"li"},"world")," word. Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"world")," argument could be used only from player\n(Not from console). As with get command, LuckyBlock should be loaded.",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.give")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.give.<type/random>"),"\n(If per color permission feature is enabled ",(0,i.kt)("a",{parentName:"li",href:"./setup/config"},"in config"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock place [world] <x> <y> <z> <type> [-silence]")," - Command to place LuckyBlock. World argument is optional\nif this command is executing from player. Otherwise, world argument is required. You can use offsets for\nx, y and z if command was used by a player (For instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"/lb place ~ ~-1 ~ yellow")," place YELLOW LuckyBlock\nunder the player). You can pass latest argument as ",(0,i.kt)("inlineCode",{parentName:"li"},"-silence")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-s")," and you will get no output (on console)",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.place")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.place.<type>"),"\n(Or with mask ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.place.*"),")")),(0,i.kt)("h3",{id:"item-management-commands-custom-items-nbt-convert"},"Item management commands (Custom items, NBT convert)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock iteminfo")," - Command to print holding in hand item info. This command checks if item is a\nCustomItem, checks if it is a LuckyBlock (Also, checks if this LuckyBlock is outdated), prints material\nBukkit type for legacy setup and if you add ",(0,i.kt)("inlineCode",{parentName:"li"},"-tag")," argument this command will also print item NBT tag and\nJSON format for premium version. Also, I have added a feature to write this output to file, because it is\nhard to copy something from chat. You can add ",(0,i.kt)("inlineCode",{parentName:"li"},"-write")," argument to get a file named ",(0,i.kt)("inlineCode",{parentName:"li"},"item-tags.txt")," with\nNBT data, JSON format and Bukkit material type.",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.iteminfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock customitemslist")," - Command to get all enabled Custom items list for further using in\ncustomitemget command or legacy format",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.customitemslist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock customitemget <name>")," - Command to get custom item by name. If item was registered by\nLuckyBlock plugin it could be a simple item name, but if this plugin was registered by an addon, you should\npass full item id ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin-itemname")," (For instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"ntdluckyblock-magic_wool"),")",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.customitemget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock itemtojson")," - ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Outdated"))," command for premium version only.\nUse ",(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock iteminfo -tag"))),(0,i.kt)("h3",{id:"shop-and-edit-gui-command"},"Shop and edit GUI command"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ntdluckyblock gui <shop/edit>")," - Command to open shop or edit gui (Edit gui is available in premium\nversion only)",(0,i.kt)("br",{parentName:"li"}),"\u26a0 Permission required for command: ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.gui")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.gui.<type>"),"\n(For instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"luckyblock.command.gui.shop"),")")))}k.isMDXComponent=!0}}]);