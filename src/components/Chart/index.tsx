import { Chart as Charts, GoogleChartWrapperChartType } from 'react-google-charts';

interface IChartProps {
    chartType: GoogleChartWrapperChartType,
    width: string,
    height: string,
    data: {} | any[],
    options: any
}

export const Chart = ({ data, options, chartType, height, width }: IChartProps) => {
    return (
        <div>
            <Charts
                chartType={chartType}
                data={data}
                width={width}
                height={height}
                legendToggle
                chartLanguage='pt-BR'
                options={options}
            />
        </div>
    )
}