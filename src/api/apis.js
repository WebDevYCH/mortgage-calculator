import axios from "axios";

import { sendEmailEndpoint } from "../utils/";

export const Apis = {
  sendEmail: (data) =>
    axios({
      method: "post",
      url: `${sendEmailEndpoint}/sendMailOverHTTP`,
      data,
    })
      .then(({ data }) => data)
      .catch((err) => err.response.data),
};
