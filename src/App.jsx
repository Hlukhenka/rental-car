import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Catalog from 'pages/Catalog/Catalog';

import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Favorite from './pages/Favorite/Favorite';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
