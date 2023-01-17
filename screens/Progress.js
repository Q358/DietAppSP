import { Divider, makeStyles } from "@rneui/themed";
import { StyleSheet, Text, useWindowDimensions, View, ScrollView } from "react-native";
import { BarChart, ContributionGraph, LineChart, ProgressChart, StackedBarChart } from "react-native-chart-kit";

export default function Progress({ navigation }) {

  const { width } = useWindowDimensions()
  const styles = useStyles()

  // nutriPower? TODO: fetch from user data
  const score = 93

  const message = score < 25 ? {title: "", subtitle: "Healthy living can be hard, but you can do it!"}
    : score < 50 ? {title: "You're doing fine", subtitle: "Your score can be better. Commit to your health!"}
      : score < 75 ? {title: "You're doing alright", subtitle: "Challenge yourself to do even better!"}
        : {title: "It's all going as planned", subtitle: "You're doing great this week"}

  const data = {
    nutrients: [0.1,0.2,0.3]
  }

  const dataBar = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [80, 95, 88, 80, 99, 73, 80]
      }
    ]
  }
  const dataStackedBar = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    legend: ["Achieved", "Target"],
    data: [
      [5, 5],
      [3, 3],
      [3, 5],
      [2, 3],
      [0, 5],
      [3,3],
      [0,2]
    ],
    barColors: ["#27a228", "#0a580a"]
  }
  const dataProg = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  }
  const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [220, 210, 205, 200, 170, 175],
        color: (opacity = 1) => `rgba(2, 90, 2, ${opacity})`, // optional
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
  return (
    <View style={styles.container}>
    <ScrollView style={{paddingHorizontal: 15, paddingVertical: 25, flexGrow:0}}>
      <Text style={styles.title}>{message.title}</Text>
      <Text style={styles.subtitle}>{message.subtitle}</Text>
      <View style={{flex: 1, justifyContent:"center", width: "100%", marginVertical:5, alignItems:"center"}}>
        <View style={{borderBottomWidth: 3, borderBottomColor:"lightgray", width:"80%"}}/>
      </View>
      <View style={styles.box}>
        <BarChart data={dataBar} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart} fromZero/>
      </View>
      <View style={styles.box}>
        <StackedBarChart data={dataStackedBar} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart}/>
      </View>
      <View style={styles.box}>
        <ProgressChart 
          data={{labels: ["Carbs", "Protein", "Fat"], data: data.nutrients}} 
          chartConfig={chartConfig}
          width={width * .9} height={220}
          strokeWidth={16}
          radius={32}
          style={styles.chart}
        />
      </View>
      <View style={styles.box}>
        <LineChart data={dataLine} chartConfig={chartConfig} width={width * .9} height={220} style={styles.chart} fromZero/>
      </View>
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
    }
}))

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  style: {
    borderRadius: 15
  }
};