//Programa: Modulo ESP32 Wifi com MQTT
//Autor: Arduino e Cia

#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "NOME-DA-REDE-WIFI";
const char* password =  "SENHA-DA-REDE-WIFI";
//const char* mqttServer = "iot.eclipse.org";
//const int mqttPort = 1883;
const char* mqttUser = "abcdefg";
const char* mqttPassword = "123456";

const char* mqttServer = "broker.emqx.io";
const int mqttPort = 8083;

WiFiClient espClient;
PubSubClient client(espClient);

int contador = 1;
char mensagem[30];

void setup()
{
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.println("Iniciando conexao com a rede WiFi..");
  }

  Serial.println("Conectado na rede WiFi!");
}

void loop()
{
  //Faz a conexao com o broker MQTT
  reconectabroker();
  sprintf(mensagem, "MQTT ESP32 - Mensagem no. %d", contador);
  Serial.print("Mensagem enviada: ");
  Serial.println(mensagem);

  //Envia a mensagem ao broker
  client.publish("ArduinoeCia", mensagem);
  Serial.println("Mensagem enviada com sucesso...");
  
  //Incrementa o contador
  contador++;
  
  //Aguarda 30 segundos para enviar uma nova mensagem
  delay(30000);
}

void reconectabroker()
{
  //Conexao ao broker MQTT
  client.setServer(mqttServer, mqttPort);
  while (!client.connected())
  {
    Serial.println("Conectando ao broker MQTT...");
//    if (client.connect("ESP32Client", mqttUser, mqttPassword ))
    if (client.connect("nobreak"))
    {
      Serial.println("Conectado ao broker!");
    }
    else
    {
      Serial.print("Falha na conexao ao broker - Estado: ");
      Serial.print(client.state());
      delay(2000);
    }
  }
}
