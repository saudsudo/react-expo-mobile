import { Tabs } from "expo-router";
import{NativeTabs} from "expo-router/unstable-native-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
   <NativeTabs>
  <NativeTabs.Trigger name="index">
    <NativeTabs.Trigger.Icon
      sf="house.fill"
      md="home"
    />
    <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
  </NativeTabs.Trigger>

  {/* <NativeTabs.Trigger name="about">
    <NativeTabs.Trigger.Icon
      sf="magnifyingglass"
      md="search"
    />
    <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
  </NativeTabs.Trigger> */}

  <NativeTabs.Trigger name="profile">
    <NativeTabs.Trigger.Icon
      sf="person.crop.circle.fill"
      md="person"
    />
    <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
  </NativeTabs.Trigger>
</NativeTabs>
  );
}
