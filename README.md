# Weather App + Fantasy City Of OZZ

This project is a React-based weather application that fetches real-time weather and wiki data for cities using external APIs.  
To demonstrate understanding of mock APIs, custom data handling, and modular styling, the project also includes a fully fictional city: **Ozz**, a magical floating city with its own weather, wiki page, and image.

---
## Features

* Search for real-world cities and view:
	* Temperature
	* Weather condition
	* City Description (via Wikipedia API)
  
* **Custom Fantasy City: OZZ**
	* Mock API data stored locally (`fantasyCity.js`)
	* Custom weather (unrealistic magical temperatures)
	* Custom wiki extract + image
	* Integrated into both `Weather.jsx` and `WikiPage.jsx`

* Modular card styling using **CSS Modules** (`CardStyle.module.css`)

* Navigation between:
	* Home(Weather)
	* Wiki Page (City details)


---
## The City of Ozz (Fantasy Feature)
To demonstrate mock API usage, the project includes a fictional city:

* **Custom coordinates**
* **Custom weather object**
* **Custom wiki extract**
* **Custom image (`city-of-ozz.png`)**
* Integrated seamlessly into the UI as if it were a real API response

This shows understanding of:
* API structure replication
* Conditional rendering
* Component integration
* Modular styling

---

## Project Structure

```Text
WEATHER-FRONT (ROOT folder)
	│
	├── public/
	│     └── assets/
	│           └── city-of-ozz.png
	│
	└──	src/
		 ├── assets/
		 ├── data/
		 │     └── fantasyCity.js
		 ├── pages/
		 │     ├── components/
		 │     │        ├── CityList.jsx
		 │     │        └── Weather.jsx
		 │     ├── HomePage/
		 │     │      └── HomePage.jsx
		 │     ├── WikiPage/
		 │     │       └──WikiPage.jsx
		 │     └── CardStyle.modules.css
		 └── utils/
			     └── api.js
```

### Alt code used for the Diagram

| Symbol | Alt Code  |
| ------ | --------- |
| └      | Alt + 192 |
| ├      | Alt + 195 |
| ─      | Alt + 196 |
| │      | Alt + 179 |
# Methods to view the project

## Offline Method

### Installation & Setup

#### Clone the repository

```shell
cd <yourFolder>
git clone https://github.com/samj296/weather-front.git
```

#### Install dependencies

These are the dependencies used in this project

```js
{
"dependencies":{
	"@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/material": "^9.0.1",
    "browser-router": "^0.2.0",
    "dotenv": "^17.4.2",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.15.1"
	}
}
```

use this command to install these dependencies

```shell
npm i
```

or

```shell
npm install
```


#### Start the development server

```shell
npm run dev
```

The app will run at:

```code
http://localhost:5173
```

## Online Method:

Copy paste the following link in the browser:

```link
https://weather-front-b45s.onrender.com/
```


# How to use
1) Search for any real city to view weather + wiki info
2) Select the Ozz to view the custom fantasy city
3) Click the card to navigate to the wiki page
4) Explore the modular styling and custom data integration

# Notes
* `fantasyCity.js` contains all mock API data for OZZ
* `CardStyle.module.css` demonstrates modular CSS usage
* The image `city-of-ozz.png` is stored in `/public/assets/`
* Weather and wiki pages both support custom city data