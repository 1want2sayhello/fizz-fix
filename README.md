
# Fizz Fix | Soda Shop UI Demo 🥤


Fizz Fix is a responsive soda shop UI demo for browsing specialty drinks, building an order, and finding nearby store locations.

Built with React, it features a category-driven drink menu, persistent cart state, interactive Mapbox locations, reusable ordering components, responsive layouts, and accessible semantic controls.

Live Link 🔗: [to be added]

## Key Features 🔑

- Browse a responsive drink menu organized by category with featured selections
- Add drinks to an order and manage item quantities through a centralized cart
- Persist cart contents between sessions using local storage
- Find store locations through an interactive Mapbox map and select locations for more information
- Navigate responsive desktop and mobile interfaces with accessible, semantic controls
- Experience a cohesive ordering interface built from reusable menu, cart, navigation, and location components

## Technical Highlights 💡

#### Cart State Management

Fizz Fix uses React Context with `useReducer` to centralize cart operations such as adding, removing, and updating item quantities. Cart data is persisted locally so an order survives page refreshes.

#### Data-Driven Menu

Menu content is rendered from structured product data rather than hard-coded components, allowing the same UI components to support multiple drink categories and products.

#### Location Discovery

The locations experience integrates Mapbox to connect store information with an interactive map. Selecting a location updates the map while keeping location actions accessible through native HTML controls.

#### Component Architecture

Reusable components handle repeated UI patterns such as menu cards, quantity controls, navigation, and location cards while SCSS Modules keep component styling scoped.
## Tech Stack & Tools 🥞 🔧
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)

![JavaScript](https://img.shields.io/badge/JavaScript-20232A?style=flat-square&logo=javascript&logoColor=F7DF1E)

![SCSS Modules](https://img.shields.io/badge/SCSS_Modules-20232A?style=flat-square&logo=sass&logoColor=CC6699)

![React Router](https://img.shields.io/badge/React_Router-20232A?style=flat-square&logo=reactrouter&logoColor=CA4245)

![Mapbox](https://img.shields.io/badge/Mapbox-20232A?style=flat-square&logo=mapbox&logoColor=white)

![Context API + useReducer](https://img.shields.io/badge/Context_API_%2B_useReducer-20232A?style=flat-square&logo=react&logoColor=61DAFB)


![Vite](https://img.shields.io/badge/Vite-20232A?style=flat-square&logo=vite&logoColor=646CFF)
## Getting Started 🚀

```bash
npm install
npm run dev
```
