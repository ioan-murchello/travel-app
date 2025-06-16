import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pircing";
import Map from "./pages/Map";
import City from "./components/City";
import Countries from "./pages/Countries";
import Cities from "./pages/Cities";
import Form from "./components/Form";

import { CountriesAndCitiesProvider } from "./context/CitiesContext";
import NotFound from "./pages/NotFound404";

const URL = "https://restcountries.com/v3.1/all?fields=name,capital,region";

function App() {
  return (
    <CountriesAndCitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
          </Route>

          <Route path="map" element={<Map />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="countries" element={<Countries />} />
            <Route path="cities" element={<Cities />} />
            <Route path="form" element={<Form />} />
            <Route path="cities/city/:id" element={<City />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CountriesAndCitiesProvider>
  );
}

export default App;
