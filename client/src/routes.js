import AdminMain from "./pages/AdminMain"
import AllPets from "./pages/AllPets"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import PersonalCabinet from "./pages/PersonalCabinet"
import Requests from "./pages/Requests"
import SomeForm from "./pages/SomeForm"
import Statistics from "./pages/Statistics"
import Error from "./pages/Error"
import { ACCEPTED_REQUESTS_ROUTE, ADMIN_MAIN_ROUTE, ALL_CATS_ROUTE, ALL_DOGS_ROUTE, APPROVED_REQUESTS_ROUTE, REQUESTS_ROUTE, CLIENT_STATISTICS_ROUTE, STATISTICS_ROUTE, DONATION_ROUTE, DONATION_STATISTICS_ROUTE, GIVE_PET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PERSONAL_CABINET_ROUTE, REGISTRATION_ROUTE, REJECTED_REQUESTS_ROUTE, TAKE_CAT_ROUTE, TAKE_DOG_ROUTE,ERROR_ROUTE } from "./utils/consts"

export const userRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ALL_CATS_ROUTE,
        Component: AllPets
    },
    {
        path: ALL_DOGS_ROUTE,
        Component: AllPets
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PERSONAL_CABINET_ROUTE + '/:id',
        Component: PersonalCabinet
    },
    {
        path: TAKE_CAT_ROUTE + '/:id',
        Component: SomeForm
    },
    {
        path: TAKE_DOG_ROUTE + '/:id',
        Component: SomeForm
    },
    {
        path: GIVE_PET_ROUTE,
        Component: SomeForm
    },
    {
        path: DONATION_ROUTE,
        Component: SomeForm
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
    {
        path: ADMIN_MAIN_ROUTE,
        Component: AdminMain
    },
    {
        path: REQUESTS_ROUTE,
        Component: Requests
    },
    {
        path: ACCEPTED_REQUESTS_ROUTE,
        Component: Requests
    },
    {
        path: APPROVED_REQUESTS_ROUTE,
        Component: Requests
    },
    {
        path: REJECTED_REQUESTS_ROUTE,
        Component: Requests
    },
    {
        path: STATISTICS_ROUTE,
        Component: Statistics
    },
    {
        path: CLIENT_STATISTICS_ROUTE,
        Component: Statistics
    },
    {
        path: DONATION_STATISTICS_ROUTE,
        Component: Statistics
    }
]

/*export const adminRoutes = [
    
    {
        path: ERROR_ROUTE,
        Component: Error
    }
]*/