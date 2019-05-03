import React, { useState, useContext } from 'react';
import './create-pin.css';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import AddPhotoTitleField from '../add-photo-title-field/add-photo-title-field';
import SubmitButtons from '../submit-buttons/submit-buttons';
import CreatePinTitleHeader from '../create-pin-title-header/create-pin-title-field';
import CreatePinTextContent from '../create-pin-text-conent/create-pin-text-content';
import Context from '../../context';
import uploadImade from '../../services/upload-image/upload-image';
import PinsApiService from '../../services/pins-api-service/pins-api-service';

const pinsApiService = new PinsApiService();

const CreatePin = ({ setHeight }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { state, dispatch } = useContext(Context);
  const mobileSize = useMediaQuery('(max-width: 650px)');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const { latitude, longitude } = state.draft;
      const url = await handleImageUpload();
      const data = {
        title, image: url, content, latitude, longitude,
      };
      const createPin = await pinsApiService.createNewPin(data);
      setHeight('90%');
      handleClearButton();
      subscribeOnCreatePin(createPin);
    } catch (error) {
      setSubmitting(false);
    }
  };

  const subscribeOnCreatePin = (pin) => {
    const { socket } = state;
    socket.emit('pinCreated', pin);
  };

  const handleClearButton = () => {
    setTitle('');
    setImage(null);
    setContent('');
    dispatch({ type: 'DELETE_DRAFT' });
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'geopins');
    data.append('cloud_name', 'Vasia');
    return await uploadImade(data);
  };

  return (
    <form className="create-pin-root">
      <CreatePinTitleHeader />
      <AddPhotoTitleField
        setTitle={setTitle}
        setImage={setImage}
        image={image}
        title={title}
      />
      <CreatePinTextContent
        setContent={setContent}
        content={content}
      />
      <SubmitButtons
        mobileSize={mobileSize}
        handleSubmit={handleSubmit}
        handleClearButton={handleClearButton}
        title={title}
        image={image}
        content={content}
        submitting={submitting}
      />
    </form>
  );
};

export default CreatePin;
