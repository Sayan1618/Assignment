import axios from 'axios';
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
export default function ChartPage() {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/data');
          const data = response.data;
  
          const chart = createChart(chartRef.current, { width: 600, height: 400 });
          const lineSeries = chart.addLineSeries();
  
          lineSeries.setData(data);
  
          chart.applyOptions({
            timeScale: {
              timeVisible: true,
            },
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return <div ref={chartRef}></div>;
  }
  