var guestList = [
    "sikandar",
    "Shehroz",
    "Asif",
];
var guestIndexToRemove = 1; // Index of the guest who can't make it
var newGuest = "Dawar"; // New guest to invite
if (guestIndexToRemove >= 0 && guestIndexToRemove < guestList.length) {
    var removedGuest = guestList[guestIndexToRemove];
    guestList[guestIndexToRemove] = newGuest;
    console.log("Unfortunately, ".concat(removedGuest, " can't make it to the dinner."));
}
// Additional guests to invite
var additionalGuests = [
    "Kamran",
    "Faizan",
    "Taha",
];
// Add additional guests to the guest list
guestList.push.apply(guestList, additionalGuests);
console.log("---- Updated Guest List ----");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great food and delightful conversations."));
});
