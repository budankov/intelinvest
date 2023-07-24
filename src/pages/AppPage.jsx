import { useAuth } from "shared/hooks/useAuth";
import AppLayout from "components/AppLayout/AppLayout";
import AppHome from "components/AppHome/AppHome";

const AppPage = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth ? <AppLayout /> : <AppHome />}
    </>
  );
};

export default AppPage;
