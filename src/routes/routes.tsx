import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "~/layout/AppLayout";
import TableView from "~/pages/TableView";
import UserForm from "~/pages/UserForm.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <UserForm />,
        loader: async () => {
          return null;
        },
      },
      {
        path: "user-details/:id",
        element: <UserForm />,
        loader: async () => {
          return null;
        },
      },
      {
        path: "user-details",
        element: <TableView />,
        loader: async () => {
          return null;
        },
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
