import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const sidebarItems = [
  {
    id: "dryspices",
    image: require("../assets/dryspices.png"),
    title: "Dry Spices",
  },
  {
    id: "seeds",
    image: require("../assets/seeds.png"),
    title: "Seeds",
  },
  {
    id: "herbs",
    image: require("../assets/herbs.png"),
    title: "Herbs & Dehydrates",
  },
  {
    id: "fruits",
    image: require("../assets/fruits.png"),
    title: "Dried Fruits & Nuts",
  },
  {
    id: "pulses",
    image: require("../assets/pulses.png"),
    title: "Pulses",
  },
  {
    id: "grains",
    image: require("../assets/grains.png"),
    title: "Grains & Cereals",
  },
  {
    id: "organic",
    image: require("../assets/organic.png"),
    title: "Organic",
  },
];

export default function ProductsPage() {
  const [activeItem, setActiveItem] = useState("dryspices");

  useEffect(() => {
    console.log("Active item changed to:", activeItem);
  }, [activeItem]);

  return (
    <Layout
      sidebarItems={sidebarItems}
      setActiveItem={setActiveItem}
      activeItem={activeItem}
    >
      <View style={styles.container}>
        {activeItem === "dryspices" && (
          <View style={styles.section}>
            <View style={styles.section}>
              <View>
                <Image
                  source={require("../assets/blackpepper.png")} // Assuming SVG is converted to PNG
                  style={styles.spiceImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Origin</Text>
                <Text style={styles.value}>Tanzania</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Grade</Text>
                <Text style={styles.value}>Choice, Export Quality</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Packaging Type</Text>
                <Text style={styles.value}>Carton Box (50kg)</Text>
              </View>

              <Image
                source={require("../assets/details.png")} // Assuming SVG is converted to PNG
                style={styles.detailsImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.section}>
              <View>
                <Image
                  source={require("../assets/whitepepper.png")} // Assuming SVG is converted to PNG
                  style={styles.spiceImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Origin</Text>
                <Text style={styles.value}>Tanzania</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Grade</Text>
                <Text style={styles.value}>Choice, Export Quality</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Packaging Type</Text>
                <Text style={styles.value}>Carton Box (50kg)</Text>
              </View>
              <Image
                source={require("../assets/details.png")} // Assuming SVG is converted to PNG
                style={styles.detailsImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.section}>
              <View>
                <Image
                  source={require("../assets/cloves.png")} // Assuming SVG is converted to PNG
                  style={styles.spiceImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Origin</Text>
                <Text style={styles.value}>Tanzania</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Grade</Text>
                <Text style={styles.value}>Choice, Export Quality</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Packaging Type</Text>
                <Text style={styles.value}>Carton Box (50kg)</Text>
              </View>
              <Image
                source={require("../assets/details.png")} // Assuming SVG is converted to PNG
                style={styles.detailsImage}
                resizeMode="contain"
              />
            </View>
          </View>
        )}
        {activeItem === "seeds" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Quality Seeds Selection</Text>
              <Text style={styles.description}>
                Browse our premium quality seeds for all planting needs
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Seed Types</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Vegetable Seeds</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Flower Seeds</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Herb Seeds</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Fruit Seeds</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeItem === "herbs" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Herbs & Dehydrated Products</Text>
              <Text style={styles.description}>
                Discover our collection of fresh and dried herbs
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Available Forms</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Dried Herbs</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Fresh Herbs</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Herbal Blends</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Medicinal Herbs</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeItem === "fruits" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Dried Fruits & Nuts Assortment</Text>
              <Text style={styles.description}>
                Enjoy our selection of premium dried fruits and nuts
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Popular Items</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Almonds</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Cashews</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Raisins</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Apricots</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeItem === "pulses" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Nutritious Pulses Variety</Text>
              <Text style={styles.description}>
                High-quality pulses for healthy living
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Pulse Types</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Lentils</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Chickpeas</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Beans</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Peas</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeItem === "grains" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Grains & Cereals Selection</Text>
              <Text style={styles.description}>
                Wholesome grains for your dietary needs
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Grain Varieties</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Wheat</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Rice</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Quinoa</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Oats</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {activeItem === "organic" && (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.heading}>Organic Products Range</Text>
              <Text style={styles.description}>
                Certified organic products for conscious living
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subheading}>Organic Categories</Text>
              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text>Spices</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Grains</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Sweeteners</Text>
                </View>
                <View style={styles.gridItem}>
                  <Text>Superfoods</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24, // pb-6 (6 units ≈ 24px)
    width: "100%", // max-w-4xl (4xl ≈ 896px)
    alignSelf: "center",
  },
  section: {
    gap: 24, // space-y-6 (6 units ≈ 24px)
  },
  spiceImage: {
    width: "auto",
    height: 150, // h-120 (120 units ≈ 480px, assuming 1 unit = 4px)
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: "row",
    gap: 20, // gap-5 (5 units ≈ 20px)
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    fontSize: 14,
    color: "#16A34A", // text-gray-400
  },
  label: {
    fontSize: 10,
    color: "#9CA3AF", // text-gray-400
  },
  value: {
    fontSize: 10,
    fontWeight: "700", // font-bold
  },
  detailsImage: {
    width: "50%", // w-28 (28 units ≈ 112px)
    height: 52, // h-38 (38 units ≈ 152px)
    borderRadius: 8,
  },
  card: {
    padding: 24, // p-6 (6 units ≈ 24px)
    backgroundColor: "#FFF", // bg-white
    borderRadius: 8, // rounded-lg
    borderWidth: 1, // border
    borderColor: "#E5E7EB", // default border color (gray-200)
    shadowColor: "#000", // shadow-sm
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  heading: {
    fontSize: 30, // text-3xl
    fontWeight: "700", // font-bold
    color: "#1F2937", // text-gray-800
  },
  description: {
    marginTop: 16, // mt-4 (4 units ≈ 16px)
    color: "#4B5563", // text-gray-600
  },
  subheading: {
    fontSize: 20, // text-xl
    fontWeight: "600", // font-semibold
    marginBottom: 12, // mb-3 (3 units ≈ 12px)
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16, // gap-4 (4 units ≈ 16px)
  },
  gridItem: {
    flex: 1, // grid-cols-2 (each item takes half the width)
    minWidth: "45%", // Ensure two items per row
    padding: 12, // p-3 (3 units ≈ 12px)
    borderWidth: 1, // border
    borderColor: "#E5E7EB", // default border color
    borderRadius: 4, // rounded
  },
});
