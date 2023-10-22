import {
  PixelRatio,
  StyleSheet,
  View,
  ViewProps,
  useWindowDimensions,
} from "react-native";
import { dims } from "./DeviceSettings";

export default function IPhone14Device(props: ViewProps) {
  const { width, height } = useWindowDimensions();
  console.log(`Window dimensions: `, { width, height });

  console.log(`pixel ratio ${PixelRatio.get()}`);
  return (
    <View style={styles.deviceShell}>
      <View style={styles.deviceScreen}>{props.children}</View>
      <View style={styles.notch} />
      <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  deviceShell: {
    width: dims.width,
    height: dims.height,
    borderRadius: dims.outerBorderRadius,
    borderColor: "#0f0",
    backgroundColor: "black",
  },
  deviceScreen: {
    flex: 1,
    backgroundColor: "#fff",
    margin: dims.innerMargin,
    borderRadius: dims.innerBorderRadius,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "#fdf",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  notch: {
    position: "absolute",
    height: 34,
    width: 175,
    backgroundColor: "black",
    top: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignSelf: "center",
  },
  bottomBar: {
    position: "absolute",
    height: 6,
    width: 160,
    backgroundColor: "black",
    bottom: 28,
    borderRadius: 4,
    alignSelf: "center",
  },
});
