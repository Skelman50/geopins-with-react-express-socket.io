import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhotoTwoTone';

const AddPhotoTitleField = ({
  setTitle, setImage, image, title,
}) => (
  <div>
    <TextField
      name="title"
      label="Title"
      placeholder="Inser Pin Title"
      onChange={e => setTitle(e.target.value)}
      value={title}
    />
    <input
      accept="image/*"
      id="image"
      type="file"
      className="input-create-pin"
      onChange={e => setImage(e.target.files[0])}
    />
    <label htmlFor="image">
      <Button
        style={{ color: image && 'green' }}
        component="span"
        size="small"
        className="button-create-pin"
      >
        <AddAPhotoIcon />
      </Button>
    </label>
  </div>
);

export default AddPhotoTitleField;
