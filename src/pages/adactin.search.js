export default class SearchPage {
 
  constructor(page) {
    this.page = page;
    this.locationDropdown = page.locator('//select[@id="location"]');
    this.hoteldropdown = page.locator('//select[@id="hotels"]');
    this.roomtype = page.locator('//select[@id="room_type"]');
    this.numberofrooms = page.locator('//select[@id="room_nos"]');
    this.adults = page.locator('//select[@id="adult_room"]');
    this.searchbutton = page.locator('//input[@id="Submit"]');
    this.radiobutton = page.locator('//input[@id="radiobutton_0"]');
    this.continuebutton = page.locator('//input[@id="continue"]');
  }

  async selectlocation(location) {
    await this.locationDropdown.selectOption({ label: location });
  }
  async selecthotel(hotel) {
    await this.hoteldropdown.selectOption({ label: hotel });
  }
  async selectroomtype(type) {
    await this.roomtype.selectOption({ label: type });
  }
  async selectnumberofrooms(unit) {
    await this.numberofrooms.selectOption({ label: unit });
  }
  async selectadultsroom(adultscount) {
    await this.adults.selectOption({ label: adultscount });
  }
  async clickingsearchbutton() {
    await this.searchbutton.click();
    await this.page.waitForTimeout(3000);
  }
}