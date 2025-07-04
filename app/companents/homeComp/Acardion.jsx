'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  "What do you expect your relationship with the family of your spouse to be?",
  "What do you expect your spouse’s relationship with your family to be?",
  "Is there anyone in your family living with you now?",
  "Are you planning to have anyone in your family live with you in the future?",
  "If, for any reason, my relationship with your family turns sour, what should be done?",
  "Who are your friends, how did you get to know them and why are they your friends?",
  "What do you like most about your friends?",
  "What will your relationship with your friends be after marriage?",
  "Do you have friends of the opposite sex?",
  "What is the level of your relationship with your friends of the opposite sex?",
];

const AccordionQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion   expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{background:'#FDF9F0'}}>My answers to set questionsview</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {questions.map((question, index) => (
            <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <ListItemText primary={question} />
              <Link href="#" underline="hover" color="primary" sx={{ fontSize: '0.9rem' }}>
                click here to answer this questionedit
              </Link>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionQuestions;
