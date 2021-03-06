import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { SDE_URL } from "../helpers/constants";

const parseData = data => {
  const data_jogo = new Date(data);
  return (
    data_jogo
      .getUTCDate()
      .toString()
      .padStart(2, "0") +
    "/" +
    (data_jogo.getUTCMonth() + 1).toString().padStart(2, "0")
  );
};

const Game = props => {
  const { item } = props;
  const mandante_escudo = `${SDE_URL}${item.mandante.escudo}`;
  const visitante_escudo = `${SDE_URL}${item.visitante.escudo}`;

  const info_jogo = item.rodada ? item.rodada : item.fase;

  return (
    <View style={styles.container__jogo}>
      <View style={styles.container__jogo__fase}>
        <Text style={styles.container__jogo__fase__text}>{info_jogo}</Text>
      </View>

      <Text style={styles.container__jogo__placar}>
        <Image
          style={styles.container__jogo__escudo}
          source={{ uri: mandante_escudo }}
        />
        <View style={styles.container__jogo__text}>
          <Text style={styles.container__jogo__text__placar}>
            {item.mandante.sigla} {item.placar_mandante} x{" "}
            {item.placar_visitante} {item.visitante.sigla}
          </Text>
        </View>
        <Image
          style={styles.container__jogo__escudo}
          source={{ uri: visitante_escudo }}
        />
      </Text>

      <Text style={styles.container__jogo__info}>
        {parseData(item.data)} - {item.hora} | {item.estadio}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container__jogo: {
    marginBottom: 30
  },
  container__jogo__fase: {
    width: 80,
    padding: 4,
    backgroundColor: "#f6f6f6",
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 10
  },
  container__jogo__fase__text: {
    color: "#444",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.5
  },
  container__jogo__text: {
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    justifyContent: "center"
  },
  container__jogo__text__placar: {
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    letterSpacing: -0.3
  },
  container__jogo__escudo: {
    alignSelf: "center",
    justifyContent: "center",
    width: 30,
    height: 30
  },
  container__jogo__info: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 12,
    color: "#666",
    letterSpacing: -0.2
  }
});

export default Game;
