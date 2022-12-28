import { Chart } from 'react-google-charts';
export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};
function App() {
  return (
    <div className="App">
        <Chart
          chartType='ColumnChart'
          data={data}
          width="100%"
          height="640px"
          legendToggle
          chartLanguage='pt-BR'
          options={{
            title: "Title for chart",
            legend: "Like",
            colors: ['pink', 'yellow', 'blue'],
          }}
          
        />
    </div>
  );
}

export default App;
