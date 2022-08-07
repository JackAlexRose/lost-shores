import { Slider, Typography } from "@mui/material";
import React from "react";
import styles from "./ControlSlider.module.css";

export type ControlSliderProps = {
  label: string;
  value: number;
  scaleFactor: number;
  discrete: boolean;
  onChange: (value: number | number[]) => void;
};

export const ControlSlider: React.FC<ControlSliderProps> = (props) => {
  return (
    <div className={styles.sliderContainer}>
      <Typography gutterBottom align="left">
        {props.label}
      </Typography>
      <Slider
        className={styles.slider}
        size="small"
        defaultValue={
          props.discrete ? props.value : props.value * props.scaleFactor
        }
        aria-label="Small"
        valueLabelDisplay="auto"
        color="secondary"
        scale={
          props.discrete ? undefined : (value) => value / props.scaleFactor
        }
        marks={props.discrete}
        min={props.discrete ? 0 : undefined}
        max={props.discrete ? 100 / props.scaleFactor : undefined}
        onChangeCommitted={(event, value) => props.onChange(value)}
      />
    </div>
  );
};
