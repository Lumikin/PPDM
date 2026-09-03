import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AudioPlayerScreen() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    async function loadAudio() {
      try {
        console.log("Carregando audio...");
        const { sound: newSound } = await Audio.Sound.createAsync(
          require("./assets/music/RUDE-BUSTER.mp3"),
          { shouldPlay: true },
        );
        soundRef.current = newSound;
        setSound(newSound);
        setIsPlaying(true);
      } catch (error) {
        console.error("Erro ao carregar o áudio: ", error);
      }
    }
    loadAudio();

    return () => {
      if (soundRef.current) {
        console.log("Descarregando da memoria...");
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  async function handlePlayPause() {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reprodutor de musica</Text>
      <TouchableOpacity
        style={[
          styles.button,
          isPlaying ? styles.buttonPause : styles.buttonPlay,
        ]}
        onPress={handlePlayPause}
      >
        <Text style={styles.buttonText}>{isPlaying ? "Pausar" : "Play"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 30,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
  },
  buttonPlay: {
    backgroundColor: "#2563EB",
  },
  buttonPause: {
    backgroundColor: "#DC2626",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
