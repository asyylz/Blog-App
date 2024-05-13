import axios from 'axios';

export const axiosWithPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
import  {useAuth} from './useAuth';

const useAxios = () => {
  const { user } = useAuth();
  console.log(user?.token);

  const axiosWithToken = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { Authorization: `Token ${user?.token}` },
  });
  return axiosWithToken;
};

export default useAxios;
