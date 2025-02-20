import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { styled } from '@mui/material/styles';

const ChartContainer = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  marginTop: 24
});

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: 4
        }}
      >
        <Typography variant="subtitle2" sx={{ color: '#0066CC' }}>
          ₦{payload[0].value.toLocaleString()}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
      </Box>
    );
  }
  return null;
};

const SalesGraph = () => {
  const data = [
    { month: 'January', value: 500000 },
    { month: 'February', value: 606660 },
    { month: 'March', value: 550000 },
    { month: 'April', value: 750000 },
    { month: 'May', value: 600000 },
    { month: 'June', value: 650000 },
    { month: 'July', value: 700000 },
    { month: 'August', value: 550000 },
    { month: 'September', value: 650000 },
    { month: 'October', value: 700000 },
    { month: 'November', value: 650000 },
    { month: 'December', value: 680000 }
  ];

  return (
    <ChartContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Sales
        </Typography>
        <Select
          defaultValue="2021"
          size="small"
          sx={{ minWidth: 100 }}
        >
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
        </Select>
      </Box>

      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              tickFormatter={(value) => `₦${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0066CC"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8, fill: '#0066CC' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </ChartContainer>
  );
};

export default SalesGraph;