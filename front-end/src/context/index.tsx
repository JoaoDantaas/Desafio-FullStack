import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../service/api";

interface IProvider {
  children: ReactNode;
}

export const IndexContext = createContext({} as any);

const IndexProvider = ({ children }: IProvider) => {
  const [values, setValues] = useState();

  useEffect(() => {
    const simulate = async () => {
      await api
        .post("/contact")
        .then((response) => {
          console.log(response.data);
          setValues(values);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [setValues, values]);

  return <IndexContext.Provider value={{}}>{children}</IndexContext.Provider>;
};
export function useIndexContext() {
  const context = useContext(IndexContext);

  return context;
}

export default IndexProvider;
