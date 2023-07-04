import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from 'redux/auth/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const { email, token, id } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
