import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const ActivityTypeBtn = (props) => {
  const { active, setActive } = props;
  return (
    <Button.Group size='large'>
      <Button
        positive={ !active }
        onClick={ () => setActive(false) }
        content="Relaxed"
      />
      <Button.Or />
      <Button
        positive={ active }
        onClick={ () => setActive(true) }
        content="Active"
      />
    </Button.Group>
  )
}

ActivityTypeBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}
