import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Trips",
        }}
      />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
