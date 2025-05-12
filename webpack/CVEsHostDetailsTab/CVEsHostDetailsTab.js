import React from 'react';
import PropTypes from 'prop-types';

const CVEsHostDetailsTab = ({ hostName }) => (
  <div>
    <h1>CVEs tab for host: {hostName}</h1>
  </div>
);

CVEsHostDetailsTab.propTypes = {
  hostName: PropTypes.string.isRequired,
};

export default CVEsHostDetailsTab;
