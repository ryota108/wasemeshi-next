import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
type Props = {
  question: string;
  answer: string;
};

const AccordionUI: React.FC<Props> = ({ question, answer }) => {
  return (
    <>
      <Box sx={{ width: "80%", margin: "20px auto" }}>
        <Accordion sx={{ backgroundColor: "#bf9541", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {`Q ${question}`}
          </AccordionSummary>
          <AccordionDetails> {`A ${answer}`}</AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default AccordionUI;
