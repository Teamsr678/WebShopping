import axios from 'axios';

const TEST_API_BASE_URL = 'http://localhost:8080/users';

class Testservice{
    gettest(){
        return axios.get(TEST_API_BASE_URL);
    }

    gettext(){
        return axios.get("http://localhost:8080/view");
    }
}

export default new Testservice();