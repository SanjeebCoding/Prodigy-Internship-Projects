import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";

import { Container } from "@/components/Container";

const Home = () => {
  const navigation = useNavigation();
  const links = [
    {
      name: "Calculator",
      link: "PRODIGY_AD_01", // 1st Task
      
    },
    {
      name: "Todo",
      link: "PRODIGY_AD_02", // 2nd Task
    },
    {
      name: "Stopwatch",
      link: "PRODIGY_AD_03", // 3rd Task
    },
    {
      name: "Tic Tac Toe",
      link: "PRODIGY_AD_04", // 4th Task
    },
    {
      name: "QR Code Scanner",
      link: "PRODIGY_AD_05", // 5th Task
    },
  ];
  return (
    <Container>
      <View className="flex flex-1 items-center justify-center gap-3">
        <Text className="pt-12 text-center font-SpaceMono text-5xl text-cyan-300">
          Project Lists
        </Text>
        {links.map((link, index) => (
          <Pressable
            onPress={() => navigation.navigate(link.link)}
            key={index}
            className="
          mt-5 w-[300] items-center justify-center rounded-md bg-cyan-300 p-2
          "
          >
            <Text className="font-SpaceMono text-3xl">{link.name}</Text>
          </Pressable>
        ))}
      </View>
    </Container>
  );
};

export default Home;
