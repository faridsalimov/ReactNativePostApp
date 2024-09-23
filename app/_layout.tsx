import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="postDetail" />
    </Stack>
  );
}
