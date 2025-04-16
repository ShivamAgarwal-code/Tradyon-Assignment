import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ProductsPage from "./components/products";
import TabView from "./components/TabView";

export default function App() {
  const tabs = [
    {
      id: "overview",
      title: "Overview",
      content: (
        <View>
          <Text>Overview Content</Text>
          <Text>This is the overview section content.</Text>
        </View>
      ),
    },
    {
      id: "products",
      title: "Products",
      content: <ProductsPage />,
    },
    {
      id: "posts",
      title: "Posts",
      content: (
        <View>
          <Text>Posts</Text>
          <Text>Check out our latest posts.</Text>
        </View>
      ),
    },
    {
      id: "certificates",
      title: "Certificates",
      content: (
        <View>
          <Text>Certificates</Text>
          <Text>View our certifications and achievements.</Text>
        </View>
      ),
    },
    {
      id: "representatives",
      title: "Representatives",
      content: (
        <View>
          <Text>Representatives</Text>
          <Text>Meet our representatives.</Text>
        </View>
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexContainer}>
        <Image
          source={require("./assets/back.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>KMGRobust</Text>
        <Image
          source={require("./assets/whatsapp.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <ImageBackground
        source={require("./assets/cover.png")}
        style={styles.heroContainer}
        resizeMode="cover"
      ></ImageBackground>
      <Image
        source={require("./assets/kmglogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title and Icons Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>KMG Robu</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("./assets/check.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Image
            source={require("./assets/pro.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>24M Revenue</Text>
        <Image
          source={require("./assets/dot.png")}
          style={styles.dot}
          resizeMode="contain"
        />
        <Text style={styles.statText}>1-10 Employees</Text>
        <Image
          source={require("./assets/dot.png")}
          style={styles.dot}
          resizeMode="contain"
        />
        <Text style={styles.statText}>15 Years Old</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TabView tabs={tabs} />
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("./assets/favorite.png")}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("./assets/contact.png")}
            style={styles.contactIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    paddingTop: StatusBar.currentHeight,
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    width: 30, // Reduced size
    height: 30, // Reduced size
    marginHorizontal: 90, // Reduced spacing for better fit
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heroContainer: {
    height: 180,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  logo: {
    width: 90,
    height: 90,
    marginLeft: 16,
    marginTop: -50, // Adjusted to have ~20px below the bottom border
    borderRadius: 45,
  },
  titleContainer: {
    flexDirection: "row",
    paddingTop: 14, // pt-[4rem] ≈ 4 * 16 = 64px
    justifyContent: "flex-start",
    paddingLeft: 40, // pl-10 (10 units in Tailwind ≈ 40px)
  },
  title: {
    fontSize: 20,
    fontWeight: "800", // font-extrabold
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10, // Small spacing between title and icons
  },
  icon: {
    width: 20,
    height: 20,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 40, // pl-10
    marginTop: 8, // Small spacing below title section
    gap: 8, // gap-2 (2 units ≈ 8px)
  },
  statText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6B7280", // text-gray-500
  },
  dot: {
    width: 7,
    height: 7,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%", // Each item takes half width
  },
  navIcon: {
    width: 50,
    height: 44,
    marginBottom: 20,
    marginTop: 20,
  },
  contactIcon: {
    width: 80,
    height: 44,
    marginBottom: 20,
    marginTop: 20,
  },
});
