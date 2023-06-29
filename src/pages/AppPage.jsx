import { getAuth, signOut } from 'firebase/auth';
import { app } from 'shared/api/firebaseApi';

const AppPage = () => {
  const handleSignOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log('Розлогінення було успішним');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>Персональна сторінка</h2>
      <button onClick={handleSignOut}>Вийти</button>
    </div>
  );
};

export default AppPage;
