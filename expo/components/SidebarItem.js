import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function SidebarItem({ image, title, isActive, onClick }) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="contain" style={styles.image} />
      </View>
      <Text style={[styles.title, isActive && styles.activeTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    fontWeight: "normal",
  },
  activeTitle: {
    fontWeight: "800",
  },
});
