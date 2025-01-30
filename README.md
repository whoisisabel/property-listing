## 📌 **Property Finder**  
A modern **Vue 3** web application that displays property listings using the **Bayut API** from RapidAPI. Users can browse properties, view details, and sort listings by price or location.

## 🚀 **Features**
✅ Fetches real-time property listings from the **Bayut API**  
✅ Displays key property details: **price, location, house type, bedrooms, bathrooms and contact info**  
✅ **Sorting options**: Sort by **price** or **location**  
✅ **Fully responsive** design (desktop & mobile)  
✅ **Vue Router** for navigation  
✅ **Font Awesome** icons for property details  
✅ **Loading indicator** while fetching data  
✅ Deployed on **Netlify **  

## 🖥️ **Live Demo**
🔗 [[View the deployed project](https://property-listing-bayut.netlify.app/)](#) 

## 🛠️ **Tech Stack**
- **Vue 3 + Vite** ⚡
- **Vue Router**
- **Tailwind CSS**
- **Axios** (for API requests)
- **Font Awesome** (for icons)

## 🔧 **Installation & Setup**
### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/yourusername/property-listing.git
cd property-listing
```

### 2️⃣ **Install dependencies**
```sh
npm install
```

### 3️⃣ **Set up API Key**
- Sign up at **[RapidAPI](https://rapidapi.com/)**
- Subscribe to the **Bayut API**  
- Create a `.env` file and add:
  ```sh
  VITE_RAPIDAPI_KEY=your_api_key_here
  ```

### 4️⃣ **Run the app**
```sh
npm run dev
```
- Open `http://localhost:5173` in your browser.


## 📌 **Folder Structure**
```
/src
 ├── assets/           # Images, icons, and other static files
 ├── views/            # Main views/pages
 ├── router/           # Vue Router setup
 ├── utils/            # API calls
 ├── stores/           # API helper functions
 ├── App.vue           # Main app component
 ├── main.js           # Vue entry file
```

## 🔄 **API Integration**
All API requests are handled in `/src/utils/api.js`:
```js
import axios from "axios";

const BASE_URL = "https://bayut.p.rapidapi.com";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get("/properties/list", {
      params: {
        locationExternalIDs: "5002, 6020",
        purpose: "for-rent",
        hitsPerPage: 12,
        roomsMin:2
      },
    });
    return response.data.hits;
  } catch (error) {
    error.value = "Failed to fetch properties..";

    throw new Error(error);
  }
};
```
