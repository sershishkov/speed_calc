import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DescrTitle from './DescrTitle';

function DescAccordion({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      sx={{
        minWidth: '300px',
        // border: '1px solid green',
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1'>
        <DescrTitle>{title}</DescrTitle>
      </AccordionSummary>
      <AccordionDetails onClick={() => setExpanded(false)}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default DescAccordion;
