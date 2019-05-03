import React from 'react';
import TextField from '@material-ui/core/TextField';

const CreatePinTextContent = ({ setContent, content, mobileSize }) => (
  <div className="content-field-create-pin">
    <TextField
      name="contet"
      label="Content"
      multiline
      rows={mobileSize ? '3' : '6'}
      margin="normal"
      fullWidth
      variant="outlined"
      onChange={e => setContent(e.target.value)}
      value={content}
    />
  </div>
);

export default CreatePinTextContent;
