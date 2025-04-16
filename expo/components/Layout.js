import { View, Text, ScrollView, StyleSheet } from "react-native";
import SidebarItem from "./SidebarItem";

export default function Layout({
  sidebarItems,
  children,
  setActiveItem,
  activeItem,
}) {
  return (
    <View style={styles.container}>
      {/* Left Sidebar */}
      <View style={styles.leftSidebar}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.sidebarContent}>
            {/* <Text style={styles.sidebarTitle}>Product Categories</Text> */}
            <View style={styles.sidebarList}>
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  isActive={activeItem === item.id}
                  onClick={() => setActiveItem(item.id)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {children || (
          <Text style={{ fontSize: 20, color: "red" }}>
            No content available
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 50,
  },
  leftSidebar: {
    width: "30%", // w-1/4
    borderRightWidth: 1,
    height: "100%",
    borderRightColor: "#E5E7EB", // border-gray-200
    backgroundColor: "#F9FAFB", // bg-gray-50
    paddingBottom: 32,
  },
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView content can grow and scroll
  },
  mainContent: {
    flex: 1, // Takes remaining space
    padding: 24, // p-6
    paddingBottom: 32,
  },
  sidebarContent: {
    padding: 16, // p-4
  },
  sidebarTitle: {
    fontSize: 20, // text-xl
    fontWeight: "700", // font-bold
    marginBottom: 16, // mb-4
  },
  sidebarList: {
    // gap: 12, // Removed unsupported property
    marginBottom: 12, // Use marginBottom for spacing between items
  },
});
