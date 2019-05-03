import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/SaveTwoTone';
import Button from '@material-ui/core/Button';

const SubmitButtons = ({
  handleSubmit, title, image, content, handleClearButton, submitting,
}) => (
  <div>
    <Button
      className="button-create-pin"
      variant="contained"
      color="primary"
      onClick={handleClearButton}
    >
      <ClearIcon className="left-icon-create-pin" />
          Discart
    </Button>
    <Button
      type="submit"
      className="button-create-pin"
      variant="contained"
      color="secondary"
      disabled={!image || !title.trim() || !content.trim() || submitting}
      onClick={handleSubmit}
    >
          Submit
      <SaveIcon className="right-icon-create-pin" />
    </Button>
  </div>
);

export default SubmitButtons;
