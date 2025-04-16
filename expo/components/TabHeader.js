import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function TabHeader({ title, isActive, onClick }) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Text style={[styles.text, isActive && styles.activeText]}>{title}</Text>
      {isActive && <View style={styles.activeIndicator} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
    marginTop: 20,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563", // text-gray-600
  },
  activeText: {
    color: "#000", // text-black-600
    fontWeight: "600", // font-semibold
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: "#16A34A", // bg-green-600
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});
