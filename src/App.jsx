import React, {Fragment} from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Add from "./pages/add/Add.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Message from "./pages/message/Message.jsx";
import "./app.scss";


const App = () => {

    const Layout = () => {
        return (
            <div className='app'>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path:'/',
                    element:<Home />
                },
                {
                    path:'/gigs',
                    element:<Gigs />
                },
                {
                    path:'/gig/:id',
                    element:<Gig />
                },
                {
                    path:'/orders',
                    element:<Orders />
                },
                {
                    path:'/myGigs',
                    element:<MyGigs />
                },
                {
                    path:'/add',
                    element:<Add />
                },
                {
                    path:'/messages',
                    element:<Messages />
                },
                {
                    path:'/message/:id',
                    element:<Message />
                }
            ]
        },
    ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
};

export default App
