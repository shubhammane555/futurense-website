import axios from "axios";

const API_ENDPOINT = "http://localhost:9443/futurense/contact-us";

class EnquiryService {
  createEnquiry(data) {
    return axios.post(`${API_ENDPOINT}/create`, data);
  }
}

export default new EnquiryService();
