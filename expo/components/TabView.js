import { View, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import TabHeader from "./TabHeader";

export default function TabView({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <View style={styles.container}>
      {/* Scrollable Tab Headers */}
      <View style={styles.headerContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {tabs.map((tab) => (
            <TabHeader
              key={tab.id}
              title={tab.title}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </ScrollView>
        <View style={styles.separator} />
      </View>

      {/* Active Tab Content - MUST have flex: 1 */}
      <View style={styles.content}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  headerContainer: {
    position: "relative",
  },
  scrollView: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  separator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  content: {
    flex: 1, // This makes the content fill remaining space
    marginTop: 16,
  },
});
