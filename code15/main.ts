const guestList: string[] = [
  "sikandar",
  "Shehroz",
  "Asif",
];

const guestIndexToRemove = 1; // Index of the guest who can't make it
const newGuest = "Dawar"; // New guest to invite

if (guestIndexToRemove >= 0 && guestIndexToRemove < guestList.length) {
  const removedGuest = guestList[guestIndexToRemove];
  guestList[guestIndexToRemove] = newGuest;
  console.log(`Unfortunately, ${removedGuest} can't make it to the dinner.`);
}

// Additional guests to invite
const additionalGuests: string[] = [
  "Kamran",
  "Faizan",
  "Taha",
];

// Add additional guests to the guest list
guestList.push(...additionalGuests);

console.log("---- Updated Guest List ----");
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great food and delightful conversations.`);
});
