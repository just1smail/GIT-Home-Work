import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import { Abu, Bilol, Far, Home, Ismoil, Login, Lut, Maryam, Saf, SingUp, Umar } from './routes/routes'

const App = () => {


    // Translation 

    // import { useTranslation } from 'react-i18next';


    // const {t, i18n} = useTranslation();
    // function TranslateClick(lang) {
    //     i18n.changeLanguage(lang);
    // }


    let router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children: [

          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Home />
              </Suspense>
            ),
          },

          {
            path: "/abubakrshoh",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Abu />
              </Suspense>
            ),
          },

          {
            path: "/bilol",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Bilol />
              </Suspense>
            ),
          },

          {
            path: "/faruh",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Far />
              </Suspense>
            ),
          },

          {
            path: "/ismoil",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Ismoil />
              </Suspense>
            ),
          },

          {
            path: "/lutfullo",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Lut />
              </Suspense>
            ),
          },

          {
            path: "/maryam",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Maryam />
              </Suspense>
            ),
          },

          {
            path: "/safialloh",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Saf />
              </Suspense>
            ),
          },

          {
            path: "/umar",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Umar />
              </Suspense>
            ),
          },

          {
            path: "/login",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <Login />
              </Suspense>
            ),
          },
  
          {
            path: "/singUp",
            element: (
              <Suspense
                fallback={
                  <div className="w-[100%] h-[100%] bg-black text-white text-[100px] text-center">
                    Loading...
                  </div>
                }
              >
                <SingUp />
              </Suspense>
            ),
          },

        ],
      },
    ])


  return (<RouterProvider router={router}></RouterProvider>)
}

export default App