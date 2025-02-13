import axios from "axios";
import React, { useEffect } from "react";

export const Lecture = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(`Response http - lecture : ${JSON.stringify(response.data)}`);
      })
      .catch((error) => {
        console.log(`Erreur : ${error}`);
      });
  }, []);
  return <div>Lecture</div>;
};

export const Creation = () => {
    useEffect(() => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {name: "John", age: 30})
        .then((response) => {
          console.log(`Response http - creation : ${JSON.stringify(response.data)}`);
        })
        .catch((error) => {
          console.log(`Erreur : ${error}`);
        });
    }, []);
    return <div>Creation</div>;
  };

  export const MiseAJour = () => {
    useEffect(() => {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", {title: "John", body: "dfsfsfsafs"})
        .then((response) => {
          console.log(`Response http - mise a jour : ${JSON.stringify(response.data)}`);
        })
        .catch((error) => {
          console.log(`Erreur : ${error}`);
        });
    }, []);
    return <div>Mise a jour</div>;
  };

  export const Suppression = () => {
    useEffect(() => {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          console.log(`Response http - suppression : ${JSON.stringify(response.data)}`);
        })
        .catch((error) => {
          console.log(`Erreur : ${error}`);
        });
    }, []);
    return <div>Suppression</div>;
  };
