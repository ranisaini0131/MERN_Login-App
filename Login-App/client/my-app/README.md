How to use vite in React project

How to initialize your project by tailwind.css
-> go to tailwind.css official website
-> Get started
-> framework guide
-> select vite or cra if you are using cra
-> then install dependencies follow the instructions

React router dom
-> install react-router-dom
-> in App.jsx file import createBrowserRouter, RouterProvider from react-router-dom
-> create a variable named router and initialize it with an array of object named createBrowserRouter()
const router = createBrowserRouter([
{
path: '/',
element:<div>Root Router</div>
},
{
path: '/register',
element:<div>Register Router</div>
}
])

->then in app function
return (
<main>
<RouterProvider router={router}></RouterProvider>
</main>

)
