import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import {
  Poppins_400Regular,
  useFonts as usePoppins,
} from "@expo-google-fonts/poppins";

import {
  OpenSans_400Regular,
  useFonts as useOpenSans,
} from "@expo-google-fonts/open-sans";

import {
  Inter_400Regular,
  useFonts as useInter,
} from "@expo-google-fonts/inter";

import "./globals.css"; // make sure NativeWind is setup here

SplashScreen.preventAutoHideAsync(); // prevent splash while fonts load

export default function RootLayout() {
  const [poppinsLoaded] = usePoppins({ Poppins_400Regular });
  const [openSansLoaded] = useOpenSans({ OpenSans_400Regular });
  const [interLoaded] = useInter({ Inter_400Regular });

  const fontsLoaded = poppinsLoaded && openSansLoaded && interLoaded;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
