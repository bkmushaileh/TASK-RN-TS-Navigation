import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Stays" }}
      />
      <Stack.Screen name="stays" options={{ title: "Stays Details" }} />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
