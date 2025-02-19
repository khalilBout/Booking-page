import { Outlet } from "react-router-dom";

export default function Root() {
  // const [orderPopup, setOrderPopup] = useState(false);

  return (
    <>
      <Outlet />
    </>
  );
}
