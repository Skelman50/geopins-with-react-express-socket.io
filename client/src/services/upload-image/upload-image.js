import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const uploadImade = async (data) => {
  const url = process.env.REACT_APP_CLOUDINARY_URL;
  const res = await axios.post(url, data);
  return res.data.url;
};

export default uploadImade;
