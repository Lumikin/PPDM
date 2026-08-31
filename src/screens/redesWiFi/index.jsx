import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Network from "expo-network";
import { SafeAreaView } from "react-native-safe-area-context";

// Linha simples de rótulo/valor usada dentro do card de detalhes
function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

export default function RedesWiFiScreen() {
  const [info, setInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const carregaRede = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const stateWifi = await Network.getNetworkStateAsync();
      let ip = "Indisponivel";
      let airplane = false;

      try {
        ip = await Network.getIpAddressAsync();
      } catch {
        ip = "Indisponivel";
      }
      try {
        airplane = await Network.isAirplaneModeEnabledAsync();
      } catch {
        airplane = false;
      }

      setInfo({
        type: stateWifi.type ?? Network.NetworkStateType.UNKNOWN,
        isConnected: stateWifi.isConnected ?? false,
        isInternetReachable: stateWifi.isInternetReachable ?? false,
        isAirplaneMode: airplane,
        ipAddress: ip,
      });
    } catch (error) {
      setErrorMsg("Não foi possível obter as informações da rede");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Carrega o estado inicial assim que a tela monta
    carregaRede();

    const subscription = Network.addNetworkStateListener(() => carregaRede());

    return () => subscription.remove();
  }, [carregaRede]);

  const isWifi = info?.type === Network.NetworkStateType.WIFI;
  const tipoLabel = info ? (info.type ?? "-") : "-";

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Conexão de Rede</Text>
        <Text style={styles.subtitle}>
          Status da conexão ativa no dispositivo
        </Text>

        {loading && !info ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#25883e" />
            <Text style={styles.loadingText}>Consultando a rede.....</Text>
          </View>
        ) : errorMsg ? (
          <View style={[styles.card, styles.errorCard]}>
            <Text style={styles.errorText}>{errorMsg}</Text>
          </View>
        ) : (
          info && (
            <View style={styles.card}>
              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundColor: info.isConnected
                        ? "#25883e"
                        : "#B12727",
                    },
                  ]}
                />
                <Text style={styles.statusText}>
                  {info.isConnected ? "Conectado" : "Sem Conexão"}
                </Text>
              </View>

              <View style={styles.divider} />

              <InfoRow label="Tipo de conexão" value={tipoLabel} />
              <InfoRow
                label="Rede Wi-Fi"
                value={
                  isWifi ? "Conectado via Wi-Fi" : "Não conectado via Wi-Fi"
                }
              />
              <InfoRow
                label="Internet acessível"
                value={info.isInternetReachable ? "Sim" : "Não"}
              />
              <InfoRow label="Endereço IP" value={info.ipAddress} />
              <InfoRow
                label="Modo avião"
                value={info.isAirplaneMode ? "Ativado" : "Desativado"}
              />
            </View>
          )
        )}

        <Pressable
          style={styles.refreshButton}
          onPress={carregaRede}
          disabled={loading}
        >
          <Text style={styles.refreshText}>
            {loading ? "Atualizando..." : "Atualizar"}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6F7F8",
  },

  content: {
    padding: 20,
    gap: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#18211B",
  },

  subtitle: {
    fontSize: 15,
    color: "#66706A",
    lineHeight: 22,
    marginTop: -8,
  },

  loadingBox: {
    alignItems: "center",
    paddingVertical: 48,
    gap: 12,
  },

  loadingText: {
    color: "#66706A",
    fontSize: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E4E8E5",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  statusText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#18211B",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEF1EF",
    marginVertical: 14,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },

  infoLabel: {
    fontSize: 14,
    color: "#66706A",
  },

  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#18211B",
    flexShrink: 1,
    textAlign: "right",
  },

  errorCard: {
    borderColor: "#F0C9C9",
    backgroundColor: "#FCF2F2",
  },

  errorText: {
    color: "#B12727",
    fontSize: 15,
    textAlign: "center",
  },

  noteCard: {
    backgroundColor: "#F1F6F2",
    borderColor: "#D6E6D9",
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#25883E",
    marginBottom: 6,
  },

  noteText: {
    fontSize: 14,
    color: "#4C5B50",
    lineHeight: 21,
  },

  refreshButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#25883E",
    alignItems: "center",
    justifyContent: "center",
  },

  refreshText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});