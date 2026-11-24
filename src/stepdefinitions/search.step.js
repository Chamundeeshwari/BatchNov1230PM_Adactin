import { Given , When ,Then } from "@cucumber/cucumber";


When('The user selecting the {string} in location dropdown', async function(location) {
 await this.searchPage.selectlocation(location)
  
});

When('The user selecting the {string} in hotels dropdown', async function(hotel) {
  await this.searchPage.selecthotel(hotel)
});

When('The user selecting the {string} in room type dropdown',  async function(type) {
 await this.searchPage.selectroomtype(type)
});

When('The user selecting the {string} in the numberof rooms dropdown', async function(unit) {
  await this.searchPage.selectnumberofrooms(unit)
});

When('The user selecting the {string} in the adults per room dropdown', async function(adultscount) {
    await this.searchPage.selectadultsroom(adultscount)
});

When('The user click the search button', async function() {
  await this.searchPage.clickingsearchbutton()
});

