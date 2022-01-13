import axios from "axios";

export default {
  /**
   * Récupère et retourne une collection de données
   * @param request
   * @returns {Promise<T>}
   */
  findAll: ( request ) => {
    return axios
      .get(`https://localhost:8000/api/${request}`)
      .then(response => response.data)
      ;
  },

  /**
   * Retourne une unique ressource
   * @param request
   * @param id
   * @returns {Promise<T>}
   */
  find: ( request, id ) => {
    return axios
      .get(`https://localhost:8000/api/${request}/${id}`)
      .then(response => response.data)
      ;
  },

  /**
   * Post Data
   * @param request
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  postData: ( request, data ) => {
    return axios
      .post(
        `https://localhost:8000/api/${request}`,
        data
      );
  },
}
