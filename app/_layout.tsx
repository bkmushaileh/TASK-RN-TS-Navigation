import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1abc9c" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="airplane" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="StayIndex"
        options={{
          title: "Stays",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="hotel" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Staydetails"
        options={{
          href: null,
          title: "Stays",
        }}
      />
      <Tabs.Screen
        name="TripDetails"
        options={{ href: null, title: "Stays" }}
      />
      <Tabs.Screen name="stays" options={{ href: null }} />
      <Tabs.Screen name="trips" options={{ href: null }} />
    </Tabs>
  );
}
