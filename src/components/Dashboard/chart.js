import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { CustomSegmentLabelPosition } from 'react-d3-speedometer';
const customerIntent=(NoofSegments,value)=>{
  return(
    <>
     <div>
        <ReactSpeedometer
          segments={NoofSegments}
          width={300}
          needleHeightRatio={0.7}
          value={value}
          maxSegmentLabels={3}
          segmentColors={[
           "#FF9E1C",
            "#64BDFD",
            "#3ACEBE",
            // "#a3be8c",
            // "#b48ead",
          ]}
          currentValueText=" "
          customSegmentLabels={[
            {
              text: 'Complaint',
              position: CustomSegmentLabelPosition.Inside,
              color: 'white',
              fontSize: '8px',
            },
            {
              text: 'Query',
              position:CustomSegmentLabelPosition.Inside ,
              color: 'white',
               fontSize: '8px',
            },
            {
              text: 'Purchase',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
              fontSize: '8px',
            },
          ]}
          ringWidth={60}
          needleTransitionDuration={3333}
          needleTransition="easeElastic"
          needleColor={'#000000'}
          textColor={'#d8dee9'}
        />
      </div>
    </>
  )
}

const customerDelight=(NoofSegments,value)=>{
  return(
    <>
     <div>
        <ReactSpeedometer
          segments={NoofSegments}
          width={300}
          needleHeightRatio={0.7}
          value={value}
          maxSegmentLabels={NoofSegments}
          segmentColors={[
           "#EE6B6B",
            "#FF9E1C",
            "#64BDFD",
            "#009AFF",
            "#86CF6E",
          ]}
          currentValueText=" "
          customSegmentLabels={[
            {
              text: 'Very Negative',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
              fontSize: '8px',
            },
            {
              text: 'Negative',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
               fontSize: '8px',
            },
            {
              text: 'Neutral',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
              fontSize: '8px',
            },
            {
              text: 'Positive',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
              fontSize: '8px',
            },
            {
              text: 'Very Positive',
              position: CustomSegmentLabelPosition.Inside ,
              color: 'white',
              fontSize: '8px',
            },
          ]}
          ringWidth={60}
          needleTransitionDuration={3333}
          needleTransition="easeElastic"
          needleColor={'#000000'}
          textColor={'#d8dee9'}
        />
      </div>
    </>
  )
}

const Chart = ({isCustomerIntent,NoofSegments,value}) => {
    return(
      <>
      {isCustomerIntent?customerIntent(NoofSegments,value):customerDelight(NoofSegments,value)}
      </>
     
)
        }
export default Chart;
  

// ---------------------------------------------------
// START: Stories
// ------------------------------