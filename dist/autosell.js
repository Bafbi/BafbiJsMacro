(()=>{var n=class{inventory;constructor(e){Chat.say(`/${e}`),this.wait_new_inventory()}wait_new_inventory(){JsMacros.waitForEvent("OpenContainer");let e=JsMacros.waitForEvent("ContainerUpdate");this.inventory=e.event.inventory}wait_inventory_update(){let e=JsMacros.waitForEvent("ContainerUpdate");this.inventory=e.event.inventory}log_pretty_inventory(){let e=this.inventory.getContainerTitle()+`
`;for(let i=0;i<this.inventory.getTotalSlots();i++)e+=`${i}: ${this.inventory.getSlot(i).toString()}
`;Chat.log(e)}click_slot(e,i=0){this.inventory.click(e,i),Time.sleep(300)}change_page(e,i=0){this.inventory.click(e,i),this.wait_new_inventory()}click_item(e,i=0){let r=this.get_gui_size(),o=this.inventory.findItem(e).filter(c=>c<r);if(o.length===0){Chat.log(Chat.createTextBuilder().append("Item ").append(e).withColor(6).append(" not found in inventory").build());return}if(o.length>1){Chat.log(Chat.createTextBuilder().append("Item ").append(e).withColor(6).append(" found multiple items in inventory").build());return}this.click_slot(o[0],i)}close(){this.inventory.close()}get_gui_size(){let e={"6 Row Chest":54,"5 Row Chest":45},i=this.inventory.getType();return i in e?e[i]:0}};{let t=new n("shop");t.change_page(33,0),Time.sleep(200),t.click_item("minecraft:cobblestone",2),t.close()}Time.sleep(200);{let t=new n("shop minerais");t.click_item("minecraft:raw_iron",2),t.click_item("minecraft:raw_copper",2),Time.sleep(200),t.change_page(50,0),Time.sleep(200),t.click_item("minecraft:diamond",2),t.click_item("minecraft:lapis_lazuli",2),t.click_item("minecraft:emerald",2),t.click_item("minecraft:redstone",2),t.click_item("minecraft:raw_gold",2),t.click_item("minecraft:coal",2),t.close()}})();
