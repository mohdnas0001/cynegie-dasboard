declare module 'react-gauge-chart' {
  import { FC } from 'react';

  interface GaugeChartProps {
    id: string;
    nrOfLevels?: number;
    arcsLength?: number;
    percent: number;
    textColor?: string;
    needleColor?: string;
    arcWidth?: number;
    colors?: string[];
  }

  const GaugeChart: FC<GaugeChartProps>;

  export default GaugeChart;
}
