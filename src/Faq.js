import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import Typography from "@material-ui/core/Typography";
import MyAccordion from "./MyAccordion";

const Faq = () => {
  const { width } = useWindowDimensions();
  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 800) {
      setContentClass("content--wide");
      setInputClass("input--wide");
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
    }
  }, [width]);

  return (
    <div className={contentClass}>
      <Typography variant="h5">Frequently asked questions</Typography>
      <br />
      <MyAccordion question="question 1" anwser="anwser 1" />
      <MyAccordion question="question 2" anwser="anwser 2" />
      <MyAccordion question="question 3" anwser="anwser 3" />
      <MyAccordion question="question 4" anwser="anwser 4" />
      <MyAccordion question="question 5" anwser="anwser 5" />
    </div>
  );
};

export default Faq;
