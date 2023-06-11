import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState();

  const getApi = (path) => {
    const url = `${baseUrl}${path}/`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };
  const createNewRegister = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setInfoApi([...infoApi, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteRegister = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res);
        const infoApiFilter = infoApi.filter((element) => element.id !== id);
        setInfoApi(infoApiFilter);
      })
      .catch((err) => console.log(err));
  };

  const updateRegister = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res);
        const infoApiUpdated = infoApi.map((element) => {
          if (element.id === id) {
            return data;
          } else {
            return element;
          }
        });
        setInfoApi(infoApiUpdated);
      })
      .catch((err) => console.log(err));
  };
  return [infoApi, getApi, createNewRegister, deleteRegister, updateRegister];
};

export default useFetch;
