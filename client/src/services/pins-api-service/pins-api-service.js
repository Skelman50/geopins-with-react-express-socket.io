import axios from 'axios';

export default class PinsApiService {
    BASE_URL = '/pins';
    idToken = () => window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

    createNewPin = async (pin) => {
        const { data } = await axios.post(this.BASE_URL, pin, {
            headers: {
                authorization: this.idToken()
            }
        });
        return data;
    }

    getAllPins = async () => {
        const { data } = await axios.get(this.BASE_URL, {
            headers: {
                authorization: this.idToken()
            }
        });
        return data;
    }

    deletePin = async (id) => {
        const { data }  = await axios.delete(`${this.BASE_URL}/${id}`, {
            headers: {
                authorization: this.idToken()
            }
        });
        return data;
    }

    createComment = async (id, comment) => {
        const { data } = await axios.put(`${this.BASE_URL}/comments/${id}`, comment, {
            headers: {
                authorization: this.idToken()
            }
        });
        return data;
    }


}