import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import { push } from "expo-router/build/global-state/routing";

interface TripCardProps {
  trip: {
    id: number;
    name: string;
    city: string;
    slug: string;
    length1: string;
    difficulty: string;
    details: string;
    img: string;
    rating: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/trips",
            params: { slug: trip.slug },
          })
        }
      >
        <Image source={{ uri: trip.img }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
