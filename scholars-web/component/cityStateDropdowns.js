import { useState } from 'react';

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Bhopal", "Patna", "Ludhiana", "Agra", "Nashik", "Vadodara", "Faridabad", "Madurai", "Jamshedpur", "Navi Mumbai", "Aurangabad", "Solapur", "Srinagar", "Chandigarh", "Coimbatore", "Jodhpur", "Raipur", "Guwahati", "Mangalore", "Amritsar", "Ghaziabad", "Kochi", "Ajmer", "Mysore", "Dehradun", "Bhubaneswar", "Udaipur", "Bareilly", "Jalandhar", "Guntur", "Tiruchirappalli", "Bhiwandi", "Saharanpur", "Gorakhpur", "Gulbarga", "Rajkot", "Hubli–Dharwad", "Bikaner", "Thrissur", "Durgapur", "Nanded", "Sangli", "Tirupati", "Hisar", "Mirzapur", "Vijayawada", "Rourkela", "Nellore", "Amravati", "Bellary", "Kurnool", "Akola", "Salem", "Aligarh", "Gaya", "Jalgaon", "Panvel", "Darbhanga", "Baranagar", "Purnia", "Satna", "Mau", "Sonipat", "Farrukhabad", "Sagar", "Rae Bareli", "Kalyan-Dombivali", "Machilipatnam", "Ballia", "Pilibhit", "Etawah", "Bongaigaon", "Tenali", "Bankura", "Khardaha", "Hindupur", "Raiganj", "Jorhat", "Bettiah", "Shahdol", "Chandannagar", "Bhadreswar", "Haldwani", "Osmanabad", "Nadiad", "Sasaram", "Saharsa", "Suryapet", "Wardha", "Rajahmundry", "Pollachi", "Murwara", "Korba", "Khandwa", "Ashokenagar-Kalyangarh", "Bhimavaram", "Ambikapur", "Palghar"];
  
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="city_field">
          City
        </label>
        <select
          className="form-select"
          id="city_field"
          value={city}
          onChange={handleCityChange}
        >
          <option value="">--Select a City--</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="state_field">
          State
        </label>
        <select
          className="form-select"
          id="state_field"
          value={state}
          onChange={handleStateChange}
        >
          <option value="">--Select a State--</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
