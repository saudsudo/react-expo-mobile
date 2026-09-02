import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerTitleAlign: "center", headerTintColor: "blue", tabBarActiveTintColor: 'crimson'}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color,size,focused}) => <Ionicons name=  {focused? "home": "home-outline"} color={color} size = {size}/>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size , focused}) => (
            <Ionicons name={focused? "information":"information-circle"} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({color,size, focused}) => <Ionicons name={focused ? "person":"person-circle"}
          color={color}
          size={size} />,
        }}
      />
    </Tabs>
  );
}
