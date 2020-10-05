import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  Image,
} from "react-native"

export default class App extends React.Component {
  state = {
    scrollAnimation: new Animated.Value(0),
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
    x: [0, 12],
  }
  render() {
    var { screenHeight, screenWidth } = this.state

    var scrollANIM = this.state.scrollAnimation.interpolate({
      inputRange: [0, screenWidth],
      outputRange: [50, -120],
      extrapolate: "clamp",
    })
    var scrollANIMMAC = this.state.scrollAnimation.interpolate({
      inputRange: [0, screenWidth],
      outputRange: [0, -50],
      extrapolate: "clamp",
    })
    var scrollANIM2UPAR = this.state.scrollAnimation.interpolate({
      inputRange: [screenWidth / 2, screenWidth],
      outputRange: [120, 100],
      // extrapolate: "clamp",
    })
    var scrollANIM2NICHE = this.state.scrollAnimation.interpolate({
      inputRange: [screenWidth / 2, screenWidth],
      outputRange: [-40, 0],
      // extrapolate: "clamp",
    })
    var scrollANIM3 = this.state.scrollAnimation.interpolate({
      inputRange: [screenWidth, screenWidth * 2],
      outputRange: [140, 40],
      extrapolateRight: "clamp",
    })
    var scrollANIMROT3 = this.state.scrollAnimation.interpolate({
      inputRange: [screenWidth, screenWidth * 2],
      outputRange: ["90deg", "0deg"],
      extrapolateRight: "clamp",
    })

    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            backgroundColor: "black",
            width: "100%",
          }}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: this.state.scrollAnimation,
                },
              },
            },
          ])}
          // onScroll={(x) => {
          //   console.log(x.nativeEvent.contentOffset)
          // }}
        >
          {/*//! PAGE */}
          <View
            style={{
              height: screenHeight,
              width: screenWidth,
              backgroundColor: "#f89e20",
            }}
          >
            <View style={styles.screenHeader}>
              <Animated.Image
                source={{
                  uri:
                    "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/03/macbook-air-2020-press-graphic.png?itok=CgJA_oUx",
                }}
                style={{
                  height: 300,
                  width: 300,
                  transform: [{ translateY: scrollANIMMAC }],
                }}
                resizeMode="contain"
              />
              <Animated.Image
                source={{
                  uri:
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1565209264208",
                }}
                style={{
                  height: 200,
                  width: 200,
                  position: "absolute",
                  transform: [{ translateY: 50 }, { translateX: scrollANIM }],
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.screenText}>Every Day Use</Text>
            </View>
          </View>
          {/* //!SCREEN TWO */}
          <View
            style={{
              height: screenHeight,
              width: screenWidth,
              backgroundColor: "pink",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Animated.Image
                source={{
                  uri:
                    "https://images.macrumors.com/article-new/2013/10/apple_pro_display_xdr_roundup_header.png",
                }}
                style={{
                  height: 300,
                  width: 300,
                  transform: [{ translateY: scrollANIM2NICHE }],
                }}
                resizeMode="contain"
              />

              <Animated.Image
                source={{
                  uri:
                    "https://help.apple.com/assets/5DC9E935094622055F49043D/5E289500680CE2026708B000/en_US/fbac8523b0d81e806024f9d46cb3b976.png",
                }}
                style={{
                  height: 200,
                  width: 200,
                  position: "absolute",
                  transform: [
                    { translateY: scrollANIM2UPAR },
                    { translateX: 50 },
                  ],
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.screenText}>Pro Users</Text>
            </View>
          </View>
          {/* //!SCREEN THREE */}
          <View
            style={{
              height: screenHeight,
              width: screenWidth,
              backgroundColor: "lightskyblue",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri:
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
                }}
                style={{ height: 350, width: 350 }}
                resizeMode="contain"
              />
              <Animated.Image
                source={{
                  uri:
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-1up?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1573756561326",
                }}
                style={{
                  height: 150,
                  width: 150,
                  position: "absolute",
                  transform: [
                    { translateY: 100 },
                    { translateX: scrollANIM3 },
                    { rotate: scrollANIMROT3 },
                  ],
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.screenText}>Students</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screenText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
