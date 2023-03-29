const axios = require("axios");


const getApiData = async () => {
    try {
      const dataApi = await axios.get("http://localhost:3000/products");
      let result = await dataApi.data.map((e) => {
        return {
          id: e.id,
          trademark: e.title,
          price: e.price,
          description: e.description,
          category: e.category,
          image: e.image,
          rating: e.rating
        };
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getApiData()
  