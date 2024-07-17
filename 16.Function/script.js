const data = [
    {
      iso2: "AF",
      iso3: "AFG",
      country: "Afghanistan",
      cities: [
        "Herat",
        "Kabul",
        "Kandahar",
        "Molah",
        "Rana",
        "Shar",
        "Sharif",
        "Wazir Akbar Khan",
      ],
    },
    {
      iso2: "AL",
      iso3: "ALB",
      country: "Albania",
      cities: [
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        "Tirana",
        "Ura Vajgurore",
      ],
    },
    {
      iso2: "DZ",
      iso3: "DZA",
      country: "Algeria",
      cities: [
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Blida",
        "Bordj",
        "Bordj Bou Arreridj",
        "Bougara",
        "Cheraga",
        "Chlef",
        "Constantine",
        "Djelfa",
        "Draria",
        "El Tarf",
        "Hussein Dey",
        "Illizi",
        "Jijel",
        "Kouba",
        "Laghouat",
        "Oran",
        "Ouargla",
        "Oued Smar",
        "Relizane",
        "Rouiba",
        "Saida",
        "Souk Ahras",
        "Tamanghasset",
        "Tiaret",
        "Tissemsilt",
        "Tizi",
        "Tizi Ouzou",
        "Tlemcen",
      ],
    },
    {
      iso2: "AD",
      iso3: "AND",
      country: "Andorra",
      cities: [
        "Andorra la Vella",
        "Canillo",
        "Encamp",
        "Engordany",
        "Escaldes-Engordany",
        "La Massana",
        "Llorts",
        "Ordino",
        "Santa Coloma",
        "Sispony",
        "Soldeu",
      ],
    },
    {
      iso2: "AO",
      iso3: "AGO",
      country: "Angola",
      cities: [
        "Ambriz",
        "Benguela",
        "Cabinda",
        "Cacole",
        "Camabatela",
        "Cazeta",
        "Huambo",
        "Kuito",
        "Lobito",
        "Luanda",
        "Lubango",
        "Lucapa",
        "Lumeje",
        "Malanje",
        "Menongue",
        "Muxaluando",
        "Namibe",
        "Ondjiva",
        "Piri",
        "Saurimo",
        "Talatona",
      ],
    },
    {
      iso2: "AI",
      iso3: "AIA",
      country: "Anguilla",
      cities: [
        "The Valley",
        "Blowing Point Village",
        "Sandy Ground Village",
        "Sandy Hill",
        "East End Village",
        "George Hill",
        "Island Harbour",
        "North Hill Village",
        "North Side",
        "South Hill Village",
        "Stoney Ground",
        "Farrington",
        "The Quarter",
        "West End Village",
      ],
    },
  ];

//    function getCountryNames(data) {
//     return data.map(region => region.country);
//   }
  
// //   console.log(getCountryNames(data));


  
/*function getCountriesByLetterCount(data) {
    const countryNames = getCountryNames(data);
    const letterCount = {};
  
    countryNames.forEach(country => {
      const firstLetter = country[0];
      if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
      } else {
        letterCount[firstLetter] = 1;
      }
    });
  
    return letterCount;
  }
  
  console.log(getCountriesByLetterCount(data));
  

   function getCountryNames(data) {
    return data.map(region => region.country);
  }
  
   console.log(getCountryNames(data));*/
  


//   function getCountry(data) {
//     let maxCity = 0;
//     let countryHaveMostCities = '';
  
//     data.forEach(region => {
//       if (region.cities.length > maxCity) {
//         maxCity = region.cities.length;
//         countryHaveMostCities = region.country;
//       }
//     });
  
//     return countryHaveMostCities;
//   }
  
//    console.log(getCountry(data));
  
  

  
 /* function getCitiesOfLongestCountryName(data) {
    let longestName = 0;
    let cities = [];
  
    data.forEach(place => {
      if (place.country.length > longestName) {
        longestName = place.country;
        cities = place.cities;
      }
    });
  
    return cities;
  }
  
  console.log(getCitiesOfLongestCountryName(data));*/
  





  /*function getCountryAndCities(data) {
    const result = {};
  
    data.forEach(place => {
      result[place.country] = place.cities.length;
    });
  
    return result;
  }
  
  console.log(getCountryAndCities(data));*/
  