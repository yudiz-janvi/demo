import React from 'react';
import PropTypes from 'prop-types';

import { scaleTime } from 'd3-scale';
import { curveMonotoneX } from 'd3-shape';

import { ChartCanvas, Chart } from 'react-stockcharts';
import { AreaSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { fitWidth } from 'react-stockcharts/lib/helper';
import {
    createVerticalLinearGradient,
    hexToRGBA,
} from 'react-stockcharts/lib/utils';

function StockChart(props) {
    const { data, type, width, ratio, canvasGradient, strokeColor } = props;

    return (
        <ChartCanvas
            ratio={ratio}
            width={width}
            height={205}
            margin={{ left: 0, right: 0, top: 10, bottom: 30 }}
            seriesName='MSFT'
            data={data}
            type={type}
            xAccessor={(d) => d.date}
            xScale={scaleTime()}
            xExtents={[new Date(2011, 0, 1), new Date(2013, 0, 2)]}
        >
            <Chart id={0} yExtents={(d) => d.close}>
                <defs>
                    <linearGradient
                        id='MyGradient'
                        x1='0'
                        y1='100%'
                        x2='0'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            stopColor='#b5d0ff'
                            stopOpacity={0.2}
                        />
                        <stop
                            offset='70%'
                            stopColor='#6fa4fc'
                            stopOpacity={0.4}
                        />
                        <stop
                            offset='100%'
                            stopColor='#4286f4'
                            stopOpacity={0.8}
                        />
                    </linearGradient>
                </defs>
                <XAxis axisAt='bottom' orient='bottom' ticks={6} />
                {/* <YAxis axisAt='left' orient='left' /> */}
                <AreaSeries
                    yAccessor={(d) => d.close}
                    fill='url(#MyGradient)'
                    strokeWidth={2}
                    stroke={strokeColor}
                    interpolation={curveMonotoneX}
                    canvasGradient={canvasGradient}
                />
            </Chart>
        </ChartCanvas>
    );
}

StockChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
};

StockChart.defaultProps = {
    type: 'svg',
};
StockChart = fitWidth(StockChart);

export default StockChart;
