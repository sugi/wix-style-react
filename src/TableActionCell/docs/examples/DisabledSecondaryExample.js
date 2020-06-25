import React from 'react';
import TableActionCell from 'wix-style-react/TableActionCell';
import Download from 'wix-ui-icons-common/Download';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';

import { classes } from '../TableActionCell.story.st.css';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-disabled-secondary"
      secondaryActions={[
        {
          text: 'Download',
          icon: <Download />,
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
          disabled: true,
        },
        {
          text: 'Print',
          icon: <Print />,
          onClick: () => window.alert('Print action was triggered.'),
          disabled: true,
        },
      ]}
      numOfVisibleSecondaryActions={1}
    />
  </div>
);

export default Example;
