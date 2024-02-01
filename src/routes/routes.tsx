import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import UserForm from "../pages/UserForm.tsx";
import TableView from "../pages/TableView/index.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <UserForm />,
      },
      {
        path: "user-details/:id",
        element: <UserForm />,
      },
      {
        path: "user-details",
        element: <TableView />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
