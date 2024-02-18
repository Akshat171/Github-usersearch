import { useState, useEffect } from "react";

//fetching the all the data from provided url and storing them into data state
const GetFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return { data, loading, error, fetchUsers };
};

//fetching the users based on the page
const GetFetchPages = (baseUrl, totalNum, page, per_page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const startIndex = page * per_page - per_page;
  const totalPages = Math.ceil(totalNum / per_page);

  const fetchPages = async (page) => {
    const fetchPromise = [];
    try {
      for (page = 1; page < totalPages + 1; page++) {
        // URL + page + per_page
        const response = await fetch(
          `${baseUrl}?page=${page}&per_page=${per_page}`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        //getting the response and storing in fetchPromise as they all return promise
        fetchPromise.push(response);
      }

      //fetching data from all promises if any promise rejected then promise.all will be rejected
      const responses = await Promise.all(fetchPromise);
      const results = await Promise.all(
        responses.map((response) => response.json())
      );

      //storing data in dataList array
      let dataList = [];

      results.forEach((result) => {
        dataList = dataList.concat(result);
      });
      setData(dataList);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
    // eslint-disable-next-line
  }, []);

  return { data, loading, error, startIndex, page, per_page, totalPages };
};

export { GetFetch, GetFetchPages };
