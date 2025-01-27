const nigeria = Object.seal({
    name: "Nigeria",
    capital: "Abuja",
    language: "English",
    population: "223,800,000",
    continent: "Africa",
    currency: "Naira",
    timezone: "UTC+1",
    area: "923,769 km²",
    callingCode: "+234",
    isIndependent: true,
    isLandlocked: false,
    isUNMember: true,
});

delete nigeria.currency;
nigeria.president = "Bola Ahmed Tinubu";
nigeria.language = "English, Hausa, Yoruba, Igbo";

console.log(nigeria);
