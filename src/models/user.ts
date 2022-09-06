import { useCallback, useState } from 'react';

export default function () {
  const [user, setUser] = useState<API.IUser>();

  const signin = useCallback((name, password) => {
    setUser({
      id: 1,
      name,
      password,
    });
  }, []);

  const signout = useCallback(() => {
    setUser({} as API.IUser);
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
