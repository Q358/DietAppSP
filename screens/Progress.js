import { Divider, makeStyles } from "@rneui/themed";
import { scaleBand } from "d3-scale";
import { StyleSheet, Text, useWindowDimensions, View, ScrollView } from "react-native";
import { BarChart, ContributionGraph, LineChart, ProgressChart, StackedBarChart } from "react-native-chart-kit";
import { XAxis, YAxis, StackedBarChart as SVGStackedBarChart } from 'react-native-svg-charts'
//import LineGraph from "react-native-charts-wrapper/lib/LineChart.js";
//import LineGraph from "react-native-chart-kit/dist/line-chart/LineChart"

export default function Progress({ navigation }) {

  const { width } = useWindowDimensions()
  const styles = useStyles()

  const data = {
    nutrients: [10000,2000,1000], // Carbs, protein, fat?
    nutrientsGoal: [20000,3000,800],
    exercisesCompleted: [5,3,3,2,0,3,0],
    exercisesCount: [5,3,5,3,5,3,2],
    score:[80, 95, 88, 80, 99, 73, 80],

  }

  const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  // nutriPower? TODO: fetch from user data
  const score = data.score.reduce((a, b) => a + b) / data.score.length // Average score for the week

  const message = score < 25 ? {title: "You can do better", subtitle: "Healthy living can be hard, but you can do it!"}
    : score < 50 ? {title: "You're doing fine", subtitle: "Your score can be better. Commit to your health!"}
      : score < 75 ? {title: "You're doing well", subtitle: "Challenge yourself to do even better!"}
        : {title: "It's all going as planned", subtitle: "You're doing great this week"}

  const dataBar = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: data.score
      }
    ]
  }
  const dataStackedBar = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    legend: ["Achieved", "Target"],
    data: data.exercisesCompleted.map((val, idx)=> [val, data.exercisesCount[idx] - val]),
    // data: [
    //   [5, 5],
    //   [3, 3],
    //   [3, 5],
    //   [2, 3],
    //   [0, 5],
    //   [3,3],
    //   [0,2]
    // ],
    barColors: ["#27a228", "#0a580a"]
  }
  const dataStackedBar2 = [
    {
      day: new Date(2015, 0, 1),
      achieved: 5,
      target:0
    },
    {
      day: new Date(2015, 0, 2),
      achieved: 3,
      target:0
    },
    {
      day: new Date(2015, 0, 3),
      achieved: 3,
      target:2
    },
    {
      day: new Date(2015, 0, 4),
      achieved: 0,
      target:6
    },
    {
      day: new Date(2015, 0, 4),
      achieved: 0,
      target:5
  },
  {
    day: new Date(2015, 0, 4),
    achieved: 2,
    target:2
  },
  {
    day: new Date(2015, 0, 4),
    achieved: 3,
    target:2
  },
]
  const dataProg = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  }
  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [220, 210, 205, 200, 170, 175],
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Weight"] // optional
  }
  const dataContrib = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ]
const arr = [6,5,4,3,2,1,0]
  return (
    <View style={styles.container}>
    <ScrollView style={{paddingHorizontal: 15, paddingVertical: 25, flexGrow:0}}>
      <Text style={styles.title}>{message.title}</Text>
      <Text style={styles.subtitle}>{message.subtitle}</Text>
      <View style={{flex: 1, justifyContent:"center", width: "100%", marginVertical:5, alignItems:"center"}}>
        <View style={{borderBottomWidth: 3, borderBottomColor:"lightgray", width:"80%"}}/>
      </View>
      <Text style={styles.chartTitle}>Diet</Text>
      <View style={styles.box}>
        <BarChart data={dataBar} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart} fromZero/>
      </View>
      <Text style={styles.chartTitle}>Fitness</Text>
      <View style={styles.box}>
        <StackedBarChart data={dataStackedBar} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart} />
      </View>
      <View style={{...styles.box, paddingHorizontal:5}}>
        <View style={{flexDirection:"row"}}>
        <YAxis data={dataStackedBar2} scale={scaleBand}                     
          formatLabel={ (value, index) => arr[index]}
          yAccessor={({ index }) => index}
          labelStyle={ { color: 'black' } }
          numberOfTicks={10}
          contentInset={{ top: 10,left:20, right:20 }}
          svg={{ fontSize: 10, fill: 'rgba(26, 255, 146,0.9)' }}
        />
        <View style={{flex:1}}>
        <SVGStackedBarChart
          style={{ height: 200 }}
          keys={["achieved", "target"]}
          colors={['rgba(26, 255, 146,0.9)', 'rgba(26, 255, 146, 0.2)']}
          data={dataStackedBar2}
          showGrid={true} gridMin={0}
          contentInset={{ top: 20, bottom: 10, left:10, right:10 }}
        />
        </View>
        </View>
        <XAxis data={dataStackedBar2} scale={scaleBand}
          style={{ marginHorizontal: -5}}
          formatLabel={ (value, index) => weekLabels[index] }
          labelStyle={ { color: 'black' } }
          svg={{ fontSize: 10, fill: 'rgba(26, 255, 146,0.9)' }}
          contentInset={{ top: 10, bottom: 10, left:20, right:20 }}
        />

      </View>
      <Text style={styles.chartTitle}>Macronutrients</Text>
      <View style={styles.box}>
        <ProgressChart 
          data={{labels: ["Carbs", "Protein", "Fat"], data: data.nutrients.map((val, idx)=> (val >= data.nutrientsGoal[idx] ? 1 : val/ data.nutrientsGoal[idx]))}} 
          chartConfig={chartConfig}
          width={width * .9} height={220}
          strokeWidth={16}
          radius={32}
          style={styles.chart}
        />
      </View>

      <View style={{flex: 1, justifyContent:"center", width: "100%", alignItems:"center"}}>
        <View style={{borderBottomWidth: 3, borderBottomColor:"lightgray", width:"80%", marginVertical:5}}/>
        <Text style={styles.title}>History</Text>
      </View>
      <Text style={styles.chartTitle}>Weight</Text>
      <View style={styles.box}>
        <LineChart data={dataLine} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart} fromZero/>
      </View>
      {/* <View style={styles.box}>
        <LineGraph style={styles.chart}
            data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
          />
      </View> */}
      <Text style={styles.chartTitle}>Activity</Text>
      <View style={{...styles.box, marginBottom:50}}>
        <ContributionGraph values={dataContrib} chartConfig={chartConfig} width={width * .9} height={220} endDate={new Date("2017-04-01")}
         numDays={105}/>
      </View>
    </ScrollView>
    </View>
  )
}
  
const useStyles = makeStyles((theme) => ({
  container: {
      flex: 1,
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: "fontBold",
      fontSize: 30,
      color: theme.colors.textSecondary
    },
    subtitle: {
      fontFamily: "fontBold",
      fontSize: 20,
      color: "#C1C1C1",
      textAlign:"center"
    },
    box: {
      borderRadius: 15,
      backgroundColor: theme.colors.primary,
      marginVertical:5,
      padding: 2
    },
    chart: {
      borderRadius: 15
    },
    chartTitle: {
      fontFamily:"fontBold",
      fontSize:20,
      color: theme.colors.textSecondary,
    }
}))

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.7,
  useShadowColorFromDataset: false, // optional
  style: {
    borderRadius: 15
  }
};