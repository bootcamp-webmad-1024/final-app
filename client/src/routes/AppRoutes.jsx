import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage.jsx'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './ProvateRoute.jsx'

const AppRoutes = () => {

    return (

        <div className="AppRoutes">

            <Routes>
                <Route path={'/'} element={<h1>INICIO</h1>} />
                <Route path={'/galeria'} element={<CoastersGalleryPage />} />
                <Route path={'/detalles/:id'} element={<CoasterDetailsPage />} />

                <Route path={'/registro'} element={<SignupPage />} />
                <Route path={'/inicio-sesion'} element={<LoginPage />} />

                <Route element={<PrivateRoute />} >
                    <Route path={'/crear'} element={<NewCoasterPage />} />
                    <Route path={'/perfil'} element={<ProfilePage />} />
                </Route>

            </Routes>

        </div>
    )
}

export default AppRoutes