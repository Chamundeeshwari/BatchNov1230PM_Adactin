import { Given , When ,Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


When('The Navigate to the search hotel page', async function() {
    await expect(this.page).toHaveURL(/\/SearchHotel/)
});

When('The user selecting the {string} in location dropdown', async function(location) {
  await this.searchPage.selectlocation()
});

When('The user selecting the {string} in hotels dropdown', async function(hotel) {
  await this.searchPage.selecthotel()
});

When('The user selecting the {string} in room type dropdown', async function(type) {
  await this.searchPage.selectroomtype()
});

When('The user selecting the {string} in the numberof rooms dropdown', async function(unit) {
  await this.searchPage.selectnumberofrooms()
});

When('The user selecting the {string} in the adults per room dropdown', async function(adults) {
  await this.searchPage.selectadultsroom()
});

When('The user click the search button', async function() {
  await this.searchPage.clickingsearchbutton()
});





























Given('user to selecting the location in  dropdown input field', async function() {
 await this.searchpage.selectlocation()
});

When('user to selecting the Hotels in dropdown input field', async function() {
  await this.searchpage.selecthotel()
});

When('user to selecting the Roomtypes in dropdown input field', async function() {
 await this.searchpage.selectroomtype()
});

When('user to selecting the Number of the romms dropdown input field', async function() {
  await this.searchpage.selectnumberofrooms()
});

When('user to set the check in date in input field', async function() {
 await this.searchpage.setcheckindate()
});

When('user to set the check out date in input field', async function() {
    await this.searchpage.setcheckoutdate()
});

When('user to selecting the Adults room in dropdown field', async function() {
    await this.searchpage.selectadultsroom()
});

When('user to selecting the Children room in dropdown field', async function() {
 await this.searchpage.selectchildrenroom()
});

When('user to clicking  the search button', async function() {
  await this.searchpage.clickingsearchbutton()
});

When('user to clicking the reset button', async function() {
  await this.searchpage.clickingressetbutton()
});

Then('user to saw the Adactin application Booking page', async function() {
    // await expect(this.page).toHaveTitle('Adactin.com - Select Hotel')
    // await expect(this.page).toHaveURL(/\/SelectHotel/)
});