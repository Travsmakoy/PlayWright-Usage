import { BasePage } from "./BasePage.js";

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryContainer = ".inventory_list";
  }

  async isInventoryVisible() {
    return await this.isVisible(this.inventoryContainer);
  }
}
