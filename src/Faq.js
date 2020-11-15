import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import Typography from "@material-ui/core/Typography";
import MyAccordion from "./MyAccordion";

const Faq = () => {
  const { width } = useWindowDimensions();
  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 600) {
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
      <MyAccordion
        question="Why can't I loose weight?"
        anwser="You are not losing weigh because you are not maintaining a calorie deficit. You can use the BMR 
Calculator on this site to calculate your Base Metabolic Rate, then adjust it with your daily level
of activity and you will have an approximation of how many calories per day you need to consume
to maintain your weight. In order to establish a deficit, you need either reduce calorie consumption (eat less)
or increase calorie demand (do more exercise).
"
      />
      <MyAccordion
        question="Can I lose fat and build muscle at the same time?"
        anwser="Short answer: no. More elaborate answer: it depends. In early stages, when you just begin to work out it is possible to both loose fat and gain 
muscle. Your body is not accustomed to the exercise, it uses fat reserves for energy and your muscle mass increases so it can
deal with the weights you are lifting. The human organism adjusts fast however and this stage does not last long. You need
a calorie deficit to loose and a calorie surplus to gain weight, or you need to be an extremely knowledgeable individual with
years of experience and possibly a genetic gift to know how many calories exactly you need to consume in order to let your muscles
grow and your fat burn at the same time."
      />
      <MyAccordion
        question="What exercises can I do to lose fat in my belly / other body part?"
        anwser="There are none. Your genetics are responsible for your fat allocation, and for fat loss. The areas of your body that first gain fat
will be the ones to lose it first as well. 
"
      />
      <MyAccordion
        question="What supplements are good to take?"
        anwser="Very few. Most supplements targeting gym-goers are over advertised and simply do not work. The few that do are protein powder
(along with gainers it basically gives your body macronutrients), vitamins (good to take in general), creatine(monohydrate),
some pre-workout mixes (they are buffed up energy drinks).

"
      />
      <MyAccordion
        question="What is the best diet?"
        anwser="There is no such thing as ‘the best diet’. The range of diet approaches is extremely wide with some examples completely 
contradicting each other – there are professional athletes having great successes while being vegan (not consuming any
animal-originating products at all), and then there are accomplished sportsmen sticking only to the carnivore diet (consuming
animal-originating products exclusively). Calorie consumption matters more than individual ingredients. A well-balanced diet 
has always been a safe bet.
"
      />
    </div>
  );
};

export default Faq;
