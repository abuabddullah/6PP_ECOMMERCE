## 10_Frontend Environment setup, Overlay-navbar and Custom Webfont

### Frontend Setup : [04:42:00 - 04:46:00]
> _creating react app,_
 

>
>> এখানে **_creat-react-app_** command এর পরে কোণ folder এর নাম না দিয়ে **_dot(.)_** দেয়া হয়েছে যার ফলে react-app টা সরাসরি এই "6PP_ECOMMERCE/**_frontend_**" folder এই install হবে


1. terminal দিয়ে "6PP_ECOMMERCE/**_frontend_**" folder এ npm দিয়ে **react** app install করতে হবে 
####

```http
[[FOLDERNAME : 6PP_ECOMMERCE/frontend]
""""""""""""""""""""""""""""""""""""""""""""""""""
npx create-react-app .
```
####


2. আবারো terminal দিয়ে "6PP_ECOMMERCE/**_frontend_**" folder এ npm দিয়ে **axios, react-alert, react-alert-template-basic, react-helmet, redux, react-redux, redux-thunk, redux-devtools-extension, react-router-dom, overlay-navbar, react-icons** dependencies গুলো install করতে হবে । এর পর app টাকে command এর সাহায্যে start করতে হবে

>
>> **_overlay-navbar_**  কে কাজ করতে হলে অবশ্যই অবশ্যই **_react-icons & react-router-dom_** install থাকা লাগবে 

####
```http
[[FOLDERNAME : 6PP_ECOMMERCE/frontend]
""""""""""""""""""""""""""""""""""""""""""""""""""
npm i axios react-alert react-alert-template-basic react-helmet redux react-redux redux-thunk redux-devtools-extension react-router-dom overlay-navbar react-icons

npm start
```
####


3. এবার যেহেতু coding-practice এর সময় একই সাথে আমরা দুটা terminal on করব **_(fontend:3000 port, backend: 5000 port)_** তাই 6PP_ECOMMERCE/frontend/**_package.json_** file এ সবার শেষে **_proxy_** link add করে দিতে হবে

>
>> **_proxy_** link এর domain পাব **frontend terminal থেকে** শেষে শুদু **_backend port_** add হবে

```http
[[FOLDERNAME : 6PP_ECOMMERCE/frontend/package.json]
""""""""""""""""""""""""""""""""""""""""""""""""""
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "overlay-navbar": "^1.2.3",
    "react": "^18.2.0",
    "react-alert": "^7.0.3",
    "react-alert-template-basic": "^1.0.2",
    "react-dom": "^18.2.0",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.4.0",
    "react-rating-stars-component": "^2.2.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4",
    "webfontloader": "^1.6.28"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://192.168.0.104:5000"
}

```


### overlay-navbar : [04:46:00 - 4:49:46]

4. এবার **react-router** এর website এর নিয়ম অনুযায়ী 6PP_ECOMMERCE/frontend/src/**_index.js & App.js_** file এর **_"App"_** component কে যথাক্রমে **_BrowserRouter & Routes,Route_** দিয়ে wrapping করে নিতে হবে
5. **_overlay-navbar_** এর কাজ শুরু করার জন্য 6PP_ECOMMERCE/**_frontend_** folder এর ভিতরে frontend/src/component/layout/Header/**_Header.js_** file বানাতে হবে
6. এবার **_Header.js_** file এ **_ReactNavbar_** কে import করে নিয়ে তার ভিতরে requrirments অনুযায়ী **_options_** props কে add করতে হবে

>
>> **_overlay-navbar_**  এর **_options_** props দুভাবে লিখা যায়
>>> functional component এর বাহিরে **_options_** নামের একটা object variable declare করে তার ভিতরে key-value দিয়ে দিয়ে features গুলো define করব অবশেষে এই **_options_** variable কে **_ReactNavbar_** component এর ভিতরে **spread opt** সাহায্যে props আকের দিয়ে দিব
>>
>>> আরেকটা হচ্ছে features গুলোকে সরাসরি **_ReactNavbar_** component এর ভিতরে props আকের দিয়ে দিব
>>> 
>
>> **_overlay-navbar_**  এর **_options_** props এর key-value গুলো **_overlay-navbar_** library থেকে নিতে হবে

####
```http
[[FOLDERNAME : 6PP_ECOMMERCE/frontend/src/component/layout/Header/Header.js]
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
import React from 'react';
import { ReactNavbar } from "overlay-navbar"
import logo from "./../../../images/logo2.png"
import { FaCartPlus, FaSearch, FaUserAlt } from "react-icons/fa";  


const options = {
    burgerColorHover: "#eb4034", // এটা menuIcon এ hover effect দেয়

    
    // logo related options
    logo: logo,
    logoWidth: "20vmax",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",

    // navColor options
    navColor1: "rgba(35, 35, 35,.075)",
    navColor2: "rgba(35, 35, 35,.05)",
    navColor3: "rgba(35, 35, 35,.025)",
    navColor4: "rgba(35, 35, 35,.01)",
    
    // navContent postining options
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",

    // link related options
    link1Text: "Home",
    link1Url: "/",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    link2Text: "Products",
    link2Url: "/products",
    link3Text: "Contact",
    link3Url: "/contact",
    link4Text: "About",
    link4Url: "/about",


}


const Header = () => {
    return (
        <ReactNavbar {...options}
        
        // icons related optios
        profileIcon= {true} 
        ProfileIconElement= {FaUserAlt} 
        profileIconUrl= "/login" 
        profileIconColor= "rgba(35, 35, 35,0.8)"
        profileIconColorHover= "#eb4034"
        searchIcon= {true} 
        SearchIconElement= {FaSearch} 
        searchIconColor= "rgba(35, 35, 35,0.8)"
        searchIconColorHover= "#eb4034"
        cartIcon= {true} 
        CartIconElement= {FaCartPlus} 
        cartIconColor= "rgba(35, 35, 35,0.8)"
        cartIconColorHover= "#eb4034"
        cartIconMargin= "1vmax"
        />
    );
};

export default Header;
```
####


### Custom Webfont : [4:49:46 - 4:51:57]

>
>> _আমরা সরাসরি google এর font কে project এ linking না করে একটা npm package install করব যার সাহায্যে fonting handle করব_


1. এজন্য terminal দিয়ে "6PP_ECOMMERCE/**_frontend_**" folder এ npm দিয়ে **webfontloader** dependency কে install করতে হবে । এর পর app টাকে command এর সাহায্যে start করতে হবে 
####

```http
[[FOLDERNAME : 6PP_ECOMMERCE/frontend]
""""""""""""""""""""""""""""""""""""""""""""""""""
npm i webfontloader
```
####

2. এবার 6PP_ECOMMERCE/frontend/src/**_App.js_** file এ **_webfontloader_** কে import করে তারপর **_App()_** function এর ভিতরে **_useEffect_** সাহায্যে custom font কে project এ inject করতে হুবে
####

```http
[[FILEERNAME : 6PP_ECOMMERCE/frontend/src/App.js]
""""""""""""""""""""""""""""""""""""""""""""""""""
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";
import { useEffect } from 'react';

function App() {
  //loading font from webfontloader  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    });
  }, [])


  return (
    <div className="App">
      <h1>Welcome to 6 Pack Projects!</h1>
        <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;

```
####




